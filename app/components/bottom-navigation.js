import Ember from 'ember';
import Data from '../utils/data';

export default Ember.Component.extend({
    tagName: 'div',
    classNames: ["icon-bar four-up"],
    
    insightsObserver: function(){
        var badgeClass = this.get('parentController.totalInsights') > 0 ? "badge" : "";
        this.set("insightsBadgeClass", badgeClass);

    }.observes('parentController.totalInsights'),

    insightsBadgeClass: function(){

        var totalInsightsInStorage = Data.load('totalInsights');
        if (totalInsightsInStorage) {
            // for other pages
            return totalInsightsInStorage > 0 ? "badge" : "";
        }
        else {
            // for insights index page
            return this.get('parentController.totalInsights') > 0 ? "badge" : "";
        }


    }.property()
});