import Container from "../ui/Container";

const names = ["Lumen", "Northwind", "Finlytics", "Orbit Labs", "Everpeak", "Novexa"];

export default function LogoStrip() {
  return (
    <section className="py-14">
      <Container>
        <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-slate/70">
          Teams that build with us
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-14">
          {names.map((n) => (
            <span
              key={n}
              className="font-display text-xl font-bold text-slate-400 grayscale transition-all duration-300 hover:text-brand-600 hover:grayscale-0 sm:text-2xl"
            >
              {n}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
