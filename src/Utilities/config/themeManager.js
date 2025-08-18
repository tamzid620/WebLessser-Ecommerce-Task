// themeManager.js ---------------
export const setActiveTheme = (theme) => {
  localStorage.setItem("activeTheme", theme);
};

export const getActiveTheme = () => {
  return localStorage.getItem("activeTheme") || "one"; 

};
