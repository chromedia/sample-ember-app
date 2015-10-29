import DS from 'ember-data';
import Fixture from '../fixtures/current-year-data';

var YearlyExpense = DS.Model.extend({
    expenseType: DS.belongsTo('expense-type', {async: true}),
    cost: DS.attr('number'),
    consumerPaid: DS.attr('boolean'),
    dateCreated: DS.attr('date'),
    expenseTypeLabel: Ember.computed.alias('expense-type.name')
});

YearlyExpense.reopenClass({
    FIXTURES: Fixture.data
});

export default YearlyExpense;
