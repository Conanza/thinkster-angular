angular
  .module("nameApp", ["ui.router"])
  .config(router);

function router ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("/", {
      url: "/",
      template: "<h1 class='text-center jumbotron'>Landing Page or something</h1>"
    })

    .state({
      name: "home",
      url: "/whateveri want",
      controller: "TestController",
      controllerAs: "test",
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
}
