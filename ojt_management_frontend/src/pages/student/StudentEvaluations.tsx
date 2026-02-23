import React from "react";
import { Link } from "react-router-dom";

import {
  LayoutDashboard,
  User,
  FileText,
  Building2,
  Settings,
  HelpCircle,
  LogOut,
  Download,
  ChevronDown

} from "lucide-react";

export default function StudentEvaluations() {
  return (
    <div className="min-h-screen flex bg-[#F9FAFB] text-[#111827] font-sans">

      {/* ================= SIDEBAR ================= */}
      <aside className="hidden lg:flex w-64 flex-col justify-between bg-white border-r border-[#E5E7EB]">
        <div className="p-4 flex flex-col gap-4">

          {/* Profile */}
          <div className="flex items-center gap-3 px-2">
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h1 className="text-sm font-semibold">John Doe</h1>
              <p className="text-sm text-[#6B7280]">ABC Corporation</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-1 mt-4 text-sm">

            <NavItem to="/student/StudentDashboard" icon={<LayoutDashboard size={18} />} label="Dashboard" />

            <NavItem to="/student/profile" icon={<User size={18} />} label="My Profile" />

            <NavItemActive icon={<FileText size={18} />} label="My Evaluations" />

            <NavItem icon={<FileText size={18} />} label="Documents" />

            <NavItem icon={<Building2 size={18} />} label="Company" />

          </nav>
        </div>

        {/* Bottom */}
        <div className="p-4 border-t border-[#E5E7EB] text-sm">
          <NavItem icon={<Settings size={18} />} label="Settings" />
          <NavItem icon={<HelpCircle size={18} />} label="Help" />

          <button className="mt-3 w-full flex items-center justify-center gap-2 h-9 rounded-md bg-[#F3F4F6] hover:bg-[#E5E7EB] text-sm font-medium">
            <LogOut size={16} />
            Log Out
          </button>
        </div>
      </aside>

      {/* ================= MAIN ================= */}
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="pb-6 border-b border-[#E5E7EB]">
            <h1 className="text-3xl font-bold">
              My OJT Evaluations
            </h1>
            <p className="text-[#6B7280] text-base mt-1">
              OJT Period: June 2024 - Dec 2024
            </p>
          </div>

          {/* Tabs */}
          <div className="border-b border-[#E5E7EB] mt-4">
            <nav className="flex gap-8 -mb-px">
              <Tab active label="Mid-term" />
              <Tab label="Final" />
              <Tab label="Monthly Assessments" />
            </nav>
          </div>

          {/* Content */}
          <div className="mt-8 space-y-6">

            {/* Evaluation Card */}
            <div className="rounded-lg bg-white border border-[#E5E7EB] overflow-hidden">

              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-6">

                  <div className="flex-grow">
                    <p className="text-sm text-[#6B7280]">
                      Mid-term Evaluation - July 15, 2024
                    </p>

                    <p className="text-xl font-semibold mt-1">
                      Overall Score: 88/100
                    </p>

                    <div className="mt-4">
                      <p className="text-sm text-[#374151]">
                        Feedback from your supervisor,{" "}
                        <span className="font-medium text-[#111827]">
                          Jane Smith (Project Manager)
                        </span>.
                      </p>

                      <blockquote className="mt-2 pl-4 border-l-2 border-[#E5E7EB]">
                        <p className="text-sm text-[#374151] italic">
                          "A good performance with notable strengths in teamwork and communication.
                          Focus on improving technical documentation for the next period."
                        </p>
                      </blockquote>

                      <p className="mt-4 text-sm text-[#6B7280]">
                        Status:{" "}
                        <span className="font-medium text-green-600">
                          Completed
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <button className="flex items-center gap-2 h-9 px-4 rounded-md bg-[#4F46E5] hover:bg-indigo-700 text-white text-sm font-medium">
                      <Download size={16} />
                      Download as PDF
                    </button>
                  </div>

                </div>
              </div>

              {/* Accordion */}
              <div className="px-6 pb-6 pt-0">
                <div className="flex flex-col gap-3">

                  <Accordion title="Strengths">
                    John is a highly collaborative team member who actively contributes to discussions and supports his peers.
                    He communicates his ideas clearly and is receptive to feedback.
                  </Accordion>

                  <Accordion title="Areas for Improvement">
                    While strong in collaboration, John could focus on improving the technical documentation
                    for his projects. Ensuring clear and comprehensive documentation will be key
                    for long-term project maintainability.
                  </Accordion>

                </div>
              </div>

            </div>

            {/* Empty State */}
            <div className="text-center py-16 px-6 border-2 border-dashed border-[#E5E7EB] rounded-lg bg-white">
              <div className="mx-auto w-fit bg-[#F3F4F6] p-3 rounded-full">
                <FileText className="text-[#4F46E5]" size={32} />
              </div>

              <h3 className="mt-4 text-base font-semibold">
                Final Evaluation Not Yet Available
              </h3>

              <p className="mt-1 text-sm text-[#6B7280]">
                Your final evaluation will appear here once it has been submitted by your supervisor.
                Check back later!
              </p>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}

/* ================= COMPONENTS ================= */

const NavItem = ({ to, icon, label }) => (
  <Link
    to={to || "#"}
    className="flex items-center gap-3 px-3 py-2 rounded-md text-[#374151] hover:bg-[#F3F4F6] text-sm font-medium"
  >
    {icon}
    {label}
  </Link>
);

const NavItemActive = ({ icon, label }) => (
  <div className="flex items-center gap-3 px-3 py-2 rounded-md bg-[#F3F4F6] text-[#4F46E5] text-sm font-semibold">
    {icon}
    {label}
  </div>
);

const Tab = ({ label, active }) => (
  <button
    className={`py-3 border-b-2 ${
      active
        ? "border-[#4F46E5] text-[#4F46E5] font-semibold"
        : "border-transparent text-[#6B7280] hover:text-[#374151]"
    } text-sm`}
  >
    {label}
  </button>
);

const Accordion = ({ title, children }) => (
  <details className="rounded-md border border-[#E5E7EB] bg-[#F9FAFB] px-4 group">
    <summary className="flex cursor-pointer items-center justify-between py-3 text-sm font-medium text-[#374151] list-none">
      {title}
      <ChevronDown className="text-[#9CA3AF] group-open:rotate-180 transition-transform" size={18} />
    </summary>
    <p className="text-sm text-[#6B7280] pb-4">
      {children}
    </p>
  </details>
);