import Ember from 'ember';

export default Ember.ArrayController.extend({

    filter: '',

    filteredContent: function(){

        var filter = this.get('filter');
        var rx = new RegExp(filter, 'gi');
        var result = this.get('content');

        if ("" === filter){

            // show all populars
            result = result.filter(function(item) {

                return item.get('popular');
            });
        }
        else {
            // auto complete filter, also include non popular carriers
            result = result.filter(function(item) {
                return item.get('name').match(rx);
            });
        }

        return result;

    }.property('content', 'filter')
});
