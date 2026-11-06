import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import usePageTitle from "../hooks/usePageTitle";

export default function NotFound() {
  usePageTitle("Page not found — Rubsal Technologies");
  return (
    <section className="bg-aurora grid min-h-[80svh] place-items-center pt-24">
      <Container className="text-center">
        <p className="text-gradient font-display text-7xl font-extrabold sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">
          We couldn't find that page
        </h1>
        <p className="mx-auto mt-3 max-w-md text-slate">
          The link may be broken or the page may have moved. Let's get you back
          on track.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button to="/" icon="arrow">
            Back to home
          </Button>
          <Button to="/contact" variant="outline">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
