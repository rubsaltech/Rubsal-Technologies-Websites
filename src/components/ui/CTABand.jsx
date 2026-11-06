import Container from "./Container";
import Button from "./Button";
import Reveal from "./Reveal";
import Icon from "./Icon";

export default function CTABand({
  title = "Let's build something smart together",
  subtitle = "Tell us about your idea — we'll reply within one business day with clear, honest next steps.",
}) {
  return (
    <section className="pb-4 pt-8">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-700 via-brand-600 to-indigo-700 px-7 py-14 text-center text-white sm:px-14 sm:py-16">
            {/* glow + grid texture */}
            <div className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />
            <div className="bg-dotgrid pointer-events-none absolute inset-0 opacity-[0.12]" />

            <div className="relative mx-auto max-w-2xl">
              <span className="mx-auto mb-5 inline-flex rounded-full bg-white/15 p-3.5">
                <Icon name="rocket" size={26} />
              </span>
              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/80">{subtitle}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button
                  to="/contact"
                  size="lg"
                  variant="secondary"
                  icon="arrow"
                  className="!bg-white !text-brand-700"
                >
                  Start your project
                </Button>
                <Button
                  to="/products"
                  size="lg"
                  className="!bg-white/10 !text-white ring-1 ring-inset ring-white/40 hover:!bg-white/20"
                >
                  Explore products
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
