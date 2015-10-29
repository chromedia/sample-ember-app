import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ['chart'],
    chart: null,
    chartData: [],
    reportType: ""
});