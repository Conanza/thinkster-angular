angular.module("nameApp")
  .service("TestService", TestService);

function TestService ($http) {
  this.addPerson = function (person) {
    return $http({
      method: "POST",
      url: "http://localhost:8080/v1/names",
      data: { name: person }
    });
  };

  this.get = function () {
    return $http.get("http://localhost:8080/v1/names")
      .then(function (res) {
        return res.data;
      });
  };

  this.removePerson = function (id) {
    return $http.delete("http://localhost:8080/v1/names/" + id);
  };
}
