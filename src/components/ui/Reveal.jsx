import { motion } from "framer-motion";

// Subtle, tasteful entrance animation used across sections.
// Respects reduced-motion automatically via framer-motion + CSS fallback.
export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 24,
  as = "div",
  once = true,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
