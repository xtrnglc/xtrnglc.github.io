import * as d3 from 'd3';
import { CONSTANTS } from '../constants';

export default class D3SkillsCloud {
  constructor(element) {
    const vis = this;

    let svg = d3.select(element)
      .append("svg")
      .attr("viewBox", `0 0 ${800} ${400}`)

    var color = d3.scaleOrdinal(['#BC262D', '#F8333C', '#D63A45', '#C53D49', '#B4404D', '#BF4761']);


    var simulation = d3.forceSimulation()
    .force("charge", d3.forceManyBody().strength(-2))
      .force("link", d3.forceLink().id(function(d) { return d.id; }))
      .force("collide", d3.forceCollide().radius(d => d.id.length +30 + 1))
      .force("center", d3.forceCenter(800/2, 800 / 4));


      var node = svg.append("g")
        .attr("class", "nodes")
      .selectAll("g")
      .data(CONSTANTS.data.nodes)
      .enter().append("g")

    let link = svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(CONSTANTS.data.links)
      .enter().append("line")
      .attr("stroke-width","2")
      .attr("opacity", 0.25)
      .attr("stroke", "grey")



    var drag_handler = d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);

      drag_handler(node);

      var lables = node.append("text")
        .text(function(d) {
          return d.id;
        })
        .attr("font-size", function(d,i) {
          if(d.root) {
            return '25px';
          } else {
            return '15px'
          }
        })
        .attr("font-weight", function(d,i) {
          if(d.root) {
            return '500';
          } else {
            return '200'
          }
        })
        .attr("fill", "#efebdd")
        .attr('x', -25)
        .attr('y', 0);


    simulation
      .nodes(CONSTANTS.data.nodes)
      .on("tick", ticked);

    simulation.force("link")
        .links(CONSTANTS.data.links);

    function ticked() {
      link
          .attr("x1", function(d) { return d.source.x; })
          .attr("y1", function(d) { return d.source.y; })
          .attr("x2", function(d) { return d.target.x; })
          .attr("y2", function(d) { return d.target.y; });

      node
          .attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
          })
    }

    function dragstarted(event, d) {
      if (!d3.active) simulation.alphaTarget(0.5).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event, d) {
      if (!d3.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

  }

}
