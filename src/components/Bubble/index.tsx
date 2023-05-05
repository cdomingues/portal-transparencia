import { useEffect, useRef } from "react";
import * as d3 from "d3";
import useWindowDimensions from "../../utils/useWindowDimensions";

const Bubble = ({ buildingsData, setConstructionSelected, reference }: any) => {
  const svgRef = useRef();

  useEffect(() => {
    try {
      var svg = d3
        .select("#" + reference)
        .append("svg")
        .attr("width", "100%")
        .attr("height", 400);

      var node = svg
        .append("g")
        .selectAll("circle")
        .data(buildingsData)
        .enter()
        .append("circle")
        .attr("r", 5)
        .attr("cx", "50%")
        .attr("cy", 400 / 2)
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
          d3.select(this).style("r", 5).style("cursor", "default");
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
            .x(400 / 2)
            .y(400 / 2)
        ) // Attraction to the center of the svg area
        .force("charge", d3.forceManyBody().strength(0.5)) // Nodes are attracted one each other of value is > 0
        .force(
          "collide",
          d3.forceCollide().strength(0.01).radius(5).iterations(1)
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
