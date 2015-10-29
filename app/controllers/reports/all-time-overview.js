import Ember from 'ember';
import BaseReport from '../../mixins/reports/base-report-controller';

export default Ember.Controller.extend(BaseReport, {
    queryParams: ['chart'],
    chart: null,
    chartData: [],
    reportType: "",
    "period": "all-time",
});