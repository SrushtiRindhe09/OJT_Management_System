import React from "react";
import { Link } from "react-router-dom";
import {
  School,
  LayoutDashboard,
  User,
  Building2,
  FileText,
  Settings,
  LogOut,
  Camera,
  Edit,
   Briefcase,
} from "lucide-react";

export default function StudentProfile() {
  return (
    <div className="min-h-screen flex bg-[#F8FAFC] text-[#1E293B] font-sans">
      
      {/* ================= SIDEBAR ================= */}
      <aside className="w-64 bg-white border-r border-[#E2E8F0] p-5 flex flex-col justify-between">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-[#4F46E5] p-2 rounded-lg">
              <School className="text-white w-5 h-5" />
            </div>
            <h1 className="font-bold text-lg">OJT Portal</h1>
          </div>

          {/* Profile */}
          <div className="flex items-center gap-3 mb-6">
            <img
              src="https://i.pravatar.cc/100"
              alt="student"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2 className="text-sm font-semibold">Samantha Reed</h2>
              <p className="text-xs text-[#64748B]">
                s.reed@university.edu
              </p>
            </div>
          </div>

          {/* Nav */}
          <nav className="space-y-1">
            <Link to="/student/StudentDashboard">
  <div>
    <SidebarItem icon={<LayoutDashboard size={18} />} label="StudentDashboard" />
  </div>
</Link>

<Link to="/student/StudentProfile">
  <div>
    <SidebarItem active icon={<User size={18} />} label="My Profile" />
  </div>
</Link>
            <SidebarItem icon={<Building2 size={18} />} label="Companies" />
           
           <Link to="/student/applications">
  <div>
    <SidebarItem icon={<Briefcase size={18} />} label="My Applications" />
  </div>
</Link>
          </nav>
        </div>

        <div className="border-t border-[#E2E8F0] pt-4 space-y-1">
          <SidebarItem icon={<Settings size={18} />} label="Settings" />
          <SidebarItem icon={<LogOut size={18} />} label="Logout" />
        </div>
      </aside>

      {/* ================= MAIN ================= */}
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">

          {/* Breadcrumb */}
          <div className="text-sm text-[#64748B] mb-6 flex items-center gap-2">
            <span className="hover:text-[#4F46E5] cursor-pointer">Home</span>
            <span>/</span>
            <span className="hover:text-[#4F46E5] cursor-pointer">
              Student Dashboard
            </span>
            <span>/</span>
            <span className="font-medium text-[#1E293B]">Profile</span>
          </div>

          {/* Profile Header Card */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl shadow-sm p-6 flex flex-col md:flex-row justify-between gap-6">

            <div className="flex gap-6 items-center">
              <div className="relative">
                <img
                  src="https://i.pravatar.cc/150"
                  alt="profile"
                  className="w-28 h-28 rounded-full object-cover"
                />
                <button className="absolute bottom-1 right-1 bg-[#4F46E5] text-white p-2 rounded-full hover:bg-indigo-600 transition">
                  <Camera size={16} />
                </button>
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  Samantha Reed
                </h2>
                <p className="text-[#64748B] text-sm mt-1">
                  Student ID: 2024-12345 | BS in Computer Science
                </p>

                <span className="inline-block mt-3 px-3 py-1 text-sm font-medium text-teal-700 bg-teal-100 rounded-full">
                  Seeking OJT
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 w-full md:w-auto">
              <button className="bg-[#4F46E5] text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-indigo-600 transition">
                Edit Profile
              </button>
              <button className="border border-[#CBD5E1] px-5 py-2 rounded-lg font-semibold text-sm text-[#475569] hover:bg-gray-50 transition">
                View Public Profile
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-8 border-b border-[#E2E8F0] flex gap-8 text-sm font-semibold">
            <div className="border-b-2 border-[#4F46E5] pb-3 text-[#4F46E5]">
              Personal Details
            </div>
            <div className="pb-3 text-[#64748B] hover:text-[#4F46E5] cursor-pointer">
              Resume
            </div>
            <div className="pb-3 text-[#64748B] hover:text-[#4F46E5] cursor-pointer">
              Skills
            </div>
          </div>

          {/* Details Card */}
          <div className="bg-white border border-[#E2E8F0] rounded-b-xl shadow-sm p-6">

            {/* Header */}
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">
                Personal Details
              </h3>
              <button className="flex items-center gap-2 text-[#4F46E5] font-semibold text-sm hover:text-indigo-600">
                <Edit size={16} />
                Edit
              </button>
            </div>

            {/* Grid Info */}
            <div className="mt-6 grid md:grid-cols-2 gap-x-8 gap-y-6 text-sm">
              <Detail label="First Name" value="Samantha" />
              <Detail label="Last Name" value="Reed" />
              <Detail label="Email Address" value="s.reed@university.edu" />
              <Detail label="Phone Number" value="(555) 123-4567" />
              <Detail label="University" value="State University of Technology" />
              <Detail label="Expected Graduation" value="May 2025" />
              <Detail label="GPA" value="3.8 / 4.0" />
            </div>

            {/* About */}
            <div className="mt-8 pt-6 border-t border-[#E2E8F0]">
              <h4 className="text-sm font-medium text-[#64748B] mb-2">
                About Me / Professional Summary
              </h4>
              <p className="text-[#475569] leading-relaxed">
                Highly motivated Computer Science student with a passion
                for software development and problem-solving. Seeking an
                opportunity to contribute to a dynamic team and grow
                my skills in a real-world OJT environment.
              </p>
            </div>

            {/* Footer Buttons */}
            <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex justify-end gap-3">
              <button className="border border-[#CBD5E1] px-5 py-2 rounded-lg font-semibold text-sm text-[#475569] hover:bg-gray-50">
                Cancel
              </button>
              <button className="bg-[#4F46E5] text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-indigo-600">
                Save Changes
              </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

/* ================= COMPONENTS ================= */

const SidebarItem = ({ icon, label, active }) => (
  <div
    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium cursor-pointer transition ${
      active
        ? "bg-[#EEF2FF] text-[#4F46E5]"
        : "text-[#475569] hover:bg-gray-100"
    }`}
  >
    {icon}
    {label}
  </div>
);

const Detail = ({ label, value }) => (
  <div>
    <p className="text-[#64748B] font-medium mb-1">{label}</p>
    <p className="text-[#1E293B]">{value}</p>
  </div>
);