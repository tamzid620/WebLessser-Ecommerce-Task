// getSubdomain.js

// export const getSubdomain = () => {
//   const hostname = window.location.hostname; 
//   const parts = hostname.split('.');
  
  
//   if (hostname.includes("localhost") && parts.length === 2) {
//     return parts[0]; 
//   }


//   if (parts.length > 2) {
//     return parts[0];
//   }

//   return null; 
// };

export const getSubdomain = () => {
  // Simulate a subdomain locally
  // return "mysub";  // Uncomment this line to test subdomain branch
  const host = window.location.hostname;
  const parts = host.split(".");
  if (parts.length > 2) {
    return parts[0];
  }
  return null;
};

