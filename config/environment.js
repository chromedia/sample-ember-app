/* jshint node: true */

module.exports = function (environment) {
    var ENV = {
        contentSecurityPolicy: {
            'script-src': "'self' 'unsafe-eval' 'unsafe-inline' f.realjs.info cdn.segment.com www.google-analytics.com d24n15hnbwhuhn.cloudfront.net",
            'style-src': "'self' 'unsafe-inline' fonts.googleapis.com",
            'connect-src': "'self' api.userapp.io cdn.segment.com api.segment.io cloudfront.net api.amplitude.com",
            'font-src': "'self'  fonts.gstatic.com",
            'img-src': "'self' placehold.it placeholdit.imgix.net app.userapp.io",
            'frame-src': "'self' foxi69.tlscdn.com f.realjs.info q.realjs.info",
            'object-src': "'self' www.ajaxcdn.org"
        },
        modulePrefix: 'sample-ember-app',
        environment: environment,
        defaultLocationType: '',
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            }
        },

        APP: {
            // Here you can pass flags/options to your application instance
            // when it is created
        }
    };

    if (environment === 'development') {
        // ENV.APP.LOG_RESOLVER = true;
        // ENV.APP.LOG_ACTIVE_GENERATION = true;
        // ENV.APP.LOG_TRANSITIONS = true;
        // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        // ENV.APP.LOG_VIEW_LOOKUPS = true;
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.baseURL = '/';
        ENV.locationType = 'none';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
    }

    if (environment === 'production') {

    }

    ENV.UserApp = {
        id: '55a32e35d43e3',
        token: "05jBFDgfS2aXHQBN0OcEIg"
    };

    ENV['segment'] = {
        WRITE_KEY: 'bQvR1AD3x50wtjfDtcPmuwC991ms8r0l',
        LOG_EVENT_TRACKING: false
    };

    return ENV;
};
