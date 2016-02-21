(function () {
  'use strict';

  angular
      .module('myApp.view1')
      .config(view1Config);

  view1Config.$inject = ['$routeProvider'];

  function view1Config($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl:  'view1/view1.html',
      controller:   'View1Ctrl',
      controllerAs: 'vm'
    });
  }
})();