import projects from "./../components/projects"
const Projects = () => {
  return (
    <section id="projects" className="h-screen bg-black text-white">
      <div className="flex justify-center ">
        <h1 className="text-3xl font-extrabold text-purple-500">
          Projects Done So Far
        </h1>
      </div>

      <div className="min-h-screen bg-black p-8">
        <div className="grid grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-black border border-purple-500 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-semibold mt-4 text-white">
                {project.title}
              </h2>
              <p className="text-gray-400 mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;