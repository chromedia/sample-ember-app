import Ember from "ember";

export default Ember.View.extend({
    classNames: ["tab-title"],

    tagName: "li",

    classNameBindings: ['active'],

    active: function(){
        return this.isActive();
    }.property('current-tab', 'target-tab'),

    isActive: function(){
        var retVal = this.get('current-tab') === this.get('target-tab');

        return retVal
    }

});