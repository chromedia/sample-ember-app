import Ember from 'ember';

export default Ember.Route.extend(Ember.UserApp.ProtectedRouteMixin, {
    model: function(){
        var data = {
            'carrierTypes': this.store.find('carrier-type')
        };

        return data;
    },

    actions: {
        didTransition: function() {

            this.segment.trackPageView("Account Types Selection");

            return true;
        }
    }
});
