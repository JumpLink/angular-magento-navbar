if (typeof jumplink === 'undefined') {
  var jumplink = {};
}

jumplink.magentoweb_navbar = angular.module('jumplink.magentoweb_navbar', [
  , 'ui.bootstrap'
  , 'gettext',
  , 'jumplink.magentoweb'
  , 'jumplink.notify'
]);