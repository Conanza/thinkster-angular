angular
  .module("nameApp")
  .controller("TestController", TestController);

function TestController (TestService) {
  var self = this;
  self.working = "is this working?";
  self.names = [];
  self.clickedName = "";

  self.addName = function (name) {
    TestService.addPerson({
      name: name
    }).success(function (data) {
      self.names.push(data);

      self.newName = "";
    }).error(function (err, status) {
      console.log("ERRORR:", status);
    });
  };

  self.deletePerson = function (person) {
    var i, deleteIdx;
    TestService.removePerson(person.id)
      .success(function (data) {
        for (i = 0; i < self.names.length; i++) {
          if (data.id === self.names[i].id) {
            deleteIdx = i;
          }
        }

        self.names.splice(deleteIdx, 1);
      }).error(function (err, status) {
        console.log("ERROR:", status);
      });
  };

  self.editName = function (name) {
    self.clickedName = name;
    console.log(name);
    // self.showName = !(self.showName);
  };

  self.getNames = function () {
    TestService.get()
      .then(function (res) {
        self.names = res;
      });
  };

  self.showName = function (name) {
    return self.clickedName !== name;
  };
}
