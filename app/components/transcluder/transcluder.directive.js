(function () {
  'use strict';

  angular
    .module('myApp.components')
    .directive('transcluder', transcluderDirective);

  function transcluderDirective() {

    return {
      transclude:       true,
      templateUrl:      'components/transcluder/transcluder.template.html',
      scope:            {
        code: '='
      },
      link:             link,
      controller:       TranscluderController,
      controllerAs:     'vm',
      bindToController: true
    };

    function link($scope, element, attrs, controller, transclude) {

      $scope.augmentation = controller.augmented(attrs);

      transclude($scope, function (clone) {
        element.append(clone);
      });
    }
  }

  function TranscluderController() {

    var vm = this;

    vm.onClick   = onClick;
    vm.augmented = augmented;

    function augmented(data) {
      return function() {
        console.log('AUGMENTED !', data);
      };
    }

    function onClick() {

      console.log('click', vm.code);
    }
  }
})();