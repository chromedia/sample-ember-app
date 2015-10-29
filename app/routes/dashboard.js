import Ember from 'ember';
import CurrentUserAwareMixin from "../mixins/custom-userapp";
import InsightsAwareMixin from "../mixins/insights-aware";

export default Ember.Route.extend(Ember.UserApp.ProtectedRouteMixin, CurrentUserAwareMixin, InsightsAwareMixin, {
    beforeModel: function(transition){
        transition.abort();
        this.transitionTo('reports.overview');
    }
});
