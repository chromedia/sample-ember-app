import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function(transition){
        transition.abort();
        console.log("here at logout");
        this.send("logout");
    }
});