import Ember from 'ember';
import BaseReport from '../../mixins/reports/base-report-controller';

export default Ember.Controller.extend(BaseReport, {
    queryParams: ['chart', 'type'],

    chart: "pie",

    type: "consumer",

    title: function(){
        return "consumer" === this.get('type') ? "Consumer Paid" : "Insurance Paid";
    }.property('type'),

    chartData: [],

    "period": "yearly",

    defaultMonthlyRoute: 'reports.monthly-breakdown',

    defaultYearlyRoute: 'reports.yearly-breakdown',

    chartControls: [

        {
            route: 'reports.yearly-breakdown',
            chartParameter: 'pie',
            chartIcon: 'fa-pie-chart'
        },

        {
            route: 'reports.yearly-breakdown',
            chartParameter: 'bar',
            chartIcon: 'fa-bar-chart'
        }
    ]

});