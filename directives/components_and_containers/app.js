angular.module("app", [])
  .directive("clock", clockDirective)
  .directive("panel", panelDirective);

function clockDirective() {
  return {
    restrict: "E",
    scope: {
      timezone: "@"
    },
    template: "<div>{{ time }} {{ timezone }}</div>",
    link: function (scope, el, attr) {
      scope.time = new Date().toTimeString();
    }
  };
}

function panelDirective() {

}
