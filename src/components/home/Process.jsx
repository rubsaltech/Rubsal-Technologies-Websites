import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { processSteps } from "../../data/site";

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/40 to-white py-24 sm:py-28">
      <div className="bg-dotgrid pointer-events-none absolute inset-0 opacity-50" />
      <Container className="relative">
        <SectionHeading
          eyebrow="How we work"
          title="A simple path from idea to impact"
          subtitle="No confusing process, no surprises. Four clear stages, and you're involved every step of the way."
        />

        <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* connecting line (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent lg:block" />

          {processSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.12}>
              <div className="relative flex h-full flex-col rounded-3xl border border-slate-200/70 bg-white/80 p-7 backdrop-blur">
                <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 font-display text-2xl font-extrabold text-white shadow-[0_14px_26px_-12px_rgba(37,99,235,0.7)]">
                  {s.step}
                </span>
                <h3 className="mt-5 text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-slate">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
