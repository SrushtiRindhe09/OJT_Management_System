import React from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  LayoutDashboard,
  FolderOpen,
  Award,
  Download,
  Search,
} from "lucide-react";

export default function StudentCertificates() {
  return (
    <div className="flex min-h-screen bg-[#f8f9fa] font-sans">

      {/* ================= SIDEBAR ================= */}
      <aside className="sticky top-0 h-screen w-64 flex-shrink-0 bg-white border-r border-gray-200">
        <div className="flex h-full flex-col justify-between p-4">

          <div className="flex flex-col gap-4">

            {/* Logo */}
            <div className="flex items-center gap-3 px-2 py-3">
              <GraduationCap className="text-[#4275f1]" size={28} />
              <h1 className="text-xl font-bold text-gray-800">
                OJT Portal
              </h1>
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-1 mt-4 text-sm">

              <NavItem to="/student/dashboard" icon={<LayoutDashboard size={18} />} label="Dashboard" />

              <NavItem to="/student/applications" icon={<FolderOpen size={18} />} label="Applications" />

              <NavItemActive icon={<Award size={18} />} label="My Certificates" />

            </div>

          </div>

          {/* Profile Bottom */}
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="size-10 rounded-full object-cover"
            />
            <div>
              <p className="text-gray-800 text-sm font-medium">
                Alex Doe
              </p>
              <p className="text-gray-600 text-xs">
                alex.doe@university.edu
              </p>
            </div>
          </div>

        </div>
      </aside>

      {/* ================= MAIN ================= */}
      <main className="flex-1 p-6 lg:p-10">
        <div className="w-full max-w-4xl mx-auto">

          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              My OJT Certificates
            </h1>
          </div>

          {/* Search */}
          <div className="mb-6">
            <div className="flex items-center rounded-lg border border-gray-300 bg-white focus-within:ring-2 focus-within:ring-[#5a8ff5]/40 focus-within:border-[#5a8ff5]">

              <div className="pl-4 text-gray-400">
                <Search size={18} />
              </div>

              <input
                type="text"
                placeholder="Search by company name or year"
                className="w-full h-11 bg-transparent outline-none px-4 text-gray-800 placeholder:text-gray-400 text-base"
              />
            </div>
          </div>

          {/* Certificate List */}
          <div className="flex flex-col gap-4">

            <CertificateCard
              company="Innovatech Solutions"
              role="Software Engineer Intern"
              duration="June 2023 - August 2023"
              logo="https://via.placeholder.com/40"
            />

            <CertificateCard
              company="Quantum Analytics"
              role="Data Analyst Intern"
              duration="Jan 2023 - Mar 2023"
              logo="https://via.placeholder.com/40"
            />

            <CertificateCard
              company="NextGen Dynamics"
              role="UX/UI Design Intern"
              duration="Sep 2022 - Dec 2022"
              logo="https://via.placeholder.com/40"
            />

          </div>

        </div>
      </main>
    </div>
  );
}

/* ================= COMPONENTS ================= */

const NavItem = ({ to, icon, label }) => (
  <Link
    to={to}
    className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition"
  >
    {icon}
    <span className="font-medium">{label}</span>
  </Link>
);

const NavItemActive = ({ icon, label }) => (
  <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#f0f7ff] text-[#4275f1] font-medium">
    {icon}
    {label}
  </div>
);

const CertificateCard = ({ company, role, duration, logo }) => (
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 rounded-xl bg-white border border-gray-200 p-5">

    <div className="flex items-center gap-4">
      <div className="size-14 rounded-lg bg-gray-100 flex items-center justify-center">
        <img src={logo} alt={company} className="h-8 w-8 object-contain" />
      </div>

      <div className="flex flex-col gap-0.5">
        <p className="text-gray-800 text-base font-semibold">
          {company}
        </p>
        <p className="text-gray-600 text-sm">
          {role}
        </p>
        <p className="text-gray-600 text-sm">
          {duration}
        </p>
      </div>
    </div>

    <button className="flex items-center gap-2 h-10 px-4 rounded-lg bg-[#4275f1] text-white text-sm font-medium hover:bg-[#3461e7] transition focus:outline-none focus:ring-2 focus:ring-[#5a8ff5] focus:ring-offset-2">
      <Download size={16} />
      Download PDF
    </button>

  </div>
);