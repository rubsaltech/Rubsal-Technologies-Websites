import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import { stats } from "../../data/site";

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px hairline" />
      <Container>
        <SectionHeading
          align="left"
          eyebrow="Why Rubsal"
          title="A partner that gets it right, and keeps it simple"
          subtitle="We combine senior engineering with clear communication — so you always know what's happening and why it matters."
        />

        {/* Bento grid */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {/* Big feature card */}
          <Reveal className="lg:col-span-2">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-indigo-700 p-9 text-white">
              <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
              <div className="pointer-events-none absolute right-6 top-6 opacity-20">
                <Icon name="spark" size={120} strokeWidth={1} />
              </div>
              <div className="relative max-w-md">
                <span className="inline-flex rounded-xl bg-white/15 p-3">
                  <Icon name="target" size={26} />
                </span>
                <h3 className="mt-5 text-2xl font-bold">
                  Built around your goals, not a template
                </h3>
                <p className="mt-3 text-white/80">
                  Every project starts with your business — not our tech stack.
                  We design the solution around the outcome you actually need.
                </p>
              </div>
              <div className="relative mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-3xl font-extrabold">{s.value}</p>
                    <p className="mt-1 text-sm text-white/70">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Side cards */}
          <div className="grid gap-5">
            {[
              {
                icon: "shield",
                title: "Secure & reliable",
                text: "Best-practice security and testing baked in from day one.",
              },
              {
                icon: "clock",
                title: "On-time delivery",
                text: "Focused sprints and clear milestones — no disappearing acts.",
              },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1}>
                <div className="flex h-full items-start gap-4 rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.3)]">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                    <Icon name={f.icon} size={24} />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-ink">{f.title}</h3>
                    <p className="mt-1.5 text-[0.95rem] leading-relaxed text-slate">
                      {f.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
