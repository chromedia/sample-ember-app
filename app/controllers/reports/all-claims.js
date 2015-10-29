import Ember from 'ember';
import BaseReport from '../../mixins/reports/base-report-controller';

export default Ember.Controller.extend(BaseReport, {

    currentRoute: 'reports.all-claims',

    defaultMonthlyRoute: 'reports.all-claims',

    defaultYearlyRoute: 'reports.all-claims',

    backButtonRoute: function(){

        var route = "reports.breakdown";

        return route;

    }.property('type', 'period'),

    title: function(){

        return ("consumer" === this.get('type') ? "Consumer Paid" : "Insurance Paid")+" Transactions";

    }.property('type'),

    totalCashOut: function(){

        var retVal = 0;
        this.get('filteredContent').forEach(function(row){

            retVal += row.get('cashOut');
        });

        return retVal;

    }.property('filteredContent'),

    totalPlanPaid: function(){

        var retVal = 0;
        this.get('filteredContent').forEach(function(row){

            retVal += row.get('planPaid');
        });

        return retVal;

    }.property('filteredContent')


});