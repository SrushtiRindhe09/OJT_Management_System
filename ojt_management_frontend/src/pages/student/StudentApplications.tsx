import React from "react";
import { Link } from "react-router-dom";
import {
  School,
  LayoutDashboard,
  Search,
  Briefcase,
  User,
  Settings,
  LogOut,
} from "lucide-react";

export default function StudentApplications() {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC] text-slate-800 font-sans">

      {/* ================= SIDEBAR ================= */}
      <aside className="w-64 flex-shrink-0 bg-white p-4 border-r border-[#E2E8F0]">
  <div className="flex flex-col h-full">

    {/* Logo */}
    <div className="flex items-center gap-2.5 p-2 mb-8">
      <School className="text-[#4338CA] w-8 h-8" />
      <h1 className="text-xl font-bold text-slate-900">
        OJT Portal
      </h1>
    </div>

    {/* Profile Section */}
    <div className="flex items-center gap-3 px-2 mb-6">
      <img
        src="https://i.pravatar.cc/100"
        alt="profile"
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <h2 className="text-sm font-semibold text-slate-900 leading-tight">
          Alex Morgan
        </h2>
        <p className="text-sm text-[#64748B] leading-tight">
          alex.morgan@university.edu
        </p>
      </div>
    </div>

    {/* Navigation */}
    <nav className="flex flex-col gap-1 mt-2">

      <NavItem to="/student/StudentDashboard" icon={<LayoutDashboard size={20} />} label="Dashboard" />

      <NavItem to="/student/opportunities" icon={<Search size={20} />} label="OJT Listings" />

      <NavItemActive icon={<Briefcase size={20} />} label="My Applications" />

      <NavItem to="/student/profile" icon={<User size={20} />} label="Profile" />

    </nav>

    {/* Bottom Section */}
    <div className="mt-auto flex flex-col gap-1 pt-6">

      <NavItem icon={<Settings size={20} />} label="Settings" />

      <NavItem icon={<LogOut size={20} />} label="Log out" />

    </div>

  </div>
</aside>

      {/* ================= MAIN ================= */}
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
            <h1 className="text-3xl font-bold text-slate-900">
              My OJT Applications
            </h1>

            <Link
              to="/student/opportunities"
              className="flex items-center gap-2 h-10 px-4 bg-[#4338CA] text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-[#3730A3] transition"
            >
              <Search size={16} />
              Search OJT Listings
            </Link>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 p-1 overflow-x-auto mb-6 border-b border-[#E2E8F0] text-sm">
            <Tab active label="All" />
            <Tab label="Pending" />
            <Tab label="Shortlisted" />
            <Tab label="Approved" />
            <Tab label="Rejected" />
          </div>

          {/* Applications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            <ApplicationCard
              role="Junior Web Developer Intern"
              company="Innovatech Solutions"
              status="Approved"
              statusColor="success"
              date="Oct 26, 2023"
            />

            <ApplicationCard
              role="Data Analyst Intern"
              company="QuantumLeap Analytics"
              status="Pending"
              statusColor="warning"
              date="Oct 24, 2023"
            />

            <ApplicationCard
              role="UX/UI Design Intern"
              company="CodeCrafters Inc."
              status="Rejected"
              statusColor="error"
              date="Oct 22, 2023"
            />

            <ApplicationCard
              role="Software Engineer Intern"
              company="NextGen Labs"
              status="Shortlisted"
              statusColor="info"
              date="Oct 20, 2023"
            />

          </div>

          {/* Empty State (hidden by default like original) */}
          <div className="hidden mt-8">
            <div className="text-center py-20 px-6 rounded-xl bg-white border border-[#E2E8F0]">
              <div className="inline-flex items-center justify-center bg-[#EEF2FF] text-[#4338CA] p-4 rounded-full mb-4">
                <Briefcase size={32} />
              </div>
              <h3 className="text-xl font-bold mb-1">
                No Applications Yet!
              </h3>
              <p className="text-[#64748B] mb-6">
                Start exploring and apply for your first OJT opportunity.
              </p>
              <Link
                to="/student/opportunities"
                className="flex items-center justify-center gap-2 h-10 px-4 bg-[#4338CA] text-white text-sm font-semibold rounded-lg hover:bg-[#3730A3] transition mx-auto"
              >
                <Search size={16} />
                Find an OJT
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

const Tab = ({ label, active }) => (
  <button
    className={`px-4 py-1.5 rounded-lg ${
      active
        ? "bg-[#EEF2FF] text-[#4338CA] font-semibold"
        : "text-[#64748B] hover:bg-slate-100"
    }`}
  >
    {label}
  </button>
);

const ApplicationCard = ({ role, company, status, statusColor, date }) => {

  const statusStyles = {
    success: "bg-green-100 text-green-600",
    warning: "bg-yellow-100 text-yellow-600",
    error: "bg-red-100 text-red-600",
    info: "bg-indigo-100 text-indigo-600",
  };

  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white p-5 border border-[#E2E8F0] shadow-sm">

      <div className="flex justify-between items-start gap-4">
        <div>
          <p className="text-base font-semibold text-slate-900">
            {role}
          </p>
          <p className="text-sm text-[#64748B]">
            {company}
          </p>
        </div>

        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${statusStyles[statusColor]}`}>
          <span className="h-2 w-2 rounded-full bg-current"></span>
          {status}
        </div>
      </div>

      <p className="text-sm text-[#64748B]">
        Applied on: {date}
      </p>

      <div className="flex gap-3 mt-auto pt-4 border-t border-[#E2E8F0]">
        <button className="flex-1 h-9 text-sm font-semibold rounded-lg bg-[#EEF2FF] text-[#4338CA] hover:bg-[#4338CA]/20 transition">
          View Details
        </button>

        <button
          className={`flex-1 h-9 text-sm font-semibold rounded-lg ${
            status === "Pending" || status === "Shortlisted"
              ? "bg-slate-100 text-slate-600 hover:bg-slate-200 transition"
              : "bg-slate-100 text-slate-400 cursor-not-allowed"
          }`}
        >
          Withdraw
        </button>
      </div>

    </div>
  );
};

const NavItem = ({ to, icon, label }) => (
  <Link
    to={to}
    className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-[#64748B] hover:bg-[#EEF2FF] hover:text-[#4338CA] transition-colors"
  >
    {icon}
    {label}
  </Link>
);

const NavItemActive = ({ icon, label }) => (
  <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-semibold bg-[#EEF2FF] text-[#4338CA]">
    {icon}
    {label}
  </div>
);