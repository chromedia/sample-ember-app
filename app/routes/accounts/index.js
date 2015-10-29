import Ember from 'ember';
import CurrentUserAwareMixin from "../../mixins/custom-userapp";

export default Ember.Route.extend(Ember.UserApp.ProtectedRouteMixin, CurrentUserAwareMixin, {
    beforeModel: function(transition){
        transition.abort();
        this.transitionTo('/accounts/list/1');
    }
});
