import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { testimonials } from "../../data/site";

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Kind words"
          title="Loved by the teams we build with"
          subtitle="We measure success by the results our clients see — and the relationships that outlast the launch."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_12px_34px_-22px_rgba(15,23,42,0.3)]">
                <div className="text-warning-500">{"★★★★★"}</div>
                <blockquote className="mt-4 flex-1 text-[1.02rem] leading-relaxed text-ink/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-600 font-bold text-white">
                    {t.name[0]}
                  </span>
                  <div>
                    <p className="font-bold text-ink">{t.name}</p>
                    <p className="text-sm text-slate">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
