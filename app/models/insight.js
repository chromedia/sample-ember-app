import DS from 'ember-data';
import Fixture from '../fixtures/insight';

var Insight = DS.Model.extend({
    insightCategory: DS.belongsTo('insight-category', {async: true}),
    title: DS.attr('string'),
    content: DS.attr('string'),
    followUpContent: DS.attr('string'),
    buttons: DS.attr('array')
});

Insight.reopenClass({
    FIXTURES: Fixture.data
});

export default Insight;