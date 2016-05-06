angular.module('app', ['ui.router']).config(config);

/**
 * @ngInject
 */
function config($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider.state('home', {
    url:'/',
    templateUrl: 'views/home.html'
  });
}
