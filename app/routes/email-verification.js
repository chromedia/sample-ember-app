import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({

    actions: {
        error: function (error) {
            try{
                Ember.get(this, 'flashMessages').clearMessages();
                Ember.get(this, 'flashMessages').warning(error.message, {sticky: true});

                this.transitionTo('login');
            }
            catch (e){
                console.log(e);
            }

        }
    },

    afterModel: function() {
        Ember.get(this, 'flashMessages').clearMessages();
        Ember.get(this, 'flashMessages').success('Email verified', {sticky: true});

        this.transitionTo('login');
    },

    model: function(params){

        var promise = new Ember.RSVP.Promise(
            function (resolve, reject) {
                console.log("Verifying email: " + params.token);

                // TODO: EmberUserApp only initializes with app_id
                UserApp.initialize({appId: config.UserApp.id, token: config.UserApp.token});

                UserApp.User.verifyEmail({
                    "email_token": params.token
                }, function (error, result) {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(result);
                    }
                });
            });

        return promise;
    }
});