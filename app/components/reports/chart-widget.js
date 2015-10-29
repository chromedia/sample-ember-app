import Ember from 'ember';
import Colors from '../../utils/colors';

export default Ember.Component.extend({
    classNames: ["row"],

    chartTypeObserver: function(){
        Ember.run.once(this, 'drawChart');

    }.observes('parentController.chart'),

    chartInstance: null,

    didInsertElement: function(){
        this.drawChart();
    },

    drawChart: function(){
        var chartType = this.get('chart-type');
        if (null !== this.chartInstance) {
            console.log("destroy chart");
            this.chartInstance.destroy();
        }

        switch (chartType) {
            case "bar":
                this.drawBarChart();
                break;
            case "line":
                break;
            case "pie":
                this.drawPieChart();
                break;
        }
    },

    drawPieChart: function(){

        Ember.$('#pie-chart-widget').show();
        Ember.$('#bar-chart-widget').hide();

        // build data
        var chartData = [];
        var modelData = this.get('modelData');
        var self = this;
        modelData.forEach(function(row){
            var inPercentage =((row.cost/self.get('overall-total'))*100).toFixed(2);

            var d = {
                value: inPercentage,
                //label: inPercentage+"%",
                color: row.color
            };
            chartData.push(d);
        });

        var pieOptions = {
            segmentShowStroke : false,
            animateScale: false
        };

        var widget = document.getElementById("pie-chart-widget").getContext("2d");

        this.chartInstance = new Chart(widget).Doughnut(chartData, pieOptions);
    },

    drawBarChart: function(){

        Ember.$('#bar-chart-widget').show();
        Ember.$('#pie-chart-widget').hide();

        var labelValues = ["Week 1", "Week 2", "Week 3", "Week 4"];
        var modelData = this.get('modelData');
        var datasets = [];

        // group data by type
        modelData.forEach(function(row){

            var weeks = {1: 0, 2: 0, 3: 0, 4:0};
            row.models.forEach(function(rawModel){
                weeks[rawModel.get('week')] = weeks[rawModel.get('week')]+rawModel.get('cost');
            });
            var computedData = [];
            Ember.$.each(weeks, function(key, item){
                computedData.push(item);
            });

            var currentData = {
                label: row.expenseType.get('name'),
                fillColor: row.color,
                strokeColor: "rgba(220,220,220,0.8)",
                data: computedData,
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)"
            };

            datasets.push(currentData);
        });

        var chartData = {
            labels: labelValues,
            datasets: datasets
        };

        var options = {
            scaleBeginAtZero : true,
            barShowStroke : false
        };

        var ctx = document.getElementById("bar-chart-widget").getContext("2d");
        new Chart(ctx).StackedBar(chartData, options);
    }
});
