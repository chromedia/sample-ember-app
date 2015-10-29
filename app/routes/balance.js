import Ember from 'ember';
import CurrentUserAwareMixin from "../mixins/custom-userapp";
import InsightsAwareMixin from "../mixins/insights-aware";

export default Ember.Route.extend(Ember.UserApp.ProtectedRouteMixin, CurrentUserAwareMixin, InsightsAwareMixin, {



    actions: {
        didTransition: function() {

            this.segment.trackPageView("Balances");

            return true;
        }
    }
});
