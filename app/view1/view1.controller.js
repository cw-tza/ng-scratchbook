(function () {

  'use strict';

  angular
    .module('myApp.view1')
    .controller('View1Ctrl', View1Ctrl);

  function View1Ctrl() {

    var vm = this;

    vm.foo = 'bar';
  }
})();