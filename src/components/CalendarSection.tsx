import { useEffect } from "react";
const CalendarSection = () => {
  useEffect(() => {
    // Load the iClosed widget script
    const script = document.createElement("script");
    script.src = "https://app.iclosed.io/assets/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      const existingScript = document.querySelector('script[src="https://app.iclosed.io/assets/widget.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);
  return null;
};
export default CalendarSection;