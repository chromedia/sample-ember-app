import Ember from "ember";
import DataStorage from "./data";

var _key = 'flash_messages';

var FlashMessage = Ember.Object.create({

    getKey: function(key){
        return _key+'.'+key;
    },

    add: function(key, message, type){

        var data = {
            'message': message,
            'type': type || 'error'
        };

        var json = window.JSON.stringify(data);

        DataStorage.store(this.getKey(key), json);
    },

    get: function(key) {
        var target = this.getKey(key);
        var json = DataStorage.load(target);
        var data;

        if (json) {
            data = window.JSON.parse(json);
            console.log("remove flash message: "+target);
            DataStorage.remove(target);
        }

        return data;
    }
});

export default FlashMessage;