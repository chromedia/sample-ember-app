import DS from 'ember-data';
import Fixture from '../fixtures/claims';

var Claim = DS.Model.extend({

    dependent: DS.belongsTo('dependent', {async: true}),

    expenseType: DS.belongsTo('expense-type', {async: true}),

    vendor: DS.belongsTo('vendor', {async: true}),

    amountBilled: DS.attr('number'), //D

    discount: function(){

        return this.get("memberRate")-this.get("amountBilled");

    }.property("memberRate", "amountBilled"), // E=F-D

    memberRate: DS.attr('number'), // F

    copay: DS.attr('number'), // G

    amountTowardDeductible: DS.attr('number'), // H

    planPaid: DS.attr('number'), // J

    adjustments: DS.attr('number'), // K

    coinsurance: function(){
        var val = this.get('memberRate')-this.get('copay')-this.get('planPaid')+this.get('adjustments');

        return val;
    }.property("memberRate", "copay", "planPaid", "adjustments"), // L = F-G-J+K

    hcFund: DS.attr('number'), // M

    owed: function(){
        var val = this.get("coinsurance")+this.get("copay")-this.get("hcFund");

        return val;
    }.property("coinsurance","copay","hcFund"), // N = L+G-M

    cashOut: function(){

        return this.get("hcFund")+this.get("owed");

    }.property("hcFund", "owed"),

    dateCreated: DS.attr('date'),

    month: function(){
        return this.get('dateCreated').getMonth();
    }.property("dateCreated"),

    year: function(){
        return this.get('dateCreated').getFullYear();
    }.property("dateCreated"),

    week: function(){
        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        var prefixes = [1, 2, 3, 4, 5];

        return prefixes[0 | this.get('dateCreated').getDate() / 7];

    }.property("dateCreated"),

    formattedDate: function(){
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];

        var date = this.get('dateCreated');
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();

        return monthNames[monthIndex]+" "+day+", "+year;

    }.property("dateCreated"),

    netCost: function(){
        return this.get('memberRate');
    }.property('memberRate')
});

Claim.reopenClass({
    FIXTURES: Fixture.data
});

export default Claim;
