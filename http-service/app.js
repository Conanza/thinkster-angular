angular.module("nameApp", ["ui.router"])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state("/", {
        url: "/",
        template: "<h1>Landing Page or something</h1>"
      })

      .state("home", {
        url: "/home",
        views: {
          "": {
            templateUrl: "home.html"
          },

          "nameList@home": {
            templateUrl: "name-list-partial.html"
          },

          "nameInput@home": {
            templateUrl: "name-input-partial.html"
          }
        }
      });
  });
