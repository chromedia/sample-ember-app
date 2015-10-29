import Ember from 'ember';
import DataStorage from '../utils/data';

var CustomApplicationMixin = Ember.Mixin.create(Ember.UserApp.ApplicationRouteMixin, {

    cordova: Ember.inject.service(),

    // Segment.io
    identifyUser: function() {
        var user = this.get('user').current;
        if (user){
            this.segment.identifyUser(user.user_id, { email: user.email, name: user.first_name+" "+user.last_name});
        }

    },

    beforeModel: function(transition){

        return Ember.RSVP.all([this.get('cordova').setup()], this._super(transition));
    },

    actions: {

        logoutSucceeded: function() {
            var self = this;
            Ember.get(self, 'flashMessages').clearMessages();
            Ember.get(self, 'flashMessages').success("You have logged out from Ember App");
            this.transitionTo(Ember.UserApp.loginRoute).then(function() {
                self.get('user').reset();

                if (Ember.UserApp.resetAtLogin) {
                    App.reset();
                }
            });
        }
    }
});

export default Ember.Route.extend(CustomApplicationMixin);
