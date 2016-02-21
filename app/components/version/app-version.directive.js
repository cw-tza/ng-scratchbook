(function () {
  'use strict';

  angular
      .module('myApp.version')
      .directive('appVersion', appVersion);

  appVersion.$inject = ['version'];

  function appVersion(version) {

    return {
      link: link
    };

    function link($scope, element) {
      element.text(version);
      $scope.version = version;
    }
  }

})();

