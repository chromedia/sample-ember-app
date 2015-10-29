import Ember from 'ember';
import CurrentUserAwareMixin from "../../mixins/custom-userapp";
import InsightsAwareMixin from "../../mixins/insights-aware";
import Colors from '../../utils/colors';

export default Ember.Route.extend(Ember.UserApp.ProtectedRouteMixin, CurrentUserAwareMixin, InsightsAwareMixin, {

    setupController: function (controller, model) {
        this._super(controller, model);
        controller.set('showTour', this.getHasAccessOverviewTour() ? false : true);
        controller.set('dependent', 0);
        console.log(controller.get('type'));
        var isInConsumerPaid = "consumer" === controller.get('type');
        controller.set('cashOutCellClass', isInConsumerPaid ? "" : "subtext"); // highlight the cash out column
        controller.set('planPaidCellClass', isInConsumerPaid ? "subtext" : ""); // highlight the insurance coverage column

    },

    beforeModel: function(transition){
        this.setInsightsProperties();
        if (!this.hasAddedAccount()){
            transition.abort();
            this.transitionTo('reports.overview-no-data');
        }
    },

    model: function(params){
        var store = this.store;
        var self = this;
        var usedColors = [];

        if (self.get('hasAddedAccount')) {
            return new Ember.RSVP.Promise(function(resolve){
                store.find('claim')
                    .then(function (data) {
                        resolve(data);
                    });
            });
        }
        else {

        }
    },

    actions: {
        didTransition: function() {

            this.segment.trackPageView("Reports Transactions");

            return true;
        }
    }
});
