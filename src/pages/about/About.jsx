import { useState } from "react";
import PageHero from "../../components/ui/PageHero";
import Container from "../../components/ui/Container";
import Reveal from "../../components/ui/Reveal";
import Icon from "../../components/ui/Icon";
import CTABand from "../../components/ui/CTABand";
import usePageTitle from "../../hooks/usePageTitle";
import { stats } from "../../data/site";
import { team } from "../../data/contact";

const values = [
  {
    icon: "chat",
    title: "Plain language, always",
    text: "No jargon, no smoke and mirrors. We explain what we're building in words that make sense.",
  },
  {
    icon: "shield",
    title: "Quality we stand behind",
    text: "Clean, tested, well-documented work — the kind we'd be happy to maintain ourselves.",
  },
  {
    icon: "users",
    title: "True partnership",
    text: "We act like part of your team, invested in the result long after launch day.",
  },
  {
    icon: "spark",
    title: "Curious by nature",
    text: "We stay close to new tech so you benefit from it — only when it genuinely helps.",
  },
];

// Single team member card — photo from contact.js with initials fallback.
function TeamMember({ m, delay }) {
  const [imgOk, setImgOk] = useState(Boolean(m.image));
  return (
    <Reveal delay={delay}>
      <div className="group overflow-hidden rounded-3xl border border-line bg-white text-center shadow-[0_12px_30px_-24px_rgba(15,23,42,0.3)]">
        <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-brand-100 to-accent-100">
          {imgOk ? (
            <img
              src={m.image}
              alt={m.name}
              loading="lazy"
              onError={() => setImgOk(false)}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <span className="grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-600 font-display text-4xl font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-105">
              {m.initial}
            </span>
          )}

          {/* Socials reveal on hover */}
          {m.socials && (
            <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 bg-gradient-to-t from-ink/70 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {Object.entries(m.socials).map(([platform, href]) => (
                <a
                  key={platform}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${m.name} on ${platform}`}
                  className="grid h-8 w-8 place-items-center rounded-full bg-white/90 text-ink transition-colors hover:bg-white hover:text-brand-600"
                >
                  <Icon name={platform} size={15} />
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-lg font-bold text-ink">{m.name}</h3>
          <p className="mt-1 text-sm text-slate">{m.role}</p>
          <a
            href={`mailto:${m.email}`}
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            <Icon name="mail" size={14} />
            {m.email}
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export default function About() {
  usePageTitle("About Us — Rubsal Technologies");
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A small team with a big obsession for getting it right"
        subtitle="Rubsal Technologies exists to make powerful software feel simple. We blend senior engineering, thoughtful design and honest communication."
        icon="heart"
        crumbs={[{ label: "About Us" }]}
      />

      {/* Story + stats */}
      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
                Our story
              </span>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
                Great technology should feel effortless
              </h2>
              <div className="mt-5 space-y-4 text-[1.02rem] leading-relaxed text-slate">
                <p>
                  We started Rubsal because too many businesses were sold
                  complicated software they didn't need and couldn't understand.
                  We wanted to do the opposite.
                </p>
                <p>
                  Today we help startups and established companies alike build
                  websites, apps, custom tools and AI systems that are genuinely
                  easy to use — and that quietly do a lot of heavy lifting
                  behind the scenes.
                </p>
                <p>
                  Whether it's your first product or your fiftieth improvement,
                  we bring the same care: listen closely, build thoughtfully,
                  and keep things refreshingly clear.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-5">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-3xl border border-slate-200/70 bg-white p-7 text-center shadow-[0_12px_30px_-22px_rgba(15,23,42,0.3)]"
                  >
                    <p className="text-gradient font-display text-4xl font-extrabold">
                      {s.value}
                    </p>
                    <p className="mt-2 text-sm text-slate">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-gradient-to-b from-brand-50/40 to-white py-20">
        <Container>
          <Reveal className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
              What we value
            </span>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              The principles behind every project
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 0.08}>
                <div className="flex h-full flex-col rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.3)]">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                    <Icon name={v.icon} size={24} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{v.title}</h3>
                  <p className="mt-2 text-[0.93rem] leading-relaxed text-slate">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-20">
        <Container>
          <Reveal className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
              The people
            </span>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              Meet the team you'll work with
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <TeamMember key={m.name} m={m} delay={(i % 4) * 0.08} />
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
