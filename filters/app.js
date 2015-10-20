angular.module("app", [])
  .controller("TestCtrl", TestCtrl)
  .filter("capitalize", CapitalizeFilter)
  .filter("fromLocation", FromLocationFilter);

function TestCtrl() {
  var self = this;
  self.myString = "hello world";
  self.people = [
    {
      name: "Eric Simons",
      born: "Chicago"
    },
    {
      name: "Sammy Sosa",
      born: "Chicago"
    },
    {
      name: "Albert Pai",
      born: "Taiwan"
    },
    {
      name: "Matthew Greenster",
      born: "Virginia"
    }
  ];

  self.addName = function(person) {
    self.people.push({
      name: person.name,
      born: person.loc
    });

    self.somePerson.name = "";
    self.somePerson.loc = "";
  };
}

function CapitalizeFilter() {
  return function(text) {
    return text.toUpperCase();
  };
}

function FromLocationFilter() {
  return function(people, input) {
    var newLocations = [];
    var locationRegex = new RegExp(input, "i");

    for (var i = 0; i < people.length; i++) {
      var person = people[i];
      if (locationRegex.test(person.born)) {
        newLocations.push(person);
      }
    }

    return newLocations;
  };
}
