import Ember from 'ember';
import Data from '../../utils/data';

export default Ember.ArrayController.extend({

    ob: function(){
        this.set('totalInsights', this.get('length'));
        Data.store("totalInsights", this.get('length'));
        //console.log("insisghts in LS: "+Data.load('totalInsights'));


    }.observes('length'),
    totalInsights: 0
});
