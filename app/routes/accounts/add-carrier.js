import Ember from 'ember';
import IdGenerator from '../../utils/uuid-generator';

export default Ember.Route.extend(Ember.UserApp.ProtectedRouteMixin, {
    actions: {

        didTransition: function() {

            this.segment.trackPageView("Accounts Add Carrier");

            return true;
        },

        persistCarrier: function(carrierData){
            Ember.get(this, 'flashMessages').clearMessages();
            var user = this.get('user').current;
            var self = this;

            carrierData.id = IdGenerator.uuid();

            var currentCarriers = [];
            try{
                // todo check valid json string
                currentCarriers  = window.JSON.parse(user.properties.carriers.value);
            }
            catch (e) {}

            if (!currentCarriers) {
                currentCarriers = [];
            }

            // add submitted carrier
            currentCarriers.push(carrierData);
            user.properties.carriers = {
                override: true,
                value: window.JSON.stringify(currentCarriers)
            };

            UserApp.User.save(user, function(error){
                if (error) {
                    Ember.get(self, 'flashMessages').warning(error.message, {sticky: true});
                }
                else {
                    Ember.get(self, 'flashMessages').success("You have added an account");
                }
                self.transitionTo('/accounts/list/'+carrierData.carrier_type);
            });

        }
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        controller.set("plan_type", "");
        controller.set("group_number", "");
        controller.set("account_username", "");

        model.get('type').then(function(type){
            controller.set("title", type.get('name')+" Details");
            controller.set("isInsurance", parseInt(type.get('id')) === 1);
        });
    },

    model: function(params) {

        return this.store.find('carrier', params.carrier_id);
    }
});