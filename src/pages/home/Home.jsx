import Hero from "../../components/home/Hero";
import ServicesOverview from "../../components/home/ServicesOverview";
import WhyUs from "../../components/home/WhyUs";
import Process from "../../components/home/Process";
import Testimonials from "../../components/home/Testimonials";
import CTABand from "../../components/ui/CTABand";
import usePageTitle from "../../hooks/usePageTitle";

export default function Home() {
  usePageTitle("Rubsal Technologies — Smart Digital Solutions");
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyUs />
      <Process />
      <Testimonials />
      <CTABand />
    </>
  );
}
