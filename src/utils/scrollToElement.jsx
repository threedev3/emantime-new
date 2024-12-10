// export const handleScroll = (id) => {
//   const element = document.getElementById(id);
//   if (element) {
//     // Calculate the top position of the element relative to the document
//     const yOffset = -80; // Adjust this offset based on your navbar height
//     const y =
//       element.getBoundingClientRect().top + window.pageYOffset + yOffset;

//     window.scrollTo({
//       top: y,
//       behavior: "smooth",
//     });
//   }
// };

export const handleScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth", // Enables smooth scrolling
      block: "center", // Centers the target element in the viewport
    });
  }
};
