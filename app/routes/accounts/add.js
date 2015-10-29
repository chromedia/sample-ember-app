import Ember from 'ember';

export default Ember.Route.extend(Ember.UserApp.ProtectedRouteMixin, {

    targetType: null,

    setupController: function (controller, model) {
        this._super(controller, model);
        //controller.set('content', [{id: 1}, {id: 3}]);
        controller.set('targetType', this.targetType);
        controller.set('filter', '');
        controller.set('activeCarrierType', this.store.find('carrier-type', this.targetType));
    },

    actions: {
        didTransition: function(transition) {
            this.segment.trackPageView("Search Account Provider", {type: this.controller.get('targetType')});

            return true;
        }
    },


    model: function(params){
        var store = this.store;
        var self = this;
        this.targetType = params['carrier-type'];

        var promise = new Ember.RSVP.Promise(function(resolve, reject){

            var carrierType = parseInt(params['carrier-type']);
            store.find('carrier', {'type': carrierType} ).then(function(data){
                resolve(data);
            });
        });

        return promise;
    }
});
