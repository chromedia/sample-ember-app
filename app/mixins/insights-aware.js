import Ember from 'ember';
import Data from '../utils/data';

export default Ember.Mixin.create({

    setInsightsProperties: function(){
        if (this.hasAddedAccount()) {
            this.store.find('insight').then(function(data){
                Data.store('totalInsights', data.content.length);
                if (!Ember.$("#bottom-navigation-insights-flag").hasClass("badge")) {
                    Ember.$("#bottom-navigation-insights-flag").addClass("badge");
                }
            });
        }
        else {
            Data.remove('totalInsights');

            // TODO: find way to cascade this to component itself
            Ember.$("#bottom-navigation-insights-flag").removeClass("badge");
        }

    }
});