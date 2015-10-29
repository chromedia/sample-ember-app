import Ember from 'ember';
export default Ember.Service.extend({

    setup: function(){
        return new Ember.RSVP.Promise(function(resolve) {
            if(window.cordova){
                window.document.addEventListener('deviceready', function () {

                    StatusBar.overlaysWebView(false);
                    StatusBar.backgroundColorByHexString("#000");

                    resolve(true);
                });
            }
            else {
                console.log("wait to be resolved first");
                resolve(false);
            }
        });

    }
});