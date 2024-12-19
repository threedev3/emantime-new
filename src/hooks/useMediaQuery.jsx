import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = () => setMatches(mediaQuery.matches);

    // Set the initial state
    handleChange();

    // Add event listener for media query changes
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup the event listener on unmount
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
};

export default useMediaQuery;
