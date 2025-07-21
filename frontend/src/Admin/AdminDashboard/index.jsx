import { FileText, Award, Briefcase, Users, BarChart2 } from "lucide-react";
import { useGetAllSkillsQuery } from "../../endpoints/skills/skillsEndpoint";
import { useGetAllExperienceQuery } from "../../endpoints/Experience/experienceEndpoint";
import SectionHeading from "../../components/Heading";

const AdminDashboard = () => {
  const { data: skills = [] } = useGetAllSkillsQuery();
  const { data: experience = 0 } = useGetAllExperienceQuery();
  const stats = [
    { title: "Total Blogs", count: 12, icon: FileText },
    { title: "Skills Listed", count: skills?.length || 0, icon: Award },
    { title: "Experiences", count: experience?.count, icon: Briefcase },
    { title: "Users Registered", count: 27, icon: Users },
  ];
  return (
    <section className="p-4 text-white  px-6 font-poppins relative overflow-hidden">
    <SectionHeading>Admin Dashboard</SectionHeading>
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

      <div className="mt-16 max-w-4xl mx-auto text-center relative z-10">
        <BarChart2 className="mx-auto mb-4 text-red-400" size={48} />
        <p className="text-gray-500">Analytics coming soon...📊</p>
      </div>
    </section>
  );
};

export default AdminDashboard;
