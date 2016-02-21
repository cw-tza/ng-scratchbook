(function () {
  'use strict';

  angular
      .module('myApp.view2')
      .config(view2Config);

  view2Config.$inject = ['$routeProvider'];

  function view2Config($routeProvider) {
    $routeProvider.when('/view2', {
      templateUrl: 'view2/view2.template.html',
      controller:  'View2Ctrl'
    });
  }
})();