(function () {

  'use strict';

  angular
    .module('myApp.view1')
    .controller('View1Ctrl', View1Ctrl);

  View1Ctrl.$inject = ['$scope'];

  function View1Ctrl($scope) {

    var vm = this;

    vm.foo   = 'bar';
    vm.model = {};

    vm.isValid = isValid;
    vm.submit  = submit;

    function submit() {

      console.log('saving', vm.model);
    }

    function isValid() {

      return $scope.view1Form.$valid;
    }
  }
})();