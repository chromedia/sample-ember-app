import Ember from 'ember';
import BaseReport from '../../mixins/reports/base-report-controller';
import BaseGraph from '../../mixins/reports/base-graph-controller';
import Colors from '../../utils/colors';

export default Ember.Controller.extend(BaseReport, BaseGraph, {

    currentRoute: 'reports.overview',

    backButtonRoute: function(){

        var route = "";
        switch (this.get('period')){
            case 'monthly':
                route = "reports.monthly-breakdown";
                break;
            case 'yearly':
                route = "reports.yearly-breakdown";
                break;
        }

        return route;

    }.property('type', 'period'),

    title: function(){

        return "Overview";

    }.property('period'),

    // override filter for coverage paid  since we are in overview
    applyTypeFilter: function(result){
        // no filtering for type in overview pages
        return result;
    },

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

        var totalCashOut = this.get('totalCashOut');
        var totalPlanPaid = this.get('totalPlanPaid');
        var totalNetCost = this.get('totalNetCost');
        var dataGroupingAttr = this.get('periodGroupingKey');

        // group data for bar chart
        data.forEach(function(row){

            // group data by period
            var groupingKey = row.get(dataGroupingAttr);
            if (!groupedData[groupingKey]) {

                groupedData[groupingKey] = {
                    totalCashOut: 0,
                    totalPlanPaid: 0,
                    models: []
                };
            }

            // compute data
            groupedData[groupingKey].totalCashOut = groupedData[groupingKey].totalCashOut+row.get('cashOut');
            groupedData[groupingKey].totalPlanPaid = groupedData[groupingKey].totalPlanPaid+row.get('planPaid');

        }); // enda data.forEach

        return {
            data: [
                {
                    key: "consumer",
                    title: "Consumer Paid",
                    type: "consumer",
                    value: totalCashOut,
                    percentage: ((totalCashOut/totalNetCost)*100).toFixed(2),
                    color: Colors.names[0],
                },
                {
                    key: "insurance",
                    title: "Insurance Covered",
                    type: "insurance",
                    value: totalPlanPaid,
                    percentage: ((totalPlanPaid/totalNetCost)*100).toFixed(2),
                    color: Colors.names[1],
                },
            ],
            groupedData: groupedData
        };

    }.property('filteredContent'),


});