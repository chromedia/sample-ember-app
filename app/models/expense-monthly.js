import DS from 'ember-data';
import Fixture from '../fixtures/monthly-breakdown';

var ExpenseMonthly = DS.Model.extend({
    expenseType: DS.belongsTo('expense-type', {async: true}),
    cost: DS.attr('number'),
    week: DS.attr('number'),
    consumerPaid: DS.attr('boolean'),
    dateCreated: DS.attr('date'),
    expenseTypeLabel: Ember.computed.alias('expense-type.name')
});

ExpenseMonthly.reopenClass({
    FIXTURES: Fixture.data
});

export default ExpenseMonthly;


