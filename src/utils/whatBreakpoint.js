const whatBreakpoint = () => {
  if (window.innerWidth < 768) return "mobile";

  if (window.innerWidth < 1280) return "tablet";

  if (window.innerWidth >= 1280) return "desktop";
};

export default whatBreakpoint;
