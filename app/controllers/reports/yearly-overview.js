import Ember from 'ember';
import BaseReport from '../../mixins/reports/base-report-controller';

export default Ember.Controller.extend(BaseReport, {
    queryParams: ['chart'],
    chart: "pie",
    chartData: [],
    reportType: "",
    "period": "yearly",

    defaultMonthlyRoute: 'reports.monthly-overview',

    defaultYearlyRoute: 'reports.yearly-overview',

    chartControls: [

        {
            route: 'reports.yearly-overview',
            chartParameter: 'pie',
            chartIcon: 'fa-pie-chart'
        },

        {
            route: 'reports.yearly-overview',
            chartParameter: 'bar',
            chartIcon: 'fa-bar-chart'
        }
    ]

});