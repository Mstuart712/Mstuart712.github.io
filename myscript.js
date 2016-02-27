
//Using Jquery to load my JSON data into an array of objects
$.getJSON("https://gist.githubusercontent.com/Mstuart712/65aebbc25921c4a1643c/raw/93ba092626fdd895270968ead25fe9b7a7c2c53e/wretched-data.json", function(json) { 
    var myData = json;
    //calls function on line 61
    myData.forEach(getData);
});

//use d3 method "select" to get select my element
var vis = d3.select("#college-picks"),
  WIDTH = 800,
  HEIGHT = 710,
  MARGINS = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 50
  },
  //Set my x and y axis range and domain Range defines area avaible to render the graph and domain defines the maximum and minimum values
  createX = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([1,3]),
  createY = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0,50]),

  //use the d3 method "axis" to create the x and y axis 
  xAxis = d3.svg.axis()
  .scale(createX),
  
  //use orient method to change its orientation to the left
  yAxis = d3.svg.axis()
  .scale(createY)
  .orient("left");

  //here we add the axis class and translate x to the bottom and y to the left
  vis.append("svg:g")
    .attr("class","axis")
    .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
    .call(xAxis);

  vis.append("svg:g")
    .attr("class","axis")
    .attr("transform", "translate(" + (MARGINS.left) + ",0)")
    .call(yAxis);

//use d3 method d3.svg.line to draw a line with x being the week and y the points
var newLine = d3.svg.line()
  .x(function(d) {
    return createX(d.week);
  })
  .y(function(d) {
    return createY(d.points);
  })
  .interpolate("basis");

//constructor for each data point 
function gameData(name, week, points) {
  this.name = name;
  this.week = week;
  this.points = points;
}

//loop through data set and adding total points each for each week
function getData(element, index, array) { 
  var totalGame = [];
  var pointTotal = 0;
  //loop through individuals scores
  for(i = 1; i < 14; i++) {
    //adds new points to previous total
    var pointTotal = pointTotal + element[i];
    var newWeek = new gameData(element.Name, i, pointTotal);
    totalGame.push(newWeek);
  }
  //adds line path to svg with our individuals data
  vis.append('svg:path')
  .attr('d', newLine(totalGame))
  .attr('class', element.Name)
  .attr('fill', 'none')
  .attr('stroke-width', 2);
}
