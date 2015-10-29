import Ember from 'ember';
import CurrentUserAwareMixin from "../../mixins/custom-userapp";
import InsightsAwareMixin from "../../mixins/insights-aware";

export default Ember.Route.extend(Ember.UserApp.ProtectedRouteMixin, CurrentUserAwareMixin, InsightsAwareMixin, {

    targetType: null,

    userAppDataCarriers: function(){
        var user = this.get('user').current;

        var currentCarriers = [];
        try{
            // todo check valid json string
            currentCarriers  = window.JSON.parse(user.properties.carriers.value);
        }
        catch (e) {}

        if (!currentCarriers) {
            currentCarriers = [];
        }

        return currentCarriers;

    },

    beforeModel: function(){

        this.setInsightsProperties();
    },

    setupController: function (controller, model) {

        this._super(controller, model);
        controller.set('targetType', this.targetType);
        controller.set('activeCarrierType', this.store.find('carrier-type', this.targetType));

        this.store.find('carrier-type').then(function(data){
            controller.set('allTypes', data);
        });
    },

    removeCarrier: function(carrier){
        var self = this;
        var user = this.get('user').current;
        var currentCarriers = this.userAppDataCarriers();
        var targetId = carrier.id;
        var _store = this.store;

        currentCarriers = Ember.$.grep(currentCarriers, function(item){
            return item.id !== targetId;
        });

        var propertyValue = currentCarriers.length ? window.JSON.stringify(currentCarriers) : null;

        user.properties.carriers = {
            override: true,
            value:propertyValue
        };

        var promise = new Ember.RSVP.Promise(function(resolve){
            UserApp.User.save(user, function(error){
                if (error) {
                    Ember.get(self, 'flashMessages').warning(error.message, {sticky: true});
                }
                else {
                    Ember.get(self, 'flashMessages').success("You have deleted an account");

                    currentCarriers = Ember.$.grep(currentCarriers, function(item){
                        return item.carrier_type === self.targetType;
                    });

                    Ember.$.map(currentCarriers, function(item){
                        var carrier = _store.find('carrier', item.carrier_id);
                        item['carrier'] = carrier;

                        return item;
                    });

                    self.set('controller.content', currentCarriers);
                    self.setInsightsProperties();
                    resolve({"result": "ok"});
                }
            });
        });

        return promise;
    },

    actions: {

        removeItem: function(){
            var el = this.get('controller.removeItemTarget').el;
            var self = this;
            var item = this.get('controller.removeItemTarget').item;

            Ember.$("#remove-confirmation-modal").foundation('reveal', 'close');

            el.fadeOut(600, function() {
                self.set('controller.removeItemTarget', null);
                el.remove();
                self.removeCarrier(item);
            });
        },

        didTransition: function() {

            this.segment.trackPageView("Accounts Index");

            return true;
        }

    }, // end of actions

    model: function(params){
        var _store = this.store;
        var currentCarriers = this.userAppDataCarriers();
        var self = this;
        self.targetType = params['carrier-type'];

        currentCarriers = Ember.$.grep(currentCarriers, function(item){
            return item.carrier_type === self.targetType;
        });

        Ember.$.map(currentCarriers, function(item){
            var carrier = _store.find('carrier', item.carrier_id);
            item['carrier'] = carrier;

            return item;
        });

        return Ember.A(currentCarriers);
    }
});
