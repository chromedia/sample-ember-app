import Ember from 'ember';
import BaseReport from '../../mixins/reports/base-report-controller';

export default Ember.Controller.extend(BaseReport, {
    queryParams: ['chart'],
    chart: "pie",
    chartData: [],
    reportType: "",
    "period": "monthly",

    defaultMonthlyRoute: 'reports.monthly-overview',

    defaultYearlyRoute: 'reports.yearly-overview',

    chartControls: [

        {
            route: 'reports.monthly-overview',
            chartParameter: 'pie',
            chartIcon: 'fa-pie-chart'
        },

        {
            route: 'reports.monthly-overview',
            chartParameter: 'bar',
            chartIcon: 'fa-bar-chart'
        }
    ]

});