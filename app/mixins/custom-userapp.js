import Ember from 'ember';

export default Ember.Mixin.create({
    findEmail: function(){
        console.log("kiam is here");
    },

    currentUser: function(){
        var user = this.get('user').current;


        if (!user.first_name || "" ===user.first_name ){
            user.greetingsName = user.email;
        }
        else {
            user.greetingsName = user.first_name;
        }

        user.full_name = Ember.$.trim(user.first_name + " "+user.last_name);
        
        return user;

    }.property(),

    hasAddedAccount: function(){
        return this.getCurrentCarriers().length > 0;
    },

    currentCarriers: function(){

        return this.getCurrentCarriers();

    }.property(),

    setHasAccessedOverviewTour: function(value){
        var user = this.get('user').current;
        user.properties.accessed_overview_tour = {
            override: true,
            value: value
        };

        // TODO: centralize saving of user data
        return new Ember.RSVP.Promise(function(resolve, reject){
            UserApp.User.save(user, function(error){
                if (error) {
                    reject(error);
                }
                else {
                    resolve();
                }
            });
        });

    },

    getHasAccessOverviewTour: function(){
        var user = this.get('user').current;

        return user.properties.accessed_overview_tour.value
    },

    getCurrentCarriers: function(){
        var user = this.get('user').current;
        var _store = this.store;

        var currentCarriers = [];
        try{
            // todo check valid json string
            currentCarriers  = window.JSON.parse(user.properties.carriers.value);
        }
        catch (e) {}

        if (!currentCarriers) {
            currentCarriers = [];
        }

        Ember.$.map(currentCarriers, function(item){
            var carrier = _store.find('carrier', item.carrier_id);
            item['carrier'] = carrier;

            return item;
        });

        return currentCarriers;
    }
});