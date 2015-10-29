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
        var chartData = [];
        var modelData = this.get('modelData');

        Ember.$('#pie-chart-widget').show();
        Ember.$('#bar-chart-widget').hide();

        chartData.push({
            value: modelData.consumer.percentage,
            color: modelData.consumer.color
        });

        chartData.push({
            value: modelData.insurance.percentage,
            color: modelData.insurance.color
        });

        var pieOptions = {
            segmentShowStroke : false,
            animateScale: false
        };

        var widget = document.getElementById("pie-chart-widget").getContext("2d");

        this.chartInstance = new Chart(widget).Doughnut(chartData, pieOptions);
    },

    drawBarChart: function(){
        var labelValues = ["Week 1", "Week 2", "Week 3", "Week 4"];
        var modelData = this.get('modelData');
        var types = ["consumer", "insurance"];
        var datasets = [];
        var self = this;

        Ember.$('#bar-chart-widget').show();
        Ember.$('#pie-chart-widget').hide();


        types.forEach(function(key){
            var currentData = self.computeWeeklyData(modelData[key].models);

            datasets.push({
                fillColor: modelData[key].color,
                strokeColor: "rgba(220,220,220,0.8)",
                data: currentData,
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)"
            });
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
        this.chartInstance = new Chart(ctx).StackedBar(chartData, options);
    },

    computeWeeklyData: function(models){
        var computedData = [];
        var weeks = {1: 0, 2: 0, 3: 0, 4:0};

        // set the weekly values
        models.forEach(function(rawModel){
            weeks[rawModel.get('week')] = weeks[rawModel.get('week')]+rawModel.get('cost');
        });

        Ember.$.each(weeks, function(key, item){

            // compute percentage

            computedData.push(item.toFixed(2));
        });

        return computedData;
    }
});
