import { ArrowUpRight } from "lucide-react";
import { ShimmerLoader } from "../../components/Loader";
import NotFoundMessage from "../../components/NotFoundMessage";
import { useGetExperienceDetailQuery } from "../../endpoints/Experience/experienceEndpoint";
import { useParams } from "react-router-dom";

const ExperienceDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetExperienceDetailQuery(id);

  if (isError) return <NotFoundMessage message="Experience NOT FOUND" />;
  if (isLoading) {
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mt-10">
        {[...Array(6)].map((_, index) => (
          <ShimmerLoader key={index} />
        ))}
      </div>
    );
  }

  const exp = data?.experience;
  if (!exp) return <NotFoundMessage message="No experience data available." />;

  return (
    <section className="min-h-screen text-white py-20 px-4 md:px-10 font-poppins">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Heading */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold">{exp.position}</h1>
          <p className="text-gray-400 text-lg">
            {exp.companyName} — {exp.employmentType}
          </p>
        </div>

        {/* Duration & Website */}
        <div className="text-gray-400 space-y-1">
          <p>
            <strong>Duration:</strong>{" "}
            {new Date(exp.startDate).toLocaleDateString("en-IN", {
              month: "short",
              year: "numeric",
            })}{" "}
            -{" "}
            {exp.currentlyWorking
              ? "Present"
              : new Date(exp.endDate).toLocaleDateString("en-IN", {
                  month: "short",
                  year: "numeric",
                })}
          </p>
          {exp.website && (
            <p className="flex items-center gap-1">
              <strong>Website:</strong>{" "}
              <a
                href={exp.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:underline inline-flex items-center gap-1"
              >
                Visit <ArrowUpRight size={16} />
              </a>
            </p>
          )}
        </div>

        {/* Description */}
        <div>
          <h2 className="text-xl font-semibold mb-2 text-red-400">
            Description
          </h2>

          {exp?.description?.split(".")?.map((ch) => (
            <li key={ch}>{ch}</li>
          ))}
        </div>

        {/* Tech Stack */}
        {exp.techStack?.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-2 text-red-400">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3 text-sm text-gray-200">
              {exp.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-[#1a1a1a] border border-red-600 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Achievements */}
        {exp.achievements?.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-2 text-red-400">
              Achievements
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {exp.achievements.map((ach, index) => (
                <li key={index}>{ach}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceDetails;
