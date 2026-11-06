import { motion } from "framer-motion";

/**
 * Hand-built "liquid glass" hero illustration.
 * Two interlocking glossy blue torus rings on an orbital path with
 * floating glass bubbles. Pure SVG + CSS/framer so it stays crisp,
 * light-weight and themeable — no external 3D render required.
 */
export default function GlassOrb({ className = "" }) {
  const float = {
    animate: { y: [0, -16, 0] },
    transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Ambient glow behind the object */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--color-brand-500) 45%, transparent) 0%, color-mix(in srgb, var(--color-accent-400) 25%, transparent) 45%, transparent 70%)",
        }}
      />

      <motion.svg
        viewBox="0 0 520 520"
        className="w-full drop-shadow-[0_40px_60px_rgba(37,99,235,0.28)]"
        {...float}
      >
        <defs>
          <linearGradient id="glassA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-brand-100)" />
            <stop offset="35%" stopColor="var(--color-brand-400)" />
            <stop offset="75%" stopColor="var(--color-brand-600)" />
            <stop offset="100%" stopColor="var(--color-brand-900)" />
          </linearGradient>
          <linearGradient id="glassB" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-accent-200)" />
            <stop offset="40%" stopColor="var(--color-accent-500)" />
            <stop offset="80%" stopColor="var(--color-brand-600)" />
            <stop offset="100%" stopColor="var(--color-brand-800)" />
          </linearGradient>
          <linearGradient id="sheen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="bubble" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="35%" stopColor="var(--color-brand-200)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--color-brand-500)" stopOpacity="0.15" />
          </radialGradient>
          <filter id="soft" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>

        {/* Soft contact shadow */}
        <ellipse cx="270" cy="430" rx="150" ry="26" fill="var(--color-brand-900)" opacity="0.14" filter="url(#soft)" />

        {/* Orbital ring (slow spin) */}
        <motion.ellipse
          cx="260"
          cy="260"
          rx="210"
          ry="96"
          fill="none"
          stroke="var(--color-brand-300)"
          strokeWidth="2"
          strokeOpacity="0.7"
          transform="rotate(-24 260 260)"
          animate={{ rotate: [-24, 336] }}
          transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "260px 260px" }}
        />

        {/* Ring 1 — glass tube */}
        <g transform="rotate(-18 260 260)">
          <ellipse cx="260" cy="260" rx="150" ry="150" fill="none" stroke="url(#glassA)" strokeWidth="56" strokeLinecap="round" opacity="0.92" />
          {/* inner depth edge */}
          <ellipse cx="260" cy="260" rx="150" ry="150" fill="none" stroke="var(--color-brand-900)" strokeWidth="56" strokeDasharray="60 880" strokeDashoffset="430" opacity="0.25" />
          {/* glossy top highlight */}
          <path d="M150 196 a150 150 0 0 1 210 -20" fill="none" stroke="url(#sheen)" strokeWidth="14" strokeLinecap="round" opacity="0.9" />
        </g>

        {/* Ring 2 — interlocked, different tilt */}
        <g transform="rotate(62 275 268)">
          <ellipse cx="275" cy="268" rx="128" ry="128" fill="none" stroke="url(#glassB)" strokeWidth="50" strokeLinecap="round" opacity="0.9" />
          <path d="M175 214 a128 128 0 0 1 182 -14" fill="none" stroke="url(#sheen)" strokeWidth="12" strokeLinecap="round" opacity="0.85" />
        </g>

        {/* Small front arc of ring 1 drawn on top to sell the "interlock" */}
        <g transform="rotate(-18 260 260)">
          <path d="M126 300 a150 150 0 0 0 86 104" fill="none" stroke="url(#glassA)" strokeWidth="56" strokeLinecap="round" opacity="0.95" />
        </g>

        {/* Floating glass bubbles */}
        {[
          { cx: 118, cy: 150, r: 20, d: 0 },
          { cx: 406, cy: 128, r: 13, d: 1.2 },
          { cx: 150, cy: 372, r: 15, d: 0.6 },
          { cx: 420, cy: 348, r: 22, d: 1.8 },
          { cx: 356, cy: 70, r: 9, d: 2.2 },
        ].map((b, i) => (
          <motion.circle
            key={i}
            cx={b.cx}
            cy={b.cy}
            r={b.r}
            fill="url(#bubble)"
            stroke="#ffffff"
            strokeOpacity="0.5"
            strokeWidth="1"
            animate={{ y: [0, -14, 0], opacity: [0.75, 1, 0.75] }}
            transition={{ duration: 4 + b.d, repeat: Infinity, ease: "easeInOut", delay: b.d }}
          />
        ))}
      </motion.svg>
    </motion.div>
  );
}
