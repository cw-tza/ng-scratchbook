(function () {
  'use strict';

  angular
      .module('myApp.version.version-directive', [])
      .directive('appVersion', appVersion);

  appVersion.$inject = ['version'];

  function appVersion(version) {

    return {
      link:  link
    };
    function link(scope, elm, attrs) {
      elm.text(version);
    }
  }

})();

