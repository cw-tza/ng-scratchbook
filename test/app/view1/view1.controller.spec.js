describe('View1Ctrl', function () {

  var $scope;

  beforeEach(module('myApp.view1'));

  beforeEach(inject(function ($rootScope) {

    $scope = $rootScope.$new();
  }));

  describe('#isValid()', function () {

    it('should return false for invalid view form', inject(function ($controller) {

      //given
      $scope.view1Form = {$valid: false};

      //when
      var ctrl = $controller('View1Ctrl', {$scope: $scope});

      //then
      expect(ctrl.isValid()).to.be.false;
    }));

    it('should return true for valid view form', inject(function ($controller) {

      //given
      $scope.view1Form = {$valid: true};

      //when
      var ctrl = $controller('View1Ctrl', {$scope: $scope});

      //then
      expect(ctrl.isValid()).to.be.true;
    }));
  })
});