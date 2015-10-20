angular.module("functionalities", [])
  .directive("entering", function() {
    // shorthand if all we're going to do to the directive is use the linking function
    return function(scope, element, attrs) {
      element.bind("mouseenter", function() {
        console.log("Mouse has entered the div");

        scope.$apply(attrs.entering);

        element.addClass(attrs.entering);
      });
    };
  })

  .directive("leaving", function() {
    return function(scope, element, attrs) {
      element.bind("mouseleave", function() {
        console.log("Mouse has left the div");

        element.removeClass(attrs.entering);
      });
    };
  });
