"use strict";

describe("MainCtrl", function() {
    var scope, $httpBackend;

    beforeEach(angular.mock.module("Application"));

    beforeEach(angular.mock.inject(function($rootScope, $controller, _$httpBackend_) {

        $httpBackend = _$httpBackend_;
        $httpBackend.when("GET", "users/users.json").respond({
            id: 1
        });

        scope = $rootScope.$new();
        $controller("MainCtrl", {
            $scope: scope
        });
    }));

    it('should have variable text = "Hello World!"', function() {
        expect(scope.text).toBe("Hello World!");
    });

    it("should featch list of users", function() {
        $httpBackend.flush();
        expect(scope.users.id).toBe(1);
    });

});
