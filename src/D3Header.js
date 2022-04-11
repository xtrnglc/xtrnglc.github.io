import * as d3 from 'd3';
const subHeaderTextData = [
  '> Software Engineer',
  '> Full Stack Developer',
  '> Data Engineer',
  '> Data Scientist',
  '> Data Visualizer',
  '> Business Analyst'
];

let i = 0;

function delay(delayInms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}

export default class D3Header {
  constructor(element) {
    const vis = this;
    const name = 'Trung Le';
    var i = 0;


    vis.g = d3.select(element)
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", `0 0 ${800} ${100}`)
        .append("g")
        .attr("transform", `translate(${800 / 2 }, ${100 / 2})`)

    vis.g.append("text")
     .style("text-anchor", "middle")
     .attr('font-size', '2em')
     .attr("id", "mainHeaderText")
     .attr("fill", "white")
     .style("opacity", 1)
     .style("z-index", "20")
     .text(name);

     vis.g.append("text")
      .style("text-anchor", "middle")
      .attr('font-size', '.5em')
      .attr("id", "subHeaderText")
      .attr("fill", "white")
      .style("opacity", 1)
      .attr("y", 20)
      .style("z-index", "20")
      .text('Software Engineer');

      repeat();

      function repeat() {
         d3.select('#subHeaderText')
           .transition()
           .duration(3000)
           .ease(d3.easeLinear)
           .tween("text", function() {
             var newText = subHeaderTextData[i % 4];
               var textLength = newText.length;
               return function (t) {
                   this.textContent = newText.slice(0,
                                      Math.round( t * textLength) );
               };
           })
           .on("end", async function(d) {
             i++;
             await delay(3000)
             repeat();
           })
       }
   }
}
