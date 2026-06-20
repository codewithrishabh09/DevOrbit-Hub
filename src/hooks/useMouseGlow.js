import { useEffect } from "react";

export function useMouseGlow() {
  useEffect(() => {
    const root = document.documentElement;
    const update = (event) => {
      root.style.setProperty("--mouse-x", `${event.clientX}px`);
      root.style.setProperty("--mouse-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", update);
    return () => window.removeEventListener("pointermove", update);
  }, []);
}
