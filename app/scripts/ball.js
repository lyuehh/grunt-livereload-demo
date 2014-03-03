/* global d3, _*/

var margin = {
  top: 20,
  right: 20,
  bottom: 30,
  left: 200
},
  width = 800 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

var parseDate = d3.time.format("%Y-%m-%d").parse;

// var div = d3.select("body").append("div") .attr("class", "tooltip") .style("opacity", 0);

var x = d3.scale.linear()
  .range([2003001, 2003089])
  .domain([2003001, 2003089])

var y = d3.scale.linear()
  .range([0, 33])
  .domain([0, 33])

var xAxis = d3.svg.axis()
  .scale(x)
  .orient("bottom");

var yAxis = d3.svg.axis()
  .scale(y)
  .orient("left");

var line = d3.svg.line()
  .interpolate('basic')
  .x(function(d) {
    return x(d.id);
  })
  .y(function(d) {
    return y(d.blue);
  });
var svg = d3.select(".here").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g");
  //.attr("transform", "translate(" + margin.left + "," + margin.top + ")");


d3.json("/scripts/2003.json", function(error, data) {
  data.forEach(function(d) {
    d.date = parseDate(d.date);
    d.red = _.chain(d.red.split(' ')).map(function(i) {
        return parseInt(i);
    }).filter(function(i) {
        return !isNaN(i);
    }).value();
    d.id = parseInt(d.id);
    d.blue = parseInt(d.blue);
  });
  // console.table(data);

/*
  x.domain(d3.extent(data, function(d) {
    return d.id;
  }));
  y.domain(d3.extent(data, function(d) {
    return d.blue;
  }));
*/

  // if(!d3.select('.axis')[0][0]) {
    svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

    svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);
  // }


  svg.append("path")
    .datum(data)
    .attr("class", "send")
    .attr("d", line);

 svg.append("g")
         .call(d3.svg.axis()
         .scale(xScale)
         .orient("bottom"));
         
  // d3.select('.tips').remove();
});
