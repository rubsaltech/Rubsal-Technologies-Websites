import { Link } from "react-router-dom";
import Container from "./Container";
import Badge from "./Badge";
import Reveal from "./Reveal";
import Icon from "./Icon";

// Shared header band for inner pages.
export default function PageHero({ eyebrow, title, subtitle, crumbs = [], icon = "spark" }) {
  return (
    <section className="relative overflow-hidden bg-aurora pb-16 pt-32 sm:pt-40">
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-brand-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl" />
      <Container className="relative">
        {crumbs.length > 0 && (
          <nav className="mb-6 flex items-center gap-2 text-sm text-slate">
            <Link to="/" className="hover:text-brand-700">Home</Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-2">
                <Icon name="chevron" size={14} className="-rotate-90 text-slate-400" />
                {c.to ? (
                  <Link to={c.to} className="hover:text-brand-700">{c.label}</Link>
                ) : (
                  <span className="font-semibold text-ink">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="max-w-3xl">
          {eyebrow && (
            <Reveal>
              <Badge icon={icon}>{eyebrow}</Badge>
            </Reveal>
          )}
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              {title}
            </h1>
          </Reveal>
          {subtitle && (
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">
                {subtitle}
              </p>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
