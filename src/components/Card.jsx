import { motion } from "framer-motion";
import { reveal } from "../animations/reveal.js";

export function Card({ children, className = "" }) {
  return (
    <motion.article
      className={`glass-card ${className}`}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-70px" }}
      whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
    >
      {children}
    </motion.article>
  );
}
