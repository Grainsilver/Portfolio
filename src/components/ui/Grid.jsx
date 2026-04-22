import projects from "@/data/projects";

export default function ProjectsGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-10">
      {projects.map((p, i) => (
        <div key={i} className="border border-gray-800 p-6 rounded-xl">
          <h3 className="font-semibold">{p.title}</h3>
          <p className="text-gray-400 mt-2">{p.desc}</p>
          <p className="text-sm text-gray-500 mt-4">{p.tech}</p>
        </div>
      ))}
    </div>
  );
}
