(function () {

  'use strict';

  angular
    .module('myApp.view1')
    .controller('View1Ctrl', View1Ctrl);

  View1Ctrl.$inject = ['$scope', 'view1Service'];

  function View1Ctrl($scope, view1Service) {

    var vm = this;

    vm.model = {};

    vm.isValid = isValid;
    vm.submit  = submit;

    function isValid() {
      return $scope.view1Form.$valid;
    }

    function submit(valid) {

      if (valid) {
        view1Service.saveModel(vm.model)
                    .then(onSaveSuccessful)
                    .catch(onSaveFailed);
      } else {
        throw 'invalid';
      }

      function onSaveSuccessful(data) {
        console.log('success', data);
      }

      function onSaveFailed(reason) {
        console.log('failure', reason);
      }
    }
  }
})();