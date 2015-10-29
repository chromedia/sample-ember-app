import Ember from "ember";
import DataStorage from "./data";

var RegistrationData = Ember.Object.create({
    data: {},
    save: function(changes){
        this.data = Ember.$.extend(this.data, changes);
        // store
        DataStorage.store('userapp.temp_data', window.JSON.stringify(this.data));
    },
    load: function(){
        var tempData = DataStorage.load('userapp.temp_data');
        if (tempData){
            this.data = window.JSON.parse(tempData);
        }

        return this.data;
    },
    purge: function(){
        this.data = {};
        DataStorage.remove('userapp.temp_data');
    }
});

export default RegistrationData;