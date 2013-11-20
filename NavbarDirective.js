jumplink.magentoweb_navbar.directive("navbar", [function () {
  return {
    restrict: "E",
    scope: {
      mode: "@"
    },
    templateUrl: 'partials/navbar.jade',
    controller: 'NavbarController'
  }
}]);