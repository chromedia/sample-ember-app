import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'form',
    searchFilter: '',

    filterWatch: function(){
        this.set('parentController.filter', this.get('searchFilter'));

    }.observes('searchFilter'),

    actions: {
        activateCamera: function(){
            if (navigator.camera){
                navigator.camera.getPicture(
                    function(imageData){
                        var imgSrc="data:image/jpeg;base64," + imageData;
                        Ember.$("#account-camera-modal .modal-content").html("").html('<img src="' + imgSrc + '">');
                        Ember.$("#account-camera-modal").foundation('reveal', 'open');
                    },
                    function(err){
                        Ember.$("#account-camera-modal .modal-content").html("").html("Card photo failed: "+err);
                        Ember.$("#account-camera-modal").foundation('reveal', 'open');
                    },
                    {
                        quality: 50,
                        destinationType: Camera.DestinationType.DATA_URL
                    }
                );
            }
            else {
                Ember.$("#account-camera-modal .modal-content").html("").html("Sorry, we are not able to connect to your camera.");
                Ember.$("#account-camera-modal").foundation('reveal', 'open');
            }
        }

    }
});