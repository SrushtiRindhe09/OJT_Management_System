function FeaturedCard({ job }) {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 transition hover:shadow-lg">
      
      {/* Top section */}
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 rounded-xl bg-gray-100 flex items-center justify-center p-2">
          <img
            src={job.logo}
            alt={job.company}
            className="object-contain h-8"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            {job.title}
          </h3>
          <p className="text-gray-500 text-sm">
            {job.company}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-6 text-gray-600 text-sm leading-relaxed">
        {job.description}
      </p>

      {/* Bottom section */}
      <div className="mt-6 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-gray-500">
          <span>📍</span>
          <span>{job.location}</span>
        </div>

        <button className="text-indigo-600 font-semibold hover:underline">
          View Details
        </button>
      </div>
    </div>
  );
}

export default FeaturedCard;
