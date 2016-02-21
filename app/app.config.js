(function () {

  'use strict';

  angular
    .module('myApp')
    .config(appConfig);

  appConfig.$inject = ['$urlRouterProvider'];

  function appConfig($urlRouterProvider) {

    $urlRouterProvider.otherwise('/state1');
  }
})();