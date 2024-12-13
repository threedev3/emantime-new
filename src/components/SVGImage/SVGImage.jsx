import React, { useState, useEffect, useRef } from "react";

function InlineSvg({ color, hoverColor, url, isHovered, className }) {
  const svgContainerRef = useRef(null);

  useEffect(() => {
    // Fetch the SVG content from the CDN URL
    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        if (svgContainerRef.current) {
          svgContainerRef.current.innerHTML = data;

          // Modify fill attribute of all paths
          const paths = svgContainerRef.current.querySelectorAll("path");
          paths.forEach((path) => {
            path.setAttribute("fill", isHovered ? hoverColor : color);
            path.style.transition = "fill 0.8s ease-in-out";
          });
        }
      })
      .catch((error) => console.error("Error fetching SVG:", error));
  }, [url, color, hoverColor, isHovered]);

  return <div ref={svgContainerRef} className={className} />;
}

export default InlineSvg;
