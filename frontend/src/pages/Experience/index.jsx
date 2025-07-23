import { useGetAllExperienceQuery } from "../../endpoints/Experience/experienceEndpoint";
import { ShimmerLoader } from "../../components/Loader";
import NotFoundMessage from "../../components/NotFoundMessage";
import { useNavigate } from "react-router-dom";
const ExperienceSection = () => {
  const navigate = useNavigate();
  const { data = [], isLoading, isError } = useGetAllExperienceQuery();

  if (isError) return <NotFoundMessage message="Experience NOT FOUND" />;

  if (isLoading)
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mt-10">
        {[...Array(6)].map((_, index) => (
          <ShimmerLoader key={index} />
        ))}
      </div>
    );

  return (
    <section className="min-h-screen text-white py-20 px-6 font-poppins relative overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase inline-block relative">
          Experience
          <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-red-600 via-red-400 to-yellow-400 rounded-full"></span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto italic">
          From <code className="text-red-500">console.log('Hello World')</code>{" "}
          to crying over merge conflicts — what a journey.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {data?.experiences?.map((exp, i) => {
          const start = new Date(exp.startDate).toLocaleDateString("en-IN", {
            month: "short",
            year: "numeric",
          });
          const end = exp.currentlyWorking
            ? "Present"
            : new Date(exp.endDate).toLocaleDateString("en-IN", {
                month: "short",
                year: "numeric",
              });

          const displayedTechs = exp?.techStack?.slice(0, 3);
          const remaining = exp?.techStack?.length - displayedTechs?.length;

          return (
            <div
              key={i}
              className="bg-[#111] border border-red-600/30 rounded-xl shadow-md hover:shadow-red-500/30 p-5 transition-shadow"
              onClick={() => navigate(`${exp?._id}`)}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-white">
                  {exp.position}
                </h3>
              </div>

              <p className="text-sm text-gray-400 mb-1">
                {exp.companyName} — {exp.employmentType}
              </p>
              <p className="text-xs text-gray-500 mb-3">
                {start} - {end}
              </p>

              <div className="flex flex-wrap gap-2 text-xs text-gray-200">
                {displayedTechs.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-red-800/30 border border-red-600 px-2 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {remaining > 0 && (
                  <span className="text-gray-400 italic">
                    +{remaining} more
                  </span>
                )}
              </div>

              {/* Optional Read More Link */}
              {/* <Link to={`/experience/${exp._id}`} className="text-red-500 text-sm mt-3 inline-block hover:underline">
                Read More
              </Link> */}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
