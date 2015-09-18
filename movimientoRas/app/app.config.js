angular.module('app.config', ['ngMaterial']).config(['$mdThemingProvider', function ($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('orange')
    .backgroundPalette('blue-grey');
}]);
