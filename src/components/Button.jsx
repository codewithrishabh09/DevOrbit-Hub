import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn.js";

export function Button({ to, children, variant = "primary", icon = true }) {
  return (
    <Link className={cn("button magnetic", variant)} to={to}>
      <span>{children}</span>
      {icon && <ArrowRight size={18} />}
    </Link>
  );
}
