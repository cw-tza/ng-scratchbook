(function () {

  'use strict';

  angular
    .module('myApp.components')
    .directive('fontWeightChanger', FontWeightChangerDirective);

  function FontWeightChangerDirective() {

    return {
      scope: {
        weight: '@'
      },
      link:  link
    };

    function link($scope, element) {
      element.attr('style', 'font-weight: ' + $scope.weight);
    }
  }

})();

