import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import Icon from "../ui/Icon";
import GlassOrb from "../ui/GlassOrb";
import { stats } from "../../data/site";

/* -------------------------------------------------------------------------- */
/*  Animation variants                                                        */
/* -------------------------------------------------------------------------- */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

/* Rotating headline word -------------------------------------------------- */
const ROTATING = ["scale.", "perform.", "automate.", "endure."];

function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % ROTATING.length), 2200);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-block align-bottom overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: "0.9em", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-0.9em", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient inline-block"
        >
          {ROTATING[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* Pointer-parallax layer -------------------------------------------------- */
function Parallax({ sx, sy, depth = 20, className = "", children, floatY = 0, dur = 6, delay = 0 }) {
  const x = useTransform(sx, (v) => v * depth);
  const y = useTransform(sy, (v) => v * depth);
  return (
    <motion.div style={{ x, y }} className={className}>
      <motion.div
        animate={floatY ? { y: [0, -floatY, 0] } : undefined}
        transition={floatY ? { duration: dur, repeat: Infinity, ease: "easeInOut", delay } : undefined}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* Tiny animated bar chart used inside a floating card -------------------- */
function MiniBars() {
  const bars = [9, 15, 11, 19, 14, 22];
  return (
    <div className="flex h-8 items-end gap-1">
      {bars.map((h, i) => (
        <motion.span
          key={i}
          className="w-1.5 rounded-sm bg-gradient-to-t from-brand-400 to-accent-500"
          initial={{ height: 4 }}
          animate={{ height: [4, h, h - 4, h] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.12 }}
        />
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero                                                                       */
/* -------------------------------------------------------------------------- */
export default function Hero() {
  const stageRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 55, damping: 18, mass: 0.6 });

  const handleMove = (e) => {
    const el = stageRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  // 3D tilt for the orb driven by the same pointer springs.
  const rotY = useTransform(sx, (v) => v * 14);
  const rotX = useTransform(sy, (v) => v * -14);

  const chips = stats.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-aurora pt-32 sm:pt-36 lg:pt-40">
      {/* Tech grid + glow backdrop */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.4] [background-image:linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_60%_35%,#000_10%,transparent_75%)]"
      />
      <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-brand-300/30 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-10 h-80 w-80 rounded-full bg-accent-300/25 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* LEFT — copy */}
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={item}>
              <Badge icon="spark">
                <span className="relative mr-1 flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available for new projects
              </Badge>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 text-[2rem] font-extrabold leading-[1.08] tracking-tight text-ink sm:text-[2.6rem] lg:text-[3.1rem]"
            >
              Intelligent software,
              <br className="hidden sm:block" /> engineered to <RotatingWord />
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg leading-relaxed text-slate"
            >
              Rubsal Technologies partners with ambitious teams to design, build and
              ship custom software, AI automation and data platforms — engineered for
              scale and built to last.
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
              <Button to="/contact" size="lg" icon="arrow">
                Start your project
              </Button>
              <Button to="/products" size="lg" variant="secondary" iconLeft="play">
                See our work
              </Button>
            </motion.div>

            {/* Credibility stat chips */}
            <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
              {chips.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-2.5 rounded-2xl border border-line bg-white/70 px-4 py-2.5 backdrop-blur"
                >
                  <span className="font-display text-xl font-extrabold text-ink">
                    {s.value}
                  </span>
                  <span className="text-sm leading-tight text-mist">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — interactive illustration stage */}
          <div
            ref={stageRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
            style={{ perspective: 1200 }}
          >
            {/* rotating conic halo */}
            <motion.div
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-2xl"
              style={{
                background:
                  "conic-gradient(from 0deg, var(--color-brand-400), var(--color-accent-400), var(--color-brand-300), var(--color-brand-400))",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            />

            <motion.div style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}>
              <GlassOrb className="w-full" />
            </motion.div>

            {/* Floating "product" cards */}
            <Parallax
              sx={sx}
              sy={sy}
              depth={46}
              floatY={12}
              dur={6}
              className="absolute left-0 top-10 sm:-left-4"
            >
              <div className="glass-strong flex items-center gap-3 rounded-2xl px-4 py-3 shadow-[0_18px_40px_-20px_rgba(15,23,42,0.4)]">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Icon name="check" size={18} />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-ink">Deployment live</p>
                  <p className="text-xs text-mist">99.9% uptime</p>
                </div>
              </div>
            </Parallax>

            <Parallax
              sx={sx}
              sy={sy}
              depth={62}
              floatY={16}
              dur={7}
              delay={0.6}
              className="absolute -bottom-2 left-2 sm:left-0"
            >
              <div className="glass-strong flex items-center gap-3 rounded-2xl px-4 py-3 shadow-[0_18px_40px_-20px_rgba(15,23,42,0.4)]">
                <MiniBars />
                <div className="leading-tight">
                  <p className="text-sm font-bold text-ink">+42% performance</p>
                  <p className="text-xs text-mist">last 30 days</p>
                </div>
              </div>
            </Parallax>

            <Parallax
              sx={sx}
              sy={sy}
              depth={54}
              floatY={12}
              dur={6.5}
              delay={0.3}
              className="absolute right-0 top-24 sm:-right-2"
            >
              <div className="glass-strong flex items-center gap-2.5 rounded-full px-4 py-2.5 shadow-[0_18px_40px_-20px_rgba(15,23,42,0.4)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-600" />
                </span>
                <span className="text-sm font-bold text-ink">AI model · active</span>
              </div>
            </Parallax>
          </div>
        </div>
      </Container>
    </section>
  );
}
