(function (window) {
  angular.module("app", [])

    .directive("tab", tab)
    .directive("tabset", tabset);

  function tab() {
    return {
      restrict: "E",
      require: "^tabset",
      transclude: true,
      scope: {
        heading: "@"
      },
      template: "<div role='tabpanel' ng-show='active' ng-transclude></div>",
      link: function (scope, element, attr, tabsetCtrl) {
        scope.active = false;
        tabsetCtrl.addTab(scope);
      }
    };
  }

  function tabset() {
    return {
      restrict: "E",
      transclude: true,
      scope: {},
      templateUrl: "tabset.html",
      bindToController: true,
      controllerAs: "tabset",
      controller: function () {
        var self = this;
        self.tabs = [];

        self.addTab = function (tab) {
          self.tabs.push(tab);

          if (self.tabs.length === 1) {
            tab.active = true;
          }
        };

        self.select = function (selectedTab) {
          angular.forEach(self.tabs, function (tab) {
            if (tab.active && tab !== selectedTab) {
              tab.active = false;
            }
          });

          selectedTab.active = true;
        };
      }
    };
  }
})(window);
