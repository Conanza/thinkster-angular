angular.module("routerApp", ["ui.router"])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
      .state("home", {
        url: "/home",
        templateUrl: "partial-home.html"
      })

      .state("home.list", {
        url: "/list",
        templateUrl: "partial-home-list.html",
        controller: function ($scope) {
          $scope.dogs = ["Bernese", "Husky", "Goldendoodle"];
        }
      })

      .state("home.paragraph", {
        url: "/paragraph",
        template: "YOLO let's get some drankz"
      })

      .state("about", {

      });
  });
