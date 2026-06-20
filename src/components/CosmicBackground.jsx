import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CosmicBackground() {
  const orbitRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".planet", {
        y: 22,
        rotate: 8,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.8
      });
      gsap.to(orbitRef.current, {
        rotate: 360,
        duration: 36,
        repeat: -1,
        ease: "none"
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="cosmic-bg" aria-hidden="true">
      <div className="stars" />
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="mouse-glow" />
      <div className="orbit-system" ref={orbitRef}>
        <span className="planet planet-a" />
        <span className="planet planet-b" />
        <span className="planet planet-c" />
      </div>
    </div>
  );
}
