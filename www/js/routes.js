angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.hospitals', {
    url: '/hospitals',
    views: {
      'tab1': {
        templateUrl: 'templates/hospitals.html',
        controller: 'hospitalsCtrl'
      }
    }
  })

  .state('tabsController.medicines', {
    url: '/medicines',
    views: {
      'tab2': {
        templateUrl: 'templates/medicines.html',
        controller: 'medicinesCtrl'
      }
    }
  })

  .state('tabsController.pharmasies', {
    url: '/pharmasies',
    views: {
      'tab3': {
        templateUrl: 'templates/pharmasies.html',
        controller: 'pharmasiesCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

$urlRouterProvider.otherwise('/login');

  

});