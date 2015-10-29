import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(value, total) {

    return ((value/total)*100).toFixed(2);
});