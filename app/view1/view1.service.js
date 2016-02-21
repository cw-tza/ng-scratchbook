(function () {

  'use strict';

  angular
    .module('myApp.view1')
    .factory('view1Service', view1Service);

  view1Service.$inject = ['$log', '$q', '$timeout'];

  function view1Service($log, $q, $timeout) {

    return {
      saveModel: saveModel
    };

    function saveModel(model) {

      $log.debug('saving', model);
      return $timeout(function () {
        return $q.reject('reason:' + model.name);
      }, 2000);

    }
  }
})();