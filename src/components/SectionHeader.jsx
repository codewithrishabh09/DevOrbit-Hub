import { motion } from "framer-motion";
import { reveal } from "../animations/reveal.js";

export function SectionHeader({ eyebrow, title, copy, align = "center" }) {
  return (
    <motion.div
      className={`section-header ${align === "left" ? "left" : ""}`}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </motion.div>
  );
}
