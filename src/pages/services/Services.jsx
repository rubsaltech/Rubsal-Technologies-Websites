import { Link } from "react-router-dom";
import PageHero from "../../components/ui/PageHero";
import Container from "../../components/ui/Container";
import ServiceCard from "../../components/ui/ServiceCard";
import Reveal from "../../components/ui/Reveal";
import Icon from "../../components/ui/Icon";
import CTABand from "../../components/ui/CTABand";
import usePageTitle from "../../hooks/usePageTitle";
import { services, serviceGroups } from "../../data/services";

const groupMeta = [
  {
    key: "ai-data",
    to: "/services/ai-data",
    icon: "brain",
    color: "from-brand-500 to-accent-600",
  },
  {
    key: "software-development",
    to: "/services/software-development",
    icon: "code",
    color: "from-brand-400 to-brand-700",
  },
];

export default function Services() {
  usePageTitle("Services — Rubsal Technologies");
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Smart software and AI, explained in plain English"
        subtitle="Two core practices, six focused services. Whatever you're building, we handle the complexity so you can focus on your business."
        crumbs={[{ label: "Services" }]}
      />

      {/* Two practice areas */}
      <section className="py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {groupMeta.map((g, i) => {
              const data = serviceGroups[g.key];
              return (
                <Reveal key={g.key} delay={i * 0.1}>
                  <Link
                    to={g.to}
                    className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-9 shadow-[0_14px_40px_-24px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-28px_rgba(37,99,235,0.45)]"
                  >
                    <div
                      className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${g.color} text-white shadow-lg`}
                    >
                      <Icon name={g.icon} size={30} />
                    </div>
                    <span className="mt-6 text-xs font-bold uppercase tracking-widest text-brand-600">
                      {data.eyebrow}
                    </span>
                    <h2 className="mt-2 text-2xl font-bold text-ink">{data.title}</h2>
                    <p className="mt-3 flex-1 text-[0.98rem] leading-relaxed text-slate">
                      {data.intro}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1.5 font-bold text-brand-700">
                      Explore {data.eyebrow}
                      <Icon
                        name="arrow"
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          {/* All services grid */}
          <div className="mt-20">
            <Reveal>
              <h2 className="text-2xl font-bold text-ink sm:text-3xl">
                Explore every service
              </h2>
              <p className="mt-3 max-w-xl text-slate">
                Click any card to dive into the details of what we offer.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                  <ServiceCard service={s} />
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
