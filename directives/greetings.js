angular.module("greetings", [])
  .directive("welcomeElement", function() {
    return {
      restrict: "E",
      template: "<div>Howdy there!</div>"
    };
  })

  .directive("welcomeAttr", function() {
    return {
      restrict: "A",
      link: function() {
        setTimeout(function() {
          var body = document.getElementsByTagName("body")[0];
          var newElement = document.createElement("div");
          newElement.textContent = "hi from custom attribute";

          body.appendChild(newElement);
        }, 500);
      }
    };
  })

  .directive("goodbyeAttr", function() {
    return {
      restrict: "A",
      link: function() {
        alert("goodbye");
      }
    }
  })

  .directive("welcomeClass", function() {
    return {
      restrict: "C",
      link: function() {
        setTimeout(function() {
          var body = document.getElementsByTagName("body")[0];
          var newElement = document.createElement("div");
          newElement.textContent = "class - conan wuz here";

          body.appendChild(newElement);
        }, 1000);
      }
    };
  })

  .directive("welcomeComment", function() {
    return {
      restrict: "M",
      link: function() {
        setTimeout(function() {
          var body = document.getElementsByTagName("body")[0];
          var newElement = document.createElement("div");
          newElement.textContent = "comment style - why would you do this";

          body.appendChild(newElement);
        }, 1500);
      }
    };
  })
