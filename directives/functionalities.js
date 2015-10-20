angular.module("functionalities", [])
  .directive("entering", function() {
    // shorthand if all we're going to do to the directive is use the linking function
    return function(scope, element) {
      element.bind("mouseenter", function() {
        console.log("Mouse has entered the div");
      });
    };
  })

  .directive("leaving", function() {
    return function(scope, element) {
      element.bind("mouseleave", function() {
        console.log("Mouse has left the div");
      });
    };
  })
