import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function () {


    this.route('email-verification', {path: '/users/email-verification/:token'});

    this.route('accounts', {path: '/accounts'}, function(){
        this.route('add', { path: '/new/:carrier-type' });
        this.route('list', { path: '/list/:carrier-type' });
        this.route('types', {path: '/select-type'});
        this.route('add-carrier', {path: '/add-carrier/:carrier_id'});
    });

    this.route('insights', {path: '/insights'}, function(){

    });

    this.route('dashboard');

    this.route('reports', {path: '/reports'}, function(){

        this.route('overview', {path: '/overview'});
        this.route('breakdown', {path: '/breakdown'});
        this.route('all-claims', { path: '/all-claims' });
        this.route('overview-no-data', { path: '/no-accounts-added-yet' });

    });

    this.route('balance', {path: '/balance'});


    this.route('login');
    this.route('logout');
    this.route('test-form');
    this.route('error-404', {path: '/404-not-found'});
});

export default Router;
