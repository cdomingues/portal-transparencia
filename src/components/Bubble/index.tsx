import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { max } from "lodash";

const Bubble = ({ buildingsData, setConstructionSelected, reference }: any) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    try {
      var svg = d3
        .select("#" + reference)
        .append("svg")
        // .style("background-color", "black")
        .attr("width", 400)
        .attr("height", 400)

 
      var node = svg
        .append("g")
        .attr("transform", "translate(" + 200 / 2 + "," + 200 / 2 + ")")
        .selectAll("circle")
        .data(buildingsData)
        .enter()
        .append("circle")
        .attr("r", 7)
        .attr("cx", "80%")
        .attr("cy", 50 / 2)
        .style("fill", function (d: any) {
          return d.color;
        })
        .style("fill-opacity", 1)
        .attr("stroke", function (d: any) {
          return d.color;
        })
        .style("stroke-width", 1)
        .on("mouseover", function (d) {
          d3.select(this).style("r", 8).style("cursor", "pointer");
        })
        .on("mouseout", function (d) {
          d3.select(this).style("r", 7).style("cursor", "default");
        })
        .on("click", function (d) {
          let item = d3.select(this) as any;
          setConstructionSelected(item?._groups?.[0]?.[0]?.__data__);
        });

      var simulation = d3
        .forceSimulation()
        .force(
          "center",
          d3
          .forceCenter()
          .x(200 /2)
          .y(200 / 2)
      )
        .force("charge", d3.forceManyBody().strength(-1)) // Nodes are attracted one each other of value is > 0
        .force(
          "collide",
          d3.forceCollide(1).strength(1).radius(2).iterations(1)
        );

      simulation.nodes(buildingsData).on("tick", () => {
        node
          .attr("cx", function (d: any) {
            return d.x;
          })
          .attr("cy", function (d: any) {
            return d.y;
          });
      });
    } catch (error) {
      console.log("error-->", error);
    }
  }, [buildingsData]);

  return <div ref={svgRef as any} id={reference}></div>;
};

export default Bubble;
