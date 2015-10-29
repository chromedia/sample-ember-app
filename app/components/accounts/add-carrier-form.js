import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'form',
    actions: {
        saveForm: function(){

            var formData = {
                'plan_type': this['plan_type'],
                'group_number': this['group_number'],
                'account_username': this['account_username'],
                'carrier_id': this['carrier_id'],
                'carrier_type': this['carrier_type']
            };

            this.sendAction("action", formData);
        }
    }
});