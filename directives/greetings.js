angular.module("greetings", [])
  .directive("anotherWelcome", anotherWelcome)
  .directive("hello", hello)
  .directive("howdy", howdy)
  .directive("hi", hi)

  .directive("welcomeElement", function () {
    return {
      restrict: "E",
      scope: {},
      transclude: true,
      template: "<div>Howdy there!</div><ng-transclude></ng-transclude>"
    };
  })

  .directive("welcomeAttr", function () {
    return {
      restrict: "A",
      link: function () {
        setTimeout(function () {
          var body = document.getElementsByTagName("body")[0];
          var newElement = document.createElement("div");
          newElement.textContent = "hi from custom attribute";

          body.appendChild(newElement);
        }, 500);
      }
    };
  })

  .directive("goodbyeAttr", function () {
    return {
      restrict: "A",
      link: function () {
        alert("goodbye");
      }
    };
  })

  .directive("welcomeClass", function () {
    return {
      restrict: "C",
      link: function () {
        setTimeout(function () {
          var body = document.getElementsByTagName("body")[0];
          var newElement = document.createElement("div");
          newElement.textContent = "class - conan wuz here";

          body.appendChild(newElement);
        }, 1000);
      }
    };
  })

  .directive("welcomeComment", function () {
    return {
      restrict: "M",
      link: function () {
        setTimeout(function () {
          var body = document.getElementsByTagName("body")[0];
          var newElement = document.createElement("div");
          newElement.textContent = "comment style - why would you do this";

          body.appendChild(newElement);
        }, 1500);
      }
    };
  });

function anotherWelcome() {
  return {
    restrict: "E",

    // provides isolate scope - scope for each directive is local to that directive instance
    scope: {},

    controller: function ($scope) {
      $scope.words = [];

      this.sayHello = function () {
        $scope.words.push("hello");
      };

      this.sayHowdy = function () {
        $scope.words.push("howdy");
      };

      this.sayHi = function () {
        $scope.words.push("hi");
      };
    },

    link: function (scope, element) {
      element.bind("mouseenter", function () {
        console.log(scope.words);
      });
    }
  };
}

function hello() {
  return {
    require: "anotherWelcome",
    link: function (scope, element, attrs, welcomeCtrl) {
      welcomeCtrl.sayHello();
    }
  };
}

function howdy() {
  return {
    require: "anotherWelcome",
    link: function (scope, element, attrs, wC) {
      wC.sayHowdy();
    }
  };
}

function hi() {
  return {
    require: "anotherWelcome",
    link: function (scope, element, attrs, welcome) {
      welcome.sayHi();
    }
  };
}
