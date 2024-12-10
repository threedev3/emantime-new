// import React, { useEffect, useRef } from "react";

// function InlineSvg({ color, hoverColor, url, className }) {
//   const svgContainerRef = useRef(null);

//   useEffect(() => {
//     // Fetch the SVG content from the CDN URL
//     fetch(url)
//       .then((res) => res.text())
//       .then((data) => {
//         // Inject SVG content into the container
//         if (svgContainerRef.current) {
//           svgContainerRef.current.innerHTML = data;

//           // Modify fill attribute of all paths
//           const paths = svgContainerRef.current.querySelectorAll("path");
//           paths.forEach((path) => {
//             const currentFill = path.getAttribute("fill");

//             // If the path has a fill value, change it to the dynamic color
//             if (currentFill) {
//               path.setAttribute("fill", color || currentFill);
//             }
//           });
//         }
//       })
//       .catch((error) => console.error("Error fetching SVG:", error));
//   }, [url, color]);

//   const handleMouseEnter = () => {
//     const paths = svgContainerRef.current?.querySelectorAll("path");
//     paths?.forEach((path) => {
//       path.setAttribute("fill", hoverColor);
//     });
//   };

//   const handleMouseLeave = () => {
//     const paths = svgContainerRef.current?.querySelectorAll("path");
//     paths?.forEach((path) => {
//       path.setAttribute("fill", color);
//     });
//   };

//   return (
//     <div
//       ref={svgContainerRef}
//       className={className}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     />
//   );
// }

// export default InlineSvg;

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

// import React, { useState, useEffect } from "react";

// function InlineSvg({ color, hoverColor, url, className }) {
//   const [svgContent, setSvgContent] = useState("");
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     // Fetch the SVG content from the URL
//     fetch(url)
//       .then((res) => res.text())
//       .then((data) => {
//         const parser = new DOMParser();
//         const svgDoc = parser.parseFromString(data, "image/svg+xml");
//         const svg = svgDoc.querySelector("svg");

//         if (svg) {
//           const paths = svg.querySelectorAll("path");
//           paths.forEach((path) => {
//             path.setAttribute("fill", isHovered ? hoverColor : color);
//             path.style.transition = "fill 0.3s ease-in-out"; // Smooth transition for fill color
//           });

//           setSvgContent(svg.outerHTML);
//         }
//       })
//       .catch((error) => console.error("Error fetching SVG:", error));
//   }, [url, color, hoverColor, isHovered]);

//   return (
//     <div
//       className={className}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       dangerouslySetInnerHTML={{ __html: svgContent }}
//     />
//   );
// }

// export default InlineSvg;
