(function () {

  'use strict';

  angular
    .module('myApp.view2')
    .config(view2Config);

  view2Config.$inject = ['$stateProvider'];

  function view2Config($stateProvider) {

    $stateProvider.state('state2', {
      url:          '/state2',
      templateUrl:  'view2/view2.template.html',
      controller:   'View2Ctrl',
      controllerAs: 'vm'
    });
  }
})();