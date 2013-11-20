jumplink.magentoweb_navbar.controller('NavbarController', function($scope, $location, NotifyService, AuthenticationService) {
  $scope.getSigninUser = function() {
    return AuthenticationService.getUser();
  };

  $scope.signout = function () {
    AuthenticationService.signout (function signed_out (success) {
      if(success === true) {
        $location.path( "/admin" );
        NotifyService.show("Signout", "You are signed out", "info");
        $scope.$apply(); // I don't why I need this here but not on signin, maybe because this is an own module
      }
    });
   }
});