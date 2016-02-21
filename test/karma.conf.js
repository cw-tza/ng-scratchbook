'use strict';

module.exports = function (config) {
  config.set({
               basePath:      '../',
               frameworks:    [
                 'mocha',
                 'chai'
               ],
               files:         [
                 'bower_components/angular/angular.js',
                 'bower_components/angular-mocks/angular-mocks.js',
                 'bower_components/angular-ui-router/release/angular-ui-router.js',
                 'app/**/*.module.js',
                 'app/**/*.js',
                 'test/**/*.spec.js'
               ],
               exclude:       [],
               preprocessors: {},
               reporters:     ['progress'],
               port:          9876,
               colors:        true,
               logLevel:      config.LOG_INFO,
               autoWatch:     true,
               browsers:      ['PhantomJS'],
               singleRun:     false,
               concurrency:   Infinity
             })
};