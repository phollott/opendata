    var fx = 480;
    var fy = 320;

    var sampleSVG = d3.select("#viz")
        .append("svg")
        .attr("width", fx)
        .attr("height", fy);    

   sampleSVG.append("rect")
        .attr("id", "f0")
        .attr("width", fx)
        .attr("height", fy)
        .attr("fill", 'blue');

    var g = sampleSVG.append("g");

    g.append("rect")
        .attr("id", "f1")
        .attr("width", 120)
        .attr("height", 80)
        .attr("x", 10)
        .attr("y", 10);

    g.append("rect")
        .attr("id", "f2")
        .attr("width", 120)
        .attr("height", 80)
        .attr("x", 110)
        .attr("y", 110);

//    var f1 = sampleSVG.select("#f1");
//    var f2 = sampleSVG.select("#f2");

 //   var pan = function(g, f1, f2) {
 //       alert(f1.attr("x"));
 //   }
    
 //   pan(g, f0, f1);
    
    g.append("circle")
        .style("stroke", "gray")
        .style("fill", "white")
        .attr("r", 40)
        .attr("cx", 50)
        .attr("cy", 50);

    g.append("circle")
        .style("stroke", "gray")
        .style("fill", "white")
        .attr("r", 40)
        .attr("cx", 150)
        .attr("cy", 150);

//var slide = function(x, y, fx, fy) {
width = 80; // width and height of the frame 
height = 80;
k=4;
x=120; // top left corner x
y=120; // top left corner y

//strTransform = "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")";
strTransform = "translate(-40,-40)scale(4)";
   g.transition()
      .duration(750)
      .attr("transform", strTransform);
//      .style("stroke-width", 1.5 / k + "px");

//alert(strTransform);
//}

/*
    sampleSVG.append("circle")
        .style("stroke", "gray")
        .style("fill", "white")
        .attr("r", 40)
        .attr("cx", 50)
        .attr("cy", 50)
        .on("click", toggleColor);

*/
