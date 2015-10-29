import Ember from 'ember';
import EmberValidations from 'ember-validations';

var LoginController = Ember.Mixin.create( Ember.UserApp.FormControllerMixin, EmberValidations, {
    validationErrors: [],
    validations: {
        'username': {
            presence: { message: 'Email is required' }
        },
        'password': {
            presence: { message: 'Password is required' }
        }
    },
    actions: {
        login: function(){
            var self = this;
            self.set('hasError', false);

            Ember.get(this, 'flashMessages').clearMessages();

            var credentials = this.getProperties('username', 'password');

            if (self.get('loading') === true) {
                return;
            }

            this.validate()
                .then(
                function () {
                    self.set('loading', true);
                    self.set('password', null);
                    self.get('user').login(credentials).then(function (user) {
                        self.send('loginSucceeded', user);
                        self.set('loading', false);
                    }, function (error) {
                        Ember.get(self, 'flashMessages').info(error.message, {sticky: true});
                        self.set('loading', false);
                    });
                }.bind(this)
            )
                .catch(function () {
                    self.set('hasError', true);
                    Ember.get(self, 'flashMessages').info('Please correct errors', {sticky: true});
                }); // end validate call
        }
    }
});

export default Ember.Controller.extend(LoginController, {
    _name: 'login'
});

//export default Ember.Controller.extend(Ember.UserApp.FormControllerMixin);