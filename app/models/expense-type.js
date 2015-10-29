import DS from 'ember-data';
import Fixture from '../fixtures/expense-type';

var ExpenseType = DS.Model.extend({
    name: DS.attr('string')
});

ExpenseType.reopenClass({
    FIXTURES: Fixture.data
});

export default ExpenseType;