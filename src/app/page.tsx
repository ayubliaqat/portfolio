// Force SSR (no caching)
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Portfolio";
import Achievements from "@/components/Achievments";
import Contact from "@/components/Contact";
export const revalidate = 0;
export default async function HomePage() {
  return (
    <>
      <main className="min-h-screen flex flex-col font-sans text-gray-900" role="main">
        {/* Future sections: Hero, About, Projects, Contact */}
        <Hero/>
        <About/>
        <Skills/>
        <Expertise/>
        <Projects/>
        <Achievements/>
        <Contact/>
      </main>
    </>
  );
}
