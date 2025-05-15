import { useEffect } from "react";

const DisableDevTools = () => {
  useEffect(() => {
    // Disable right-click
    const preventRightClick = (e) => {
      e.preventDefault();
    };

    // Block common DevTools shortcuts
    const preventDevToolsShortcuts = (e) => {
      // Disable F12, Ctrl+Shift+I, Ctrl+U
      if (
        (e.key === "F12") ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
      }
    };

    // Detect if DevTools is open and alert the user
    const checkDevTools = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const devtoolsWidth = window.outerWidth - window.innerWidth;
      const devtoolsHeight = window.outerHeight - window.innerHeight;

      if (devtoolsWidth > 200 || devtoolsHeight > 200) {
        alert("Developer Tools are open!");
        // You can also redirect the user or log them out if desired
      }
    };

    // Add event listeners
    window.addEventListener("contextmenu", preventRightClick); // Prevent right-click
    window.addEventListener("keydown", preventDevToolsShortcuts); // Prevent shortcuts

    // Check for DevTools at regular intervals
    const devToolsInterval = setInterval(checkDevTools, 1000);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("contextmenu", preventRightClick);
      window.removeEventListener("keydown", preventDevToolsShortcuts);
      clearInterval(devToolsInterval);
    };
  }, []);

  return null; // This component doesn't render anything, it just listens for events
};

export default DisableDevTools;
