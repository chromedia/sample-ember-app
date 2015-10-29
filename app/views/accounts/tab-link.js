import Ember from "ember";

export default Ember.View.extend({
    classNames: ["tab-title"],

    classNameBindings: ['active'],

    active: function(){
        var retVal = parseInt(this.get('active-type')) === parseInt(this.get('carrier-type'));


        return retVal;
    }.property(),

    tagName: "li",

    typeObserver: function(){
        Ember.run.once(this, 'activate');

    }.observes('parentController.targetType'),

    activate: function(){
        this.set('active', parseInt(this.get('active-type')) === parseInt(this.get('carrier-type')));
    }

});