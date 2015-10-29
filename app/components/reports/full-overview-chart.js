import Ember from 'ember';
import Colors from '../../utils/colors';

export default Ember.Component.extend({
    classNames: ["row"],

    layoutName: "components/reports/chart-widget",

    chartTypeObserver: function(){
        Ember.run.once(this, 'drawChart');

    }.observes('parentController.filteredContent', 'parentController.chart'),

    chartInstance: null,

    didInsertElement: function(){
        this.drawChart();
    },

    drawChart: function(){
        var chartType = this.get('chart-type');
        if (null !== this.chartInstance) {
            this.chartInstance.destroy();
        }

        switch (chartType) {
            case "bar":
                this.drawBarChart();
                break;
            case "pie":
                this.drawPieChart();
                break;
        }
    },

    drawPieChart: function(){
        var chartData = [];
        var modelData = this.get('chart-data');

        Ember.$('#pie-chart-widget').show();
        Ember.$('#bar-chart-widget').hide();

        modelData.forEach(function(item){
            chartData.push({
                value: item.value.toFixed(2),
                color: item.color
            });
        });

        var pieOptions = {
            segmentShowStroke : false,
            animateScale: false,
            tooltipTemplate: "$<%= value %>"
        };

        var widget = document.getElementById("pie-chart-widget").getContext("2d");

        this.chartInstance = new Chart(widget).Doughnut(chartData, pieOptions);
    },

    buildChartData: function(){
        var modelData = this.get('chart-data');

        var labelValues = this.get('parentController.barGraphLabels.values');
        var labelDataMap = this.get('parentController.barGraphLabels.mapping');

        // cash out data set
        var consumperPaidDataSet = {
            data: [],
            fillColor: Colors.names[0],
            strokeColor: "rgba(220,220,220,0.8)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)"
        };

        // plan covered data set
        var insurancePaidDataSet = {
            data: [],
            fillColor: Colors.names[1],
            strokeColor: "rgba(220,220,220,0.8)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)"
        };


        Ember.$.each(labelValues, function(key, item){
            var key = labelDataMap[key];
            if (modelData[key]){
                // update cash out and plan covered values
                consumperPaidDataSet.data.push(modelData[key].totalCashOut.toFixed(2));
                insurancePaidDataSet.data.push(modelData[key].totalPlanPaid.toFixed(2));
            }
            else {
                // no data
                consumperPaidDataSet.data.push(0);
                insurancePaidDataSet.data.push(0);
            }
        });

        var datasets = [
            consumperPaidDataSet,
            insurancePaidDataSet
        ];

        var datasets = [
            consumperPaidDataSet,
            insurancePaidDataSet
        ];

        return {
            labels: labelValues,
            datasets: datasets
        };
    },

    drawBarChart: function(){

        Ember.$('#bar-chart-widget').show();
        Ember.$('#pie-chart-widget').hide();

        var chartData = null;
        chartData = this.buildChartData();

        var options = {
            scaleBeginAtZero : true,
            barShowStroke : false,
            multiTooltipTemplate: "$<%= value %>",
        };

        var ctx = document.getElementById("bar-chart-widget").getContext("2d");
        this.chartInstance = new Chart(ctx).StackedBar(chartData, options);
    }
});
