angular
  .module("nameApp")
  .controller("ChartsController", chartsController);

var chartOptions = {
  discreteBarChart: {
    chart: {
      type: 'discreteBarChart',
      height: 450,
      margin : {
        top: 20,
        right: 20,
        bottom: 60,
        left: 55
      },
      x: function (d) { return d.label; },
      y: function (d) { return d.value; },
      showValues: true,
      valueFormat: function (d) {
        return d3.format(',.4f')(d);
      },
      transitionDuration: 500,
      xAxis: {
        axisLabel: 'X Axis'
      },
      yAxis: {
        axisLabel: 'Y Axis',
        axisLabelDistance: 30
      }
    }
  },

  histogram: {
    chart: {
      type: 'historicalBarChart',
      height: 450,
      margin : {
        top: 20,
        right: 20,
        bottom: 60,
        left: 50
      },
      x: function(d){return d[0];},
      y: function(d){return d[1]/100000;},
      showValues: true,
      valueFormat: function(d){
        return d3.format(',.1f')(d);
      },
      transitionDuration: 500,
      xAxis: {
        axisLabel: 'X Axis',
        tickFormat: function(d) {
          return d3.time.format('%x')(new Date(d));
        },
        rotateLabels: 50,
        showMaxMin: false
      },
      yAxis: {
        axisLabel: 'Y Axis',
        axisLabelDistance: 35,
        tickFormat: function(d){
          return d3.format(',.1f')(d);
        }
      }
    }
  }
};

function chartsController ($scope) {
  var self = this;
  self.tempData = [{
    key: "Cumulative Return",
    values: [
      { "label" : "A" , "value" : -29.765957771107 },
      { "label" : "B" , "value" : 0 },
      { "label" : "C" , "value" : 32.807804682612 },
      { "label" : "D" , "value" : 196.45946739256 },
      { "label" : "E" , "value" : 0.19434030906893 },
      { "label" : "F" , "value" : -98.079782601442 },
      { "label" : "G" , "value" : -13.925743130903 },
      { "label" : "H" , "value" : -5.1387322875705 }
    ]
  }];

  self.options = [
    {
      string: "Discrete Bar Chart",
      type: "discreteBarChart",
      config: chartOptions.discreteBarChart
    },
    {
      string: "Histogram",
      type: "histogram",
      config: chartOptions.histogram
    }
  ];
}
