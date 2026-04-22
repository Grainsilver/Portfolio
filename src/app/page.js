import Navbar from "@/components/Navbar";
import Intro from "@/home/Intro";
import Services from "@/home/Services";
import ProjectPreview from "@/home/Overview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex justify-center">
        <div className="w-full max-w-5xl px-6">
        <Intro />
        <Services />
        <ProjectPreview />
        </div>
      </main>

      <Footer />
    </>
  );
}
