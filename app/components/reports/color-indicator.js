import Ember from 'ember';

export default Ember.Component.extend({
    tagName: "span",

    classNames: ["icon"],

    attributeBindings: ['style'],

    style: function(){

        return new Ember.Handlebars.SafeString("background-color: " + this.get('background-color'));

    }.property('background-color')
});
