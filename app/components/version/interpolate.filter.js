(function () {

  'use strict';

  angular
    .module('myApp.version')
    .filter('interpolate', interpolateFilter);

  interpolateFilter.$inject = ['version'];

  function interpolateFilter(version) {

    return filter;

    function filter(text) {

      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }

})();