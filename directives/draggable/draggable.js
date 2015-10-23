angular
  .module("dragModule", [])
  .directive("myDraggable", draggable);

draggable.$inject = ["$document"];

function draggable ($document) {
  var directive = {
    restrict: "E",
    link: link
  };
  return directive;

  function link (scope, element, attr) {
    var startX = 0,
        startY = 0,
        x = 0,
        y = 0;

    element.css({
      position: "relative",
      border: "1px solid red",
      backgroundColor: "orange",
      cursor: "pointer"
    });

    element.on("mousedown", function (event) {
      event.preventDefault();
      startX = event.pageX - x;
      startY = event.pageY - y;
      $document.on("mousemove", mousemove);
      $document.on("mouseup", mouseup);
    });

    function mousemove (event) {
      y = event.pageY - startY;
      x = event.pageX - startX;

      element.css({
        top: y + "px",
        left: x + "px"
      });
    }

    function mouseup (event) {
      $document.off("mousemove", mousemove);
      $document.off("mouseup", mouseup);
    }
  }
}
