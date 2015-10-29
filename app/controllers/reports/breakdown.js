import Ember from 'ember';
import BaseReport from '../../mixins/reports/base-report-controller';
import BaseGraph from '../../mixins/reports/base-graph-controller';
import Colors from '../../utils/colors';

export default Ember.Controller.extend(BaseReport,BaseGraph, {

    currentRoute: 'reports.breakdown',

    title: function(){

        return ("consumer" === this.get('type') ? "Consumer Paid" : "Insurance Paid")+" ";

    }.property('type'),

    chartData: function(){
        var retVal;
        switch(this.get('chart')){
            case "pie":
                retVal = this.get('modelData.data');
                break;
            case "bar":
                retVal = this.get('modelData.groupedData');
                break;
        }

        return retVal;

    }.property("modelData", "chart"),

    modelData: function(){

        var data = this.get('filteredContent');
        var groupedData = {};
        var usedColors = [];
        var totalValue = 0;
        var self = this;
        var dataGroupingAttr = this.get('periodGroupingKey'); // either month, week, year

        data.forEach(function(row){

            // initialize group data by type
            var groupingKey = row.get('expenseType.id');

            // group data by period
            var groupingKeyByPeriod = row.get(dataGroupingAttr);
            if (!groupedData[groupingKey]) {

                var rowColor = Colors.random(usedColors);
                usedColors.push(rowColor);

                // init collection bar graph attr
                groupedData[groupingKey] = {
                    value: 0,
                    expenseType: row.get('expenseType'),
                    color: rowColor
                };

                // init collection for groupedByPeriod
                groupedData[groupingKey].groupedByPeriod = {};
            }

            // init value for [expenseType][groupedByPeriod][$periodFilter$]
            if (!groupedData[groupingKey].groupedByPeriod[groupingKeyByPeriod]){
                groupedData[groupingKey].groupedByPeriod[groupingKeyByPeriod] = 0;
            }

            // whether to get value from cash out or planPaid
            var _val = "consumer" === self.get('type') ? row.get('cashOut') : row.get('planPaid');

            // compute values for this type
            groupedData[groupingKey].value += _val;
            totalValue = totalValue + _val;

            // update values for bargraph
            groupedData[groupingKey].groupedByPeriod[groupingKeyByPeriod] += _val;

        }); // enda data.forEach

        var modelData = [];
        Ember.$.each(groupedData, function(key, item){
            if (0 !== item.value) {
                item.percentage = ((item.value/totalValue)*100).toFixed(2);
                modelData.push(item);
            }
        });

        return {
            data: modelData,
            total: totalValue,
            groupedData: groupedData
        };

    }.property('filteredContent'),


});