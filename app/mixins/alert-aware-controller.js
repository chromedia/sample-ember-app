import Ember from 'ember';
import FlashMessage from '../utils/flash-message';

export default Ember.Mixin.create({

    _name: false,

    notice: {},

    hasNotice: function(){

        if (!this._name) {
            throw "Alert-aware-controller needs ._name";
        }


        var flashNotice = FlashMessage.get(this.get('_name'));
        console.log("Getting notices for "+this.get('_name'));
        if (flashNotice) {
            console.log("transform flash message to notice");
            this.set('notice', {
                message: flashNotice.message,
                type: flashNotice.type
            });

            return true;
        }
        else if (this.get('error')) {

            this.set('notice', {
                type: 'error',
                message: this.get('error').message
            });

            console.log("transform error message to notice");
            return true;
        }

        return false;


    }.property('_name', 'error')
});