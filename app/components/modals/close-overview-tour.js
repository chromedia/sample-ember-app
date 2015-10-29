import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ["reveal-modal"],
    attributeBindings: ['data-reveal', 'aria-hidden', 'role', 'id'],
    'data-reveal': '',
    'aria-hidden': true,
    role: "modal",
    id: "close-overview-tour-modal",

    actions: {
        confirmDismiss: function(){

            var el = Ember.$("#orderly-tour");
            var self = this
            self.$().foundation("reveal", "close");

            el.fadeOut(600, function() {
                el.remove();
                self.sendAction("action");
            });
        }
    }
});
