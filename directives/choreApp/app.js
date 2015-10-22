angular.module("app", [])
  .controller("ChoreCtrl", choreController)
  .controller("DrinkCtrl", drinkController)

  .directive("drink", drinkDirective)
  .directive("kid", kidDirective);

function choreController () {
  var self = this;

  self.logChore = function (chore) {
    console.log(chore + " is done!");
  };
}

function drinkController () {
  var self = this;

  self.ctrlFlavor = "bullocks";
}

function drinkDirective () {
  return {
    scope: {
      flavor: "@"
    },
    // no need with isolate scope @
    // link: function (scope, el, attr) {
    //   scope.flavor = attr.flavor;
    // },
    template: '<div>{{ flavor }}</div>'
  };
}

function kidDirective () {
  return {
    restrict: "E",
    scope: {
      done: "&"
    },
    template: '<input type="text" ng-model="chore"> {{ chore }} ' +
              '<button ng-click="done({ someChore: chore })">I\'m done</button>'
  };
}
