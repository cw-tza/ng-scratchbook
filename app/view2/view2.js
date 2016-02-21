(function () {
  'use strict';

  angular.module('myApp.view2', ['ngRoute'])
         .config(['$routeProvider', view2Config])
         .controller('View2Ctrl', View2Ctrl);

  function View2Ctrl() {
  }

  function view2Config($routeProvider) {
    $routeProvider.when('/view2', {
      templateUrl: 'view2/view2.html',
      controller:  'View2Ctrl'
    });
  }
})();