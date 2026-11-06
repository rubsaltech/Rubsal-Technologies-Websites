import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { services } from "../../data/services";

export default function ServicesOverview() {
  return (
    <section id="services" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Everything you need to build and grow"
          subtitle="Six focused services, one dependable partner. Whatever you're trying to build, we speak plain English and ship real results."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.1}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Button to="/services" variant="ghost" icon="arrow">
            View all services
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
