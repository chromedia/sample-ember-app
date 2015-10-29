import Ember from 'ember';
import CurrentUserAwareMixin from "../../mixins/custom-userapp";

export default Ember.Route.extend(Ember.UserApp.ProtectedRouteMixin, CurrentUserAwareMixin, {

    pickRandom: function(usedIds) {
        var min = 1;
        var max = 19;

        var _id = Math.floor(Math.random() * (max - min + 1)) + min;

        if (-1 !== usedIds.indexOf(_id) ) {
            return this.pickRandom(usedIds);
        }
        else {
            return _id;
        }


    },

    model: function(){
        var store = this.store;
        var self = this;

        var promise = new Ember.RSVP.Promise(function(resolve, reject){

            if (self.hasAddedAccount()) {

                store.find('insight').then(function(data){
                    var generatedIds = [];
                    var prunedData = [];

                    // show only 4
                    for (var x=0; x<4;x++){
                        var _id = self.pickRandom(generatedIds);
                        generatedIds.push(_id);
                    }

                    prunedData = Ember.$.grep(data.content, function(item){
                        return -1 !== generatedIds.indexOf(parseInt(item.get('id')));
                    });

                    resolve(prunedData);
                });
            }
            else {
                resolve([]);
            }

        });

        return promise;

    },

    actions: {
        didTransition: function() {

            this.segment.trackPageView("Insights");

            return true;
        }
    }
});
