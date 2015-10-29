import Ember from 'ember';
import CurrentUserAwareMixin from "../../mixins/custom-userapp";
import InsightsAwareMixin from "../../mixins/insights-aware";

export default Ember.Route.extend(Ember.UserApp.ProtectedRouteMixin, CurrentUserAwareMixin, InsightsAwareMixin, {

    setupController: function (controller, model) {
        this._super(controller, model);
        controller.set('showTour', this.getHasAccessOverviewTour() ? false : true);
        controller.set('dependent', 0);
    },

    beforeModel: function(transition){
        this.setInsightsProperties();
        if (!this.hasAddedAccount()){
            transition.abort();
            this.transitionTo('reports.overview-no-data');
        }
    },

    model: function(){
        return this.store.find('claim');
    },

    actions: {
        didTransition: function() {

            this.segment.trackPageView("Reports Breakdown");

            return true;
        }
    }
});
