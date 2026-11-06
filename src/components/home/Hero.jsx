import { motion } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import Icon from "../ui/Icon";
import GlassOrb from "../ui/GlassOrb";
import { trustBar } from "../../data/site";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-aurora pt-32 sm:pt-36 lg:pt-40">
      {/* decorative soft blobs */}
      <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-brand-300/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-accent-300/25 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
          {/* LEFT */}
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={item}>
              <Badge>Innovative Tech. Real Impact.</Badge>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 text-[2.6rem] font-extrabold leading-[1.04] tracking-tight text-ink sm:text-6xl lg:text-[4.1rem]"
            >
              Turning ideas into{" "}
              <span className="text-gradient">smart digital</span> solutions.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg leading-relaxed text-slate"
            >
              From custom software to AI-powered solutions, we help businesses
              innovate, automate and grow — without the technical jargon.
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
              <Button to="/services" size="lg" icon="arrow">
                Explore Our Services
              </Button>
              <Button to="/products" size="lg" variant="secondary" iconLeft="play">
                See Our Work
              </Button>
            </motion.div>

            {/* social proof */}
            <motion.div variants={item} className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[
                  "var(--color-brand-600)",
                  "var(--color-accent-500)",
                  "var(--color-brand-400)",
                  "var(--color-accent-400)",
                ].map((c, i) => (
                  <span
                    key={i}
                    className="grid h-10 w-10 place-items-center rounded-full border-2 border-white text-xs font-bold text-white shadow-sm"
                    style={{ background: c }}
                  >
                    {["A", "R", "M", "K"][i]}
                  </span>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-warning-500">
                  {"★★★★★"}
                  <span className="ml-1 font-bold text-ink">4.9/5</span>
                </div>
                <p className="text-slate">Trusted by 40+ growing teams</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — glass illustration */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <GlassOrb className="w-full" />
          </div>
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="glass mt-10 grid grid-cols-2 gap-x-4 gap-y-6 rounded-3xl p-6 sm:mt-14 sm:p-7 md:grid-cols-4"
        >
          {trustBar.map((t, i) => (
            <div
              key={t.title}
              className={`flex items-center gap-3.5 ${
                i !== trustBar.length - 1 ? "md:border-r md:border-slate-200/70" : ""
              }`}
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name={t.icon} size={22} />
              </span>
              <div>
                <p className="font-bold leading-tight text-ink">{t.title}</p>
                <p className="text-sm text-slate">{t.text}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
