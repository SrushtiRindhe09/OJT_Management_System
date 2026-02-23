import React from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarDays,
  FileText,
  Building2,
  User,
  Settings,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Plus,
  LogIn,
} from "lucide-react";

export default function StudentAttendance() {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC] text-[#020817] font-sans">

      {/* ================= SIDEBAR ================= */}
      <aside className="sticky top-0 h-screen w-64 flex-shrink-0 bg-white border-r border-[#E2E8F0]">
        <div className="flex h-full flex-col justify-between p-4">

          <div className="flex flex-col gap-4">

            {/* Profile */}
            <div className="flex items-center gap-3 p-2">
              <img
                src="https://i.pravatar.cc/100"
                alt="profile"
                className="size-10 rounded-full object-cover"
              />
              <div>
                <h1 className="text-sm font-semibold leading-none">
                  Alex Doe
                </h1>
                <p className="text-sm text-[#64748B] mt-1 leading-none">
                  alex.doe@university.edu
                </p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-1 mt-4 text-sm">

              <NavItem to="/student/dashboard" icon={<LayoutDashboard size={18} />} label="Dashboard" />

              <NavItemActive icon={<CalendarDays size={18} />} label="Attendance" />

              <NavItem to="/student/reports" icon={<FileText size={18} />} label="Reports" />

              <NavItem to="/student/company" icon={<Building2 size={18} />} label="Company" />

              <NavItem to="/student/profile" icon={<User size={18} />} label="Profile" />

            </nav>
          </div>

          {/* Bottom */}
          <div className="flex flex-col gap-1 text-sm">

            <NavItem icon={<Settings size={18} />} label="Settings" />
            <NavItem icon={<HelpCircle size={18} />} label="Help" />

            <button className="flex items-center justify-center h-10 mt-2 rounded-md bg-[#F1F5F9] text-sm font-medium hover:bg-[#E2E8F0]">
              <LogOut size={16} className="mr-2" />
              Log Out
            </button>
          </div>

        </div>
      </aside>

      {/* ================= MAIN ================= */}
      <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">
              My Attendance
            </h1>
            <p className="text-[#64748B] mt-2">
              Track and manage your daily OJT attendance and hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* LEFT SECTION */}
            <div className="lg:col-span-1 flex flex-col gap-6">

              {/* Check-In Card */}
              <div className="rounded-lg bg-white border border-[#E2E8F0] p-6 flex flex-col gap-6">

                <div>
                  <p className="text-lg font-semibold">
                    Good Morning, Alex!
                  </p>
                  <p className="text-sm text-[#64748B] mt-1">
                    Tuesday, 24 October 2024, 09:00 AM
                  </p>
                </div>

                <div className="flex items-center justify-between p-4 rounded-md bg-[#F8FAFC]">
                  <span className="text-sm font-medium text-[#64748B]">
                    Current Session
                  </span>
                  <span className="text-lg font-semibold">
                    00:00:00
                  </span>
                </div>

                <button className="flex items-center justify-center gap-2 h-10 rounded-md bg-[#4F46E5] text-white text-sm font-medium hover:bg-[#4338CA] transition">
                  <LogIn size={16} />
                  Check-In
                </button>

              </div>

              {/* Progress Card */}
              <div className="rounded-lg bg-white border border-[#E2E8F0] p-6">
                <h3 className="text-lg font-semibold mb-6">
                  Progress
                </h3>

                <ProgressBox label="Total Hours Rendered" value="120.5" />
                <ProgressBox label="Required Hours" value="480" />
                <ProgressBox label="Remaining Hours" value="359.5" />
              </div>

            </div>

            {/* RIGHT SECTION */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              {/* Calendar */}
              <div className="rounded-lg bg-white border border-[#E2E8F0] p-6">

                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold">
                    Attendance Overview
                  </h2>

                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-md hover:bg-[#F1F5F9]">
                      <ChevronLeft size={18} />
                    </button>
                    <span className="text-sm font-medium">
                      October 2024
                    </span>
                    <button className="p-2 rounded-md hover:bg-[#F1F5F9]">
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>

                {/* Week Labels */}
                <div className="grid grid-cols-7 text-center text-xs font-medium text-[#64748B] mb-2">
                  {["SUN","MON","TUE","WED","THU","FRI","SAT"].map(day => (
                    <div key={day} className="py-2">{day}</div>
                  ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 text-sm text-center">
                  {Array.from({ length: 31 }).map((_, i) => (
                    <span
                      key={i}
                      className="flex items-center justify-center size-9 rounded-md hover:bg-[#F1F5F9]"
                    >
                      {i + 1}
                    </span>
                  ))}
                </div>

                {/* Legend */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 pt-4 border-t border-[#E2E8F0] text-sm text-[#64748B]">
                  <Legend color="bg-green-500" label="Present" />
                  <Legend color="bg-red-500" label="Absent" />
                  <Legend color="bg-yellow-500" label="On Leave" />
                  <Legend color="bg-slate-300" label="Holiday" />
                </div>

              </div>

              {/* Leave Requests */}
              <div className="rounded-lg bg-white border border-[#E2E8F0] p-6">

                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">
                    Leave Requests
                  </h2>

                  <button className="flex items-center gap-2 h-9 px-4 rounded-md bg-[#4F46E5] text-white text-sm font-medium hover:bg-[#4338CA] transition">
                    <Plus size={16} />
                    Request Leave
                  </button>
                </div>

                <div className="overflow-x-auto border border-[#E2E8F0] rounded-lg">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs uppercase bg-[#F1F5F9] text-[#64748B]">
                      <tr>
                        <th className="px-6 py-3 font-medium">Date</th>
                        <th className="px-6 py-3 font-medium">Type</th>
                        <th className="px-6 py-3 font-medium">Reason</th>
                        <th className="px-6 py-3 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E2E8F0]">

                      <LeaveRow
                        date="Oct 10, 2024"
                        type="Sick Leave"
                        reason="Fever and headache"
                        status="Approved"
                        color="green"
                      />

                      <LeaveRow
                        date="Sep 15, 2024"
                        type="Emergency"
                        reason="Family matter"
                        status="Pending"
                        color="yellow"
                      />

                      <LeaveRow
                        date="Aug 21, 2024"
                        type="Personal"
                        reason="Appointment"
                        status="Rejected"
                        color="red"
                      />

                    </tbody>
                  </table>
                </div>

              </div>

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
    className="flex items-center gap-3 px-3 py-2 rounded-md text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F172A]"
  >
    {icon}
    {label}
  </Link>
);

const NavItemActive = ({ icon, label }) => (
  <div className="flex items-center gap-3 px-3 py-2 rounded-md bg-[#4F46E5] text-white font-medium">
    {icon}
    {label}
  </div>
);

const ProgressBox = ({ label, value }) => (
  <div className="border border-[#E2E8F0] rounded-md p-4 mb-4">
    <p className="text-sm text-[#64748B]">{label}</p>
    <p className="text-2xl font-semibold mt-1">{value}</p>
  </div>
);

const Legend = ({ color, label }) => (
  <div className="flex items-center gap-2">
    <div className={`size-2.5 rounded-full ${color}`} />
    <span>{label}</span>
  </div>
);

const LeaveRow = ({ date, type, reason, status, color }) => {
  const statusColor = {
    green: "bg-green-100 text-green-600",
    yellow: "bg-yellow-100 text-amber-600",
    red: "bg-red-100 text-red-600",
  };

  return (
    <tr>
      <td className="px-6 py-4 font-medium">{date}</td>
      <td className="px-6 py-4 text-[#64748B]">{type}</td>
      <td className="px-6 py-4 text-[#64748B]">{reason}</td>
      <td className="px-6 py-4">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColor[color]}`}>
          {status}
        </span>
      </td>
    </tr>
  );
};