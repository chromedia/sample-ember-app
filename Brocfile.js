/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
    'ember-cli-foundation-sass': {
        'modernizr': true,
        'fastclick': true,
        'foundationJs': 'all'
    }
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

//app.import('bower_components/foundation/js/foundation.min.js');
app.import('bower_components/userapp/userapp.client.js');
app.import('bower_components/userapp-ember/ember-userapp.js');

app.import('bower_components/fontawesome/fonts/fontawesome-webfont.ttf', {
    destDir: 'fonts'
});

app.import('bower_components/fontawesome/fonts/fontawesome-webfont.woff', {
    destDir: 'fonts'
});

app.import('bower_components/fontawesome/fonts/fontawesome-webfont.woff2', {
    destDir: 'fonts'
});

app.import('bower_components/Chart.js/Chart.min.js');
app.import('bower_components/Chart.StackedBar.js/src/Chart.StackedBar.js');

//app.import('bower_components/ember-easyform/index.js');
//app.import('bower_components/ember-validations/index.js');

module.exports = app.toTree();
