import DS from 'ember-data';
import Fixture from '../fixtures/dependents';

var Dependent = DS.Model.extend({
    name: DS.attr('string'),
});

Dependent.reopenClass({
    FIXTURES: Fixture.data
});

export default Dependent;
