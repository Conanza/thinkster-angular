angular
  .module("nameApp")
  .config(router);

function router ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("/", {
      url: "/",
      template: "<h1 class='text-center jumbotron'>Landing Page or something</h1>"
    })

    .state({
      name: "names",
      url: "/names",
      // controller: "TestController",
      // controllerAs: "test",
      views: {
        "": {
          templateUrl: "names.html"
        },

        "nameList@names": {
          templateUrl: "name-list-partial.html"
        },

        "nameInput@names": {
          templateUrl: "name-input-partial.html"
        }
      }
    });
}
