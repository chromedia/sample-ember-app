import Ember from 'ember';
import BaseReport from '../mixins/reports/base-report-controller';

export default Ember.Controller.extend(BaseReport, {
    monthlyData: null,
    queryParams: ['chart'],
    chart: "pie",
    chartData: [],
    "period": "monthly",
    actions: {
        query: function() {

        }
    }
});
