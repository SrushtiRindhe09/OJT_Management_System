import Container from "../common/Container";
import FeaturedCard from "./FeaturedCard";

function Featured() {
  const jobs = [
    {
      title: "Software Engineer Intern",
      company: "Google",
      description:
        "Join our team to work on cutting-edge projects. You'll contribute to products used by millions worldwide.",
      location: "Mountain View, CA",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      title: "Marketing Intern",
      company: "Microsoft",
      description:
        "Help shape our marketing strategies and campaigns for our suite of productivity tools.",
      location: "Redmond, WA",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      title: "Data Analyst Intern",
      company: "Salesforce",
      description:
        "Dive into data to uncover insights that will drive business decisions and improve customer experiences.",
      location: "San Francisco, CA",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
    },
  ];

  return (
    <section className="py-24 bg-gray-100">
      <Container>
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold tracking-tight">
            Featured Opportunities
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Get a glimpse of the exciting roles available right now from our
            partner companies.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <FeaturedCard key={index} job={job} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Featured;
