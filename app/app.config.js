(function () {
  'use strict';

  angular.module('myApp')
         .config(appConfig);

  appConfig.$inject = ['$routeProvider'];

  function appConfig($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
  }

})();