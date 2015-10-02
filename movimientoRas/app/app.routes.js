angular.module('app.routes', ['ngRoute']).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    navitem: false,
    name: 'Home',
    templateUrl: 'app/views/home.html',
    controller: false
  }).when('/nosotros', {
    navitem: true,
    name: 'Nosotros',
    templateUrl: 'app/views/nosotros.html',
    controller: false
  }).when('/cooperason', {
    navitem: true,
    name: 'Cooperasón',
    templateUrl: 'app/views/cooperason.html',
    controller: false
  }).when('/contacto', {
    navitem: true,
    name: 'Contacto',
    templateUrl: 'app/views/contacto.html',
    controller: false
  }).otherwise('/');

  // $locationProvider.html5Mode(true);
}]);
