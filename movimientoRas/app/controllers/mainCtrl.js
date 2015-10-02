angular
  .module('mainCtrl', [])
  .controller('mainController', mainController);

mainController.$inject = ['$rootScope', '$location', '$route'];

function mainController($rootScope, $location, $route) {
  var vm = this;
  vm.routes = [];

  angular.forEach($route.routes, function(value, key) {
    if (value.navitem) {
      var routeitem = {};
      routeitem.path = value.originalPath;
      routeitem.name = value.name;
      routeitem.templateUrl = value.templateUrl;
      routeitem.controller = value.controller;
      vm.routes.push(routeitem);
    }
  });
}
