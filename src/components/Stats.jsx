import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { stats } from "../data/siteData.js";

function Count({ value }) {
  const numeric = Number.parseInt(value, 10);
  const count = useMotionValue(0);
  const spring = useSpring(count, { duration: 1600, bounce: 0 });
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const canAnimate = !Number.isNaN(numeric) && !value.includes("/");

  useEffect(() => {
    if (inView && canAnimate) count.set(numeric);
  }, [canAnimate, count, inView, numeric]);

  if (!canAnimate) return <span ref={ref}>{value}</span>;
  return <motion.span ref={ref}>{spring}</motion.span>;
}

export function Stats() {
  return (
    <section className="stats-grid">
      {stats.map((stat) => (
        <div className="stat" key={stat.label}>
          <strong><Count value={stat.value} />{stat.value.replace(/[0-9]/g, "")}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </section>
  );
}
