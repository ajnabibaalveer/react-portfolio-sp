import { useEffect, useRef, useState } from "react";

export const CustomCursor = () => {
  const dotRef = useRef(null);
  const circleRef = useRef(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;

      // Move dot instantly
      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`;
        dotRef.current.style.top = `${y}px`;
      }

      // Move circle with delay
      if (circleRef.current) {
        circleRef.current.animate(
          [
            { left: `${circleRef.current.style.left}`, top: `${circleRef.current.style.top}` },
            { left: `${x}px`, top: `${y}px` },
          ],
          {
            duration: 100, // trail speed
            fill: "forwards",
            easing: "ease-out",
          }
        );
      }
    };

    const handleThemeChange = () => {
      setTheme(localStorage.getItem("theme") || "light");
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("theme-change", handleThemeChange); // in case theme changes
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("theme-change", handleThemeChange);
    };
  }, []);

  return (
    <div className="max-sm:hidden">
      <div
        ref={circleRef}
        className={`cursor-circle ${theme === "dark" ? "dark" : "light"}`}
      ></div>
      <div
        ref={dotRef}
        className={`cursor-dot ${theme === "dark" ? "dark" : "light"}`}
      ></div>
    </div>
  );
};
