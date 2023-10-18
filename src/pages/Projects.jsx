import projects from "./../components/projects"
const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white">
      <div className="flex justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-purple-500 mt-5">
          Projects Done So Far
        </h1>
      </div>

      <div className="p-4 sm:p-6 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-black border border-purple-500 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-36 sm:h-40 md:h-48 lg:h-48 object-cover rounded-t-lg"
              />
              <h2 className="text-xl sm:text-2xl md:text-lg lg:text-xl font-semibold mt-4 text-white">
                {project.title}
              </h2>
              <p className="text-gray-400 text-sm sm:text-base mt-2">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;