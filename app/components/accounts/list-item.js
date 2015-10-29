import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ["block-card"],

    isInsurance: function(){

        return 1 === parseInt(this.get('carrier.carrier_type'));

    }.property('carrier'),

    actions: {

        showConfirmationModal: function(item){
            //this.itemToDelete = item;
            this.set('parentController.removeItemTarget', {item: item, el: this.$()});
            Ember.$("#remove-confirmation-modal").foundation('reveal', 'open');
        },

        removeItem: function(){

            var el = this.$();
            var self = this;

            el.fadeOut(600, function() {
                el.remove();
                self.sendAction('action', self.itemToDelete);
            });
        }
    }
});