import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "../../components/ui/PageHero";
import Container from "../../components/ui/Container";
import Reveal from "../../components/ui/Reveal";
import Icon from "../../components/ui/Icon";
import CTABand from "../../components/ui/CTABand";
import usePageTitle from "../../hooks/usePageTitle";
import { products } from "../../data/products";

const statusStyle = {
  Live: "bg-success-50 text-success-700 border-success-200",
  Beta: "bg-warning-50 text-warning-700 border-warning-200",
  "Coming soon": "bg-surface-mute text-mist border-line",
};

export default function Products() {
  usePageTitle("Products — Rubsal Technologies");
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(products.map((p) => p.category)))],
    []
  );
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Ready-made tools, built on real client work"
        subtitle="A growing suite of products that package our best ideas — so you can get the benefits of smart software, faster."
        icon="rocket"
        crumbs={[{ label: "Products" }]}
      />

      <section className="py-16">
        <Container>
          {/* Filter */}
          <div className="mb-10 flex flex-wrap gap-2.5">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                  active === c
                    ? "border-brand-600 bg-brand-600 text-white shadow-[0_10px_24px_-12px_rgba(37,99,235,0.7)]"
                    : "border-slate-200 bg-white text-slate hover:border-brand-300 hover:text-brand-700"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.article
                  key={p.name}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_12px_34px_-24px_rgba(15,23,42,0.3)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_54px_-28px_rgba(37,99,235,0.45)]"
                >
                  {/* gradient header */}
                  <div className={`relative h-32 bg-gradient-to-br ${p.accent}`}>
                    <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:16px_16px]" />
                    <span className="absolute left-5 top-5 font-display text-xl font-bold text-white">
                      {p.name}
                    </span>
                    <span
                      className={`absolute right-4 top-4 rounded-full border bg-white/90 px-3 py-1 text-xs font-bold ${statusStyle[p.status]}`}
                    >
                      {p.status}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
                      {p.category}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-ink">{p.tagline}</h3>
                    <p className="mt-2.5 flex-1 text-[0.93rem] leading-relaxed text-slate">
                      {p.description}
                    </p>
                    <ul className="mt-5 flex flex-col gap-2">
                      {p.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2.5 text-sm text-slate"
                        >
                          <Icon name="check" size={16} className="text-brand-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      <CTABand
        title="Need something tailored to you?"
        subtitle="Our products are a starting point — we customise and extend them to fit exactly how your business works."
      />
    </>
  );
}
