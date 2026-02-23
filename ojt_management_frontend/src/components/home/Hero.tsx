import Container from "../common/Container";
import Button from "../common/Button";

function Hero() {
  return (
    <section className="py-28 bg-background">
      <Container>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold leading-tight">
              Find Your Perfect On-the-Job Training Opportunity
            </h1>

            <p className="text-lg text-muted">
              Connect with top companies and kickstart your career.
            </p>

            <div className="flex gap-4">
              <Button variant="secondary">I'm a Student</Button>
              <Button variant="outline">I'm a Company</Button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;

