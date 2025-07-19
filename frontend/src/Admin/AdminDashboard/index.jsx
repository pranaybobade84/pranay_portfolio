import React from "react";
import { FileText, Award, Briefcase, Users, BarChart2 } from "lucide-react";
import { useGetAllSkillsQuery } from "../../endpoints/skills/skillsEndpoint";

const AdminDashboard = () => {
  const { data: skills = [] } = useGetAllSkillsQuery();
  const stats = [
    { title: "Total Blogs", count: 12, icon: FileText },
    { title: "Skills Listed", count: skills?.length || 0, icon: Award },
    { title: "Experiences", count: 4, icon: Briefcase },
    { title: "Users Registered", count: 27, icon: Users },
  ];
  return (
    <section className="min-h-screen  text-white py-20 px-6 font-poppins relative overflow-hidden">
      {/* Header */}
      <div className="mb-12 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase inline-block relative">
          Admin Dashboard
          <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-red-600 via-red-400 to-yellow-400 rounded-full" />
        </h1>
        <p className="mt-4 text-lg text-gray-400 italic">
          Welcome back, Pranay. Keep building. Keep breaking.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative z-10">
        {stats?.map(({ title, count, icon: Icon }, i) => (
          <div
            key={i}
            className="bg-[#111] p-6 rounded-xl border border-red-500/20 shadow-md hover:shadow-red-500/30 transition"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-400 text-sm">{title}</p>
              <Icon size={24} className="text-red-500" />
            </div>
            <h3 className="text-3xl font-bold text-white">{count}</h3>
          </div>
        ))}
      </div>

      {/* Placeholder Analytics Section */}
      <div className="mt-16 max-w-4xl mx-auto text-center relative z-10">
        <BarChart2 className="mx-auto mb-4 text-red-400" size={48} />
        <p className="text-gray-500">Analytics coming soon...📊</p>
      </div>
    </section>
  );
};

export default AdminDashboard;
