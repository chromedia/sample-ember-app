import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ["off-canvas-wrap"],
    attributeBindings: ['data-offcanvas'],
    'data-offcanvas': '',
    didInsertElement: function(){
        this.$().foundation({
            offcanvas: {close_on_click: true}
        });

        var timer;
        var JQ = Ember.$;
        var headerHeight = JQ('nav.tab-bar').outerHeight();
        var tabmenuHeight = JQ('.icon-bar').outerHeight();

        JQ(window).resize(function() {
            clearTimeout(timer);
            timer = setTimeout(function() {
                JQ('.main-section').css("height", JQ(window).height() - (headerHeight + tabmenuHeight));
            }, 40);
        }).resize();
    }
});