angular.module("app")
  .controller("FunCtrl", FunCtrl);

function FunCtrl() {
  var self = this;

  self.start = function () {
    console.log("Fun times have been started!");
  };
}
