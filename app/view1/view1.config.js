(function () {

  'use strict';

  angular
    .module('myApp.view1')
    .config(view1Config);

  view1Config.$inject = ['$stateProvider'];

  function view1Config($stateProvider) {

    $stateProvider.state('state1', {
      url:          '/state1',
      templateUrl:  'view1/view1.template.html',
      controller:   'View1Ctrl',
      controllerAs: 'vm'
    });
  }
})();