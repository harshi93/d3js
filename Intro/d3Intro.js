d3.select("body")//<selects body tag html
        .append("svg")
        .append("rect")
        .attr("width", 50)
        .attr("height", 200)
        .style("fill","blue")
    
d3.select("body")
  .append("svg")
  .attr("width", 50)
  .attr("height", 50)
  .append("circle")
  .attr("cx", 25)
  .attr("cy", 25)
  .attr("r", 25)
  .style("fill", "purple");