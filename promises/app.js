function getData($timeout, $q) {
  return function() {
    // 1. Manually create a deferred object that exposes a promise
    // as well as the methods for resolving that promise
    // var defer = $q.defer();
    // // simulate async func
    // $timeout(function() {
    //   if (Math.round(Math.random())) {
    //     defer.resolve("data received");
    //   } else {
    //     defer.reject("some error");
    //   }
    // }, 500);
    //
    // return defer.promise;

    // 2. Or use $q constructor
    return $q(function(resolve, reject) {
      $timeout(function() {
        if (Math.round(Math.random())) {
          resolve(Math.floor(Math.random() * 10));
        } else {
          reject("some error");
        }
      }, 500);
    });
  };
}

angular.module("app", [])
  .factory("getData", getData)
  .run(function(getData) {
    var promise = getData()
      .then(function(num) {
        console.log(num);
        return num * 2;
      }, function(error) {
        console.log(error);
        return error;
      })
      .then(function(num) {
        if (typeof num === "string") {
          console.log("there was an error");
        } else {
          console.log(num);
        }
      })
      .finally(function() {
        console.log("Finished at:", new Date());
      });

  });
