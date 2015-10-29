import DS from 'ember-data';
import Fixture from '../fixtures/carriers';

var Carrier = DS.Model.extend({
    name: DS.attr('string'),
    type: DS.belongsTo('carrier-type', {async: true}),
    popular: DS.attr('boolean')
});

// Fixtures
Carrier.reopenClass({
    FIXTURES: Fixture.data
});

export default Carrier;
