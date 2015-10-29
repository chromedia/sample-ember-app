import Ember from 'ember';

export default Ember.ArrayController.extend({

    ob: function(){
        this.set('total', this.get('length'));
        //console.log(this.get('length'));

    }.observes('length'),
    total: 0,
    targetType: 0
});
