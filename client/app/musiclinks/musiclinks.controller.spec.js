'use strict';

describe('Controller: MusiclinksCtrl', function () {

  // load the controller's module
  beforeEach(module('musicboxApp'));

  var MusiclinksCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MusiclinksCtrl = $controller('MusiclinksCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
