import Container from "../common/Container";

function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            What Our Users Say
          </h2>
        </div>

        <div className="mt-12 grid max-w-5xl mx-auto gap-8 lg:grid-cols-2">
          
          {/* Testimonial 1 */}
          <div className="flex flex-col justify-between rounded-xl bg-gray-50 p-8 shadow-sm hover:shadow-md transition">
            <blockquote className="text-lg text-gray-700">
              "This platform was a game-changer for my career search. 
              I found an incredible OJT that led to a full-time offer. 
              The process was so simple and efficient!"
            </blockquote>

            <div className="mt-6 flex items-center gap-4">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Jane Doe"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">Jane Doe</p>
                <p className="text-sm text-gray-500">
                  Software Development Intern
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="flex flex-col justify-between rounded-xl bg-gray-50 p-8 shadow-sm hover:shadow-md transition">
            <blockquote className="text-lg text-gray-700">
              "We've discovered amazing talent through OJT Connect. 
              It's our go-to platform for finding motivated students 
              who are eager to learn and contribute."
            </blockquote>

            <div className="mt-6 flex items-center gap-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="John Smith"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">John Smith</p>
                <p className="text-sm text-gray-500">
                  HR Manager, Tech Solutions Inc.
                </p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
