angular.module("app", []);

angular.module("app").controller("MainCtrl", function() {
  var self = this;

  self.message = "hello";
  self.conan = "im conan";

  self.updateMessage = function(message) {
    self.message = message;
  };
});
