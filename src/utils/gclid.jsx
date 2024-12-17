// Utility function to get GCLID from URL
export const getGCLID = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('gclid');
  };
  
  // Utility to store GCLID in localStorage for persistent tracking
  export const storeGCLID = () => {
    const gclid = getGCLID();
    if (gclid) {
      localStorage.setItem('gclid', gclid);
    }
  };
  
  // Utility to retrieve stored GCLID
  export const getStoredGCLID = () => {
    return localStorage.getItem('gclid');
  };