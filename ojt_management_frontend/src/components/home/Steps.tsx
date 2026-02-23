import Container from "../common/Container";

function Steps() {
  const steps = [
    {
      title: "Search & Discover",
      desc: "Browse thousands of OJT listings from leading companies to find the one that matches your career goals.",
    },
    {
      title: "Apply with Confidence",
      desc: "Submit your application through our streamlined process and track its status every step of the way.",
    },
    {
      title: "Succeed & Grow",
      desc: "Gain invaluable industry experience, build your professional network, and launch your career.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold">Simple Steps to Success</h2>
          <p className="text-muted max-w-2xl mx-auto">
           Whether you're a student looking for experience or a company seeking fresh talent, our platform makes the process seamless.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-xl hover:shadow-md transition"
            >
              <div className="w-12 h-12 mx-auto bg-secondary text-primary rounded-full flex items-center justify-center mb-4 font-bold">
                {i + 1}
              </div>

              <h3 className="font-semibold text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-muted">{step.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Steps;
