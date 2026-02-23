import React from "react";
import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  Clock,
  DollarSign,
  Bookmark,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function StudentOpportunities() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans text-[#1F2937]">

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-20 w-full bg-white/80 backdrop-blur border-b border-[#E5E7EB]">
        <div className="flex items-center justify-between px-6 h-16 max-w-screen-xl mx-auto">

          {/* Left */}
          <div className="flex items-center gap-10">
            <h2 className="text-xl font-bold text-[#3B82F6]">
              OJT Connect
            </h2>

            <div className="hidden lg:flex items-center gap-2">
              <Link to="/student/StudentDashboard"
                className="px-4 py-2 text-sm font-medium text-[#6B7280] hover:bg-black/5 rounded-md transition">
                Dashboard
              </Link>

              <span className="px-4 py-2 text-sm font-semibold text-[#1D4ED8] bg-[#EFF6FF] rounded-md">
                Opportunities
              </span>

              <Link to="/student/applications"
                className="px-4 py-2 text-sm font-medium text-[#6B7280] hover:bg-black/5 rounded-md transition">
                My Applications
              </Link>
            </div>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center relative w-72">
            <Search className="absolute left-3 text-[#6B7280]" size={18} />
            <input
              className="w-full h-10 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
              placeholder="Search for jobs or companies..."
            />
          </div>

        </div>
      </header>

      {/* ================= MAIN ================= */}
      <main className="max-w-screen-xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* ================= FILTER SIDEBAR ================= */}
        <aside className="lg:sticky lg:top-24 h-fit">
          <div className="flex flex-col gap-6 p-6 bg-white rounded-xl border border-[#E5E7EB]">

            <div className="flex items-center justify-between">
              <h1 className="text-lg font-semibold">Filter Opportunities</h1>
              <button className="text-sm font-medium text-[#3B82F6] hover:underline">
                Reset
              </button>
            </div>

            {/* Skills */}
            <FilterSection title="Skills">
              <Checkbox label="UI/UX Design" />
              <Checkbox label="Frontend Development" defaultChecked />
              <Checkbox label="Backend Development" />
              <Checkbox label="Project Management" />
            </FilterSection>

            {/* Location */}
            <div className="border-b border-[#E5E7EB] pb-6">
              <p className="font-medium mb-3">Location</p>
              <input
                className="w-full h-10 rounded-md border border-[#E5E7EB] px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                placeholder="e.g. San Francisco, CA"
              />
            </div>

            {/* Industry */}
            <FilterSection title="Industry">
              <Radio label="Technology" defaultChecked />
              <Radio label="Marketing" />
              <Radio label="Finance" />
            </FilterSection>

            {/* Stipend Slider */}
            <div>
              <p className="font-medium mb-4">Stipend (Monthly)</p>
              <input
                type="range"
                min="0"
                max="5000"
                defaultValue="1500"
                className="w-full accent-[#1D4ED8]"
              />
              <div className="flex justify-between text-xs text-[#6B7280] mt-2">
                <span>$0</span>
                <span>$5000+</span>
              </div>
            </div>

          </div>
        </aside>

        {/* ================= JOB LIST ================= */}
        <section className="lg:col-span-3 flex flex-col gap-6">

          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="text-2xl font-bold">
              OJT Opportunities
              <span className="text-base font-normal text-[#6B7280] ml-2">
                (Showing 72 opportunities)
              </span>
            </h2>

            <div className="flex items-center gap-2">
              <span className="text-sm text-[#6B7280]">Sort by:</span>
              <select className="border border-[#E5E7EB] rounded-md px-3 py-2 text-sm focus:ring-[#1D4ED8]">
                <option>Newest</option>
                <option>Deadline</option>
                <option>Stipend</option>
              </select>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            <JobCard
              company="Microsoft"
              role="Software Engineer Intern"
              location="Redmond, WA"
              duration="3 Months"
              stipend="$4,500/mo"
              deadline="Oct 31, 2024"
            />
            <JobCard
              company="Google"
              role="UX Design Intern"
              location="Mountain View, CA"
              duration="3 Months"
              stipend="$5,000/mo"
              deadline="Nov 15, 2024"
              bookmarked
            />
            <JobCard
              company="Tesla"
              role="Mechanical Engineer Intern"
              location="Austin, TX"
              duration="6 Months"
              stipend="$3,800/mo"
              deadline="Nov 05, 2024"
            />
          </div>

          {/* Pagination */}
          <div className="flex justify-center pt-6">
            <div className="flex items-center gap-2">
              <button disabled className="size-9 flex items-center justify-center text-[#6B7280] opacity-50">
                <ChevronLeft size={18} />
              </button>

              <button className="size-9 bg-[#3B82F6] text-white rounded-md text-sm font-semibold">
                1
              </button>
              <button className="size-9 rounded-md text-sm hover:bg-black/5">
                2
              </button>
              <button className="size-9 rounded-md text-sm hover:bg-black/5">
                3
              </button>
              <span className="text-[#6B7280]">...</span>
              <button className="size-9 rounded-md text-sm hover:bg-black/5">
                8
              </button>

              <button className="size-9 flex items-center justify-center hover:bg-black/5 rounded-md">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
}

/* ================= COMPONENTS ================= */

const FilterSection = ({ title, children }) => (
  <div className="border-b border-[#E5E7EB] pb-6">
    <p className="font-medium mb-4">{title}</p>
    <div className="flex flex-col gap-3 text-sm text-[#6B7280]">
      {children}
    </div>
  </div>
);

const Checkbox = ({ label, defaultChecked }) => (
  <label className="flex items-center gap-3 cursor-pointer">
    <input type="checkbox" defaultChecked={defaultChecked} className="accent-[#1D4ED8]" />
    {label}
  </label>
);

const Radio = ({ label, defaultChecked }) => (
  <label className="flex items-center gap-3 cursor-pointer">
    <input type="radio" name="industry" defaultChecked={defaultChecked} className="accent-[#1D4ED8]" />
    {label}
  </label>
);

const JobCard = ({ company, role, location, duration, stipend, deadline, bookmarked }) => (
  <div className="flex flex-col bg-white rounded-xl border border-[#E5E7EB] p-6 gap-4 hover:shadow-lg hover:border-[#3B82F6]/50 transition-all">

    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm text-[#6B7280]">{company}</p>
        <h3 className="font-semibold text-lg">{role}</h3>
      </div>

      <Bookmark
        size={18}
        className={bookmarked ? "text-[#3B82F6] fill-[#3B82F6]" : "text-[#6B7280]"}
      />
    </div>

    <div className="flex flex-wrap gap-2 text-sm">
      <Tag icon={<MapPin size={14} />} text={location} />
      <Tag icon={<Clock size={14} />} text={duration} />
      <Tag icon={<DollarSign size={14} />} text={stipend} />
    </div>

    <div className="border-t border-[#E5E7EB] pt-4 flex justify-between items-center text-sm">
      <span className="text-[#6B7280]">Deadline: {deadline}</span>
      <button className="px-4 py-2 bg-[#3B82F6] text-white rounded-md hover:bg-[#1D4ED8] transition">
        View Details
      </button>
    </div>

  </div>
);

const Tag = ({ icon, text }) => (
  <div className="flex items-center gap-1.5 px-3 py-1 bg-[#EFF6FF] text-[#1D4ED8] font-medium rounded-full">
    {icon}
    {text}
  </div>
);