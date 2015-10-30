angular
  .module("nameApp")
  .config(router);

function router ($stateProvider) {
  $stateProvider
    .state("charts", {
      url: "/charts",
      templateUrl: "charts.html",
      controller: "ChartsController",
      controllerAs: "charts"
    });
}
