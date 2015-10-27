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
        url: "/about",
        views: {
          "": { templateUrl: "partial-about.html" },
          "columnOne@about": { template: "COLUMN ONE!!!" },
          "columnTwo@about": {
            templateUrl: "table-data.html",
            controller: "scotchController"
          }
        }
      });
  })

  .controller("scotchController", scotchController);

function scotchController () {
  var self = this;
  self.message = "test";
  self.scotches = [
    {
      name: "Macallan 12",
      price: 50
    },
    {
      name: "Chivas Regal Royal Salute",
      price: 10000
    },
    {
      name: "Glenfiddich 1937",
      price: 20000
    }
  ];
}
