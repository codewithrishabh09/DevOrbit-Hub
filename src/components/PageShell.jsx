import { motion } from "framer-motion";
import { pageTransition } from "../animations/reveal.js";

export function PageShell({ children, className = "" }) {
  return (
    <motion.div className={className} {...pageTransition}>
      {children}
    </motion.div>
  );
}
