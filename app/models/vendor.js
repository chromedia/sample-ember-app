import DS from 'ember-data';
import Fixture from '../fixtures/vendors';

var Vendor = DS.Model.extend({
    name: DS.attr("string")
});

Vendor.reopenClass({
    FIXTURES: Fixture.data
});

export default Vendor;
