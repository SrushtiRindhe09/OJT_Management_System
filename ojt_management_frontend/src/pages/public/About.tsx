import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../components/common/Container";

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-gray-100">

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Text */}
            <div>
              <h1 className="text-4xl font-bold mb-6">
                About OJT Connect
              </h1>
              <p className="text-gray-600 leading-relaxed mb-6">
                OJT Connect is a centralized digital platform designed to
                streamline the On-the-Job Training process between students,
                coordinators, recruiters, and administrators.
              </p>

              {showMore && (
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our system ensures structured workflows, transparent
                  communication, and secure access management. We aim to
                  simplify industry-academia collaboration through an
                  intuitive and scalable solution.
                </p>
              )}

              <button
                onClick={() => setShowMore(!showMore)}
                className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
              >
                {showMore ? "Show Less" : "Learn More"}
              </button>
            </div>

            {/* Image */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="Team Collaboration"
                className="rounded-2xl shadow-lg"
              />
            </div>

          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Image */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Students Working"
                className="rounded-2xl shadow-lg"
              />
            </div>

            {/* Text */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Our Mission & Vision
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We aim to empower students with real-world opportunities
                while enabling recruiters to discover and nurture emerging
                talent.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our vision is to create a secure, transparent, and
                collaborative digital ecosystem for OJT management.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              Our Core Modules
            </h2>
            <p className="text-gray-600 mt-3">
              Four structured modules powering OJT Connect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                title: "Student",
                desc: "Apply for internships, track applications, and manage OJT progress efficiently.",
              },
              {
                title: "Coordinator",
                desc: "Monitor student approvals and ensure smooth institution-company coordination.",
              },
              {
                title: "Recruiter",
                desc: "Post roles, shortlist candidates, and manage recruitment workflows.",
              },
              {
                title: "Admin",
                desc: "Manage users, roles, and maintain platform integrity securely.",
              },
            ].map((module, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {module.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {module.desc}
                </p>
              </div>
            ))}

          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <Container>
          <div className="bg-indigo-600 text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="mb-8">
              Join OJT Connect today and simplify your OJT journey.
            </p>

            <div className="flex justify-center gap-6">
              <Link
                to="/signup"
                className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition"
              >
                Create Account
              </Link>

              <Link
                to="/contact"
                className="border border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-indigo-600 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}

export default About;
