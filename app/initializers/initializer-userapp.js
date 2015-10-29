import Ember from 'ember';

export default {
    name: 'userapp',
    initialize: function (container, application) {
        Ember.UserApp.setup(application, {
            appId: '55a00d6a02e5d',
            usernameIsEmail: true,
            indexRoute: 'dashboard'
        });
    }
};