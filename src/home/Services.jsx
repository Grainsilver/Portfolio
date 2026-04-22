
const services = [
  {
    title: "Full-Stack Web Development",
    desc: "Building scalable applications with modern web technologies.",
  },
  {
    title: "Mobile Development",
    desc: "React Native apps with clean UI and performance focus.",
  },
  {
    title: "Automation & Systems",
    desc: "Automating workflows, APIs, and business processes.",
  },
  {
    title: "Lead Generation & SEO",
    desc: "Optimizing online presence and generating quality Leads.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-8 py-20 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold">Services</h2>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {services.map((s, i) => (
          <div key={i} className="card">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-gray-300 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
