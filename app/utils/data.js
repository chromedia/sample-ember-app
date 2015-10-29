import Ember from "ember";

export default Ember.Object.create({
    store: function(name, value) {
        localStorage.setItem(name, value);
    },

    load: function(name) {
        if (name in localStorage) {
            return localStorage[name];
        }
        else {
            return undefined;
        }
    },

    remove: function(name) {
        localStorage.removeItem(name);
    }
});