import DS from 'ember-data';
import Fixture from '../fixtures/insight-category';

var InsightCategory = DS.Model.extend({
    name: DS.attr('string'),
});

InsightCategory.reopenClass({
    FIXTURES: Fixture.data
});

export default InsightCategory;
