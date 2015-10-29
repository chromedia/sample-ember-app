import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ["block-card row"],
    actions: {
        "insight-show-modal": function(item){

            Ember.$("#insight-modal .modal-title").html("").html(item.get('title'));
            Ember.$("#insight-modal .modal-content").html("").html(item.get('followUpContent'));
            Ember.$("#insight-modal").foundation('reveal', 'open');
        },
        "insight-dismiss": function(item) {

            var el = this.$();
            el.fadeOut(600, function() {
                el.remove();
                item.deleteRecord();
            });
            
        }
    }
});