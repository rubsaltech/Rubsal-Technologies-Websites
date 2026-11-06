import PageHero from "../ui/PageHero";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import CTABand from "../ui/CTABand";
import usePageTitle from "../../hooks/usePageTitle";
import { serviceGroups } from "../../data/services";

export default function ServiceDetail({ groupKey, heroIcon }) {
  const data = serviceGroups[groupKey];
  usePageTitle(`${data.eyebrow} — Rubsal Technologies`);

  return (
    <>
      <PageHero
        eyebrow={data.eyebrow}
        title={data.title}
        subtitle={data.intro}
        icon={heroIcon}
        crumbs={[{ label: "Services", to: "/services" }, { label: data.eyebrow }]}
      />

      {/* Offerings */}
      <section className="py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {data.offerings.map((o, i) => (
              <Reveal key={o.title} delay={(i % 2) * 0.1}>
                <div className="flex h-full items-start gap-5 rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_12px_34px_-24px_rgba(15,23,42,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-200">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md">
                    <Icon name={o.icon} size={26} />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-ink">{o.title}</h3>
                    <p className="mt-2 text-[0.96rem] leading-relaxed text-slate">
                      {o.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Outcomes band */}
      <section className="pb-8">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-9 sm:p-12">
              <div className="bg-dotgrid pointer-events-none absolute inset-0 opacity-40" />
              <div className="relative grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
                    The outcome
                  </span>
                  <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">
                    What this means for you
                  </h2>
                </div>
                <ul className="grid gap-4">
                  {data.outcomes.map((o) => (
                    <li
                      key={o}
                      className="flex items-center gap-3.5 rounded-2xl bg-white/80 px-5 py-4 text-ink shadow-sm backdrop-blur"
                    >
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                        <Icon name="check" size={16} />
                      </span>
                      <span className="font-medium">{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTABand
        title={`Ready to put ${data.eyebrow.toLowerCase()} to work?`}
        subtitle="Book a free, no-pressure consultation. We'll show you exactly how we'd approach your project."
      />
    </>
  );
}
