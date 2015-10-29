import Ember from 'ember';
import CurrentUserAwareMixin from "../../mixins/custom-userapp";
import Colors from '../../utils/colors';
import InsightsAwareMixin from "../../mixins/insights-aware";

export default Ember.Route.extend(Ember.UserApp.ProtectedRouteMixin, CurrentUserAwareMixin, InsightsAwareMixin, {

    setupController: function (controller, model) {
        this._super(controller, model);
        controller.set('showTour', this.getHasAccessOverviewTour() ? false : true);
    },

    actions: {
        disableOverviewTour: function(){
            var self = this;
            this.setHasAccessedOverviewTour(true).then(function(){
                self.transitionTo('reports.overview-no-data');
            });
        }
    },

    beforeModel: function(transition){

        var self = this;
        // use promise first since other routes will transition to this route if there are no accounts data
        // and CurrentUserAwareMixin will throw error if session has expired and the login check will fail
        var promise = new Ember.RSVP.Promise(function(resolve, reject){
            self.setInsightsProperties();
            resolve();
        });

        return Ember.RSVP.all([self._super(transition), promise]);


    },

    model: function(){
        return {
            user: this.get('currentUser')
        };
    }
});
