import projects from "@/data/projects";
import Link from "next/link";
export default function ProjectPreview() {
  return (
    <section className="px-8 py-20 max-w-5xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <a href="/projects" className="text-indigo-400">
          View all →
        </a>
      </div>

      <div className="mt-8 space-y-6">
        {projects.slice(0, 2).map((p, i) => (
          <div key={i} className="border border-gray-800 p-6 rounded-xl">
            <h3 className="font-medium">{p.title}</h3>
            <p className="text-gray-400 mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
      <Link href="/projects/secure-chat">
  <div className="p-6 border border-white/10 rounded-lg hover:scale-[1.02] transition cursor-pointer">
    <h3 className="text-lg font-semibold">
      Secure Messaging System
    </h3>

    <p className="text-[var(--muted)] mt-2">
      Encrypted real-time communication between users.
    </p>
  </div>
</Link>
    </section>
  );
}
