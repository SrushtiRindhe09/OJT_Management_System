import React from "react";
import { Link } from "react-router-dom";
import {
  School,
  LayoutDashboard,
  User,
  Briefcase,
  FileText,
  Calendar,
  Award,
  HelpCircle,
  LogOut,
  Bell,
  FileEdit,
  ClipboardCheck,
  CheckSquare,
  Building2,
  MessageCircle,
  History,
} from "lucide-react";

export default function StudentDashboard() {
  return (
    <div className="min-h-screen flex bg-[#f8fafc] text-[#0f172a] font-sans">
      
      {/* ================= SIDEBAR ================= */}
      <aside className="w-64 bg-white border-r border-[#e2e8f0] p-5 flex flex-col justify-between">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-[#4f46e5] p-2 rounded-lg">
              <School className="text-white w-5 h-5" />
            </div>
            <h1 className="text-lg font-bold">OJT Portal</h1>
          </div>

          {/* Profile */}
          <div className="flex items-center gap-3 mb-8">
            <img
              src="https://i.pravatar.cc/100"
              alt="student"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="font-semibold text-sm">Jessica Pearson</h2>
              <p className="text-xs text-[#64748b]">
                jessica.p@university.edu
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            <Link to="/student/dashboard">
  <div>
    <SidebarItem active icon={<LayoutDashboard size={18} />} label="Dashboard" />
  </div>
</Link>
            <Link to="/student/profile">
  <div>
    <SidebarItem icon={<User size={18} />} label="Student Profile" />
  </div>
</Link>
            <Link to="/student/opportunities">
  <div>
    <SidebarItem icon={<User size={18} />} label="opportunities" />
  </div>
</Link>
           <Link to="/student/applications">
  <div>
    <SidebarItem icon={<Briefcase size={18} />} label="Applications" />
  </div>
</Link>
            <Link to="/student/attendance">
  <div>
    <SidebarItem icon={<FileText size={18} />} label="Attendance" />
  </div>
</Link>
            
            <Link to="/student/evaluations">
  <div>
    <SidebarItem icon={<FileText size={18} />} label="Evaluations" />
  </div>
</Link>
            <Link to="/student/certificates">
  <div>
    <SidebarItem icon={<Award size={18} />} label=" Certificates" />
  </div>
</Link>
          </nav>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#e2e8f0] pt-4 space-y-1">
          <SidebarItem icon={<HelpCircle size={18} />} label="Help Center" />
          <SidebarItem icon={<LogOut size={18} />} label="Logout" />
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold">
                Welcome back, Jessica!
              </h1>
              <p className="text-sm text-[#64748b]">
                Here’s a summary of your OJT journey.
              </p>
            </div>

            <div className="flex items-center gap-5">
              <div className="relative cursor-pointer">
                <Bell className="text-[#64748b]" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#ef4444] rounded-full"></span>
              </div>
              <img
                src="https://i.pravatar.cc/40"
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>

          {/* Journey Card */}
          <div className="bg-white border border-[#e2e8f0] rounded-xl p-6 mb-8 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/3 h-40 rounded-lg bg-gradient-to-r from-[#4f46e5] to-indigo-400"></div>

              <div className="flex-1">
                <p className="text-sm text-[#64748b] font-medium">
                  OJT Journey Status
                </p>
                <h2 className="text-xl font-bold mt-1">
                  Rendering Hours at Innovate Inc.
                </h2>
                <p className="text-sm text-[#64748b] mt-1">
                  You are currently in the active OJT phase. Phase ends on:
                  Dec 15, 2024
                </p>

                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#4f46e5] h-2 rounded-full w-[67%]"></div>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-[#64748b]">Progress</span>
                    <span className="font-semibold">320 / 480 Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Stats */}
              <div>
                <h2 className="font-semibold mb-4">Progress & Tasks</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <StatCard title="Total Hours Rendered" value="320 / 480" />
                  <StatCard title="Pending Applications" value="2" />
                </div>
              </div>

              {/* Applications */}
              <div>
                <div className="flex justify-between mb-4">
                  <h2 className="font-semibold">Application Status</h2>
                  <span className="text-[#4f46e5] text-sm font-medium cursor-pointer">
                    View All
                  </span>
                </div>

                <div className="bg-white border border-[#e2e8f0] rounded-xl divide-y">
                  <ApplicationItem
                    company="Innovate Inc."
                    role="Software Engineer Intern"
                    status="Approved"
                    color="text-[#22c55e] bg-green-100"
                  />
                  <ApplicationItem
                    company="Data Solutions LLC"
                    role="Data Analyst Intern"
                    status="Pending"
                    color="text-[#f59e0b] bg-yellow-100"
                  />
                  <ApplicationItem
                    company="Creative Minds Agency"
                    role="UI/UX Design Intern"
                    status="Rejected"
                    color="text-[#ef4444] bg-red-100"
                  />
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-8">
              
              {/* Deadlines */}
              <div>
                <h2 className="font-semibold mb-4">Upcoming Deadlines</h2>
                <div className="bg-white border border-[#e2e8f0] rounded-xl p-6 space-y-4">
                  <DeadlineItem icon={<FileEdit size={18} />} title="Weekly Report Due" date="Nov 24, 2024" />
                  <DeadlineItem icon={<ClipboardCheck size={18} />} title="Mid-term Evaluation" date="Dec 01, 2024" />
                  <DeadlineItem icon={<CheckSquare size={18} />} title="Final Project Submission" date="Dec 10, 2024" />
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h2 className="font-semibold mb-4">Quick Links</h2>
                <div className="bg-white border border-[#e2e8f0] rounded-xl p-4 grid grid-cols-2 gap-3">
                  <QuickLink icon={<FileEdit />} label="Log Daily Report" />
                  <QuickLink icon={<Building2 />} label="View Company" />
                  <QuickLink icon={<MessageCircle />} label="Contact Coordinator" />
                  <QuickLink icon={<History />} label="View History" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

const SidebarItem = ({ icon, label, active }) => (
  <div
    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium cursor-pointer transition ${
      active
        ? "bg-[#eef2ff] text-[#4f46e5]"
        : "text-[#475569] hover:bg-gray-100"
    }`}
  >
    {icon}
    {label}
  </div>
);

const StatCard = ({ title, value }) => (
  <div className="bg-white border border-[#e2e8f0] rounded-xl p-6 shadow-sm">
    <p className="text-sm text-[#64748b]">{title}</p>
    <h3 className="text-2xl font-bold mt-1">{value}</h3>
  </div>
);

const ApplicationItem = ({ company, role, status, color }) => (
  <div className="flex justify-between items-center p-4">
    <div>
      <p className="font-semibold">{company}</p>
      <p className="text-sm text-[#64748b]">{role}</p>
    </div>
    <span className={`text-xs px-3 py-1 rounded-full font-medium ${color}`}>
      {status}
    </span>
  </div>
);

const DeadlineItem = ({ icon, title, date }) => (
  <div className="flex items-center gap-3">
    <div className="bg-[#eef2ff] p-2 rounded-lg text-[#4f46e5]">
      {icon}
    </div>
    <div>
      <p className="font-medium">{title}</p>
      <p className="text-sm text-[#64748b]">Due: {date}</p>
    </div>
  </div>
);

const QuickLink = ({ icon, label }) => (
  <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg hover:bg-gray-100 cursor-pointer transition">
    <div className="text-[#4f46e5]">{icon}</div>
    <p className="text-xs font-medium text-center">{label}</p>
  </div>
);