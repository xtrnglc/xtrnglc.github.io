import * as d3 from 'd3';

export default class D3SkillsCloud {
  constructor(element, name, skillsData) {
    console.log('constructing')
    const vis = this;
    var i = 0;

    vis.g = d3.select(element)
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", `0 0 ${800} ${100}`)
        .append("g")
        .style("background", "yellow")
        .attr("transform", `translate(${800 / 2 }, ${100 / 2})`)

    vis.g.append("text")
     .style("text-anchor", "middle")
     .attr('font-size', '2em')
     .attr("id", "mainHeaderText")
     .attr("fill", "white")
     .style("opacity", 1)
     .style("z-index", "20")
     .text(name);

  }

  update() {
    console.log('update');

  }

}
