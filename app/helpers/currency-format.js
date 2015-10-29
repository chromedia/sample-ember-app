import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(value) {

    var formatted = value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

    return formatted;
});