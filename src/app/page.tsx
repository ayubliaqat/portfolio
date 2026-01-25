// app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Portfolio";
import Contact from "@/components/Contact";

export const revalidate = 0; // Ensures fresh content for your custom CMS logic

// REFINED PRO SEO METADATA
export const metadata = {
  title: "Ayub Liaqat | Full Stack Next.js Engineer",
  description:
    "Specializing in high-performance Next.js architectures, custom CMS engines, and native server-side logic. Expertise in MongoDB, TypeScript, and C# Game Development.",
  keywords:
    "Ayub Liaqat, Next.js Developer, Full Stack Engineer, MongoDB, TypeScript, Custom CMS, Game Development Tkxel, Portfolio",
  authors: [{ name: "Ayub Liaqat" }],
  alternates: {
    canonical: "https://ayubliaqat.vercel.app", // Use your actual domain
  },
  openGraph: {
    title: "Ayub Liaqat | Full Stack Next.js Engineer",
    description: "Building zero-dependency, high-performance web applications from the ground up.",
    url: "https://ayubliaqat.vercel.app",
    siteName: "Ayub Liaqat Portfolio",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Ayub Liaqat Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayub Liaqat | Full Stack Engineer",
    description: "Next.js Architect & Custom Engine Developer.",
    images: ["/og-image.png"],
  },
};

export default function HomePage() {
  return (
    <main
      className="min-h-screen flex flex-col font-sans text-gray-900 bg-white"
      role="main"
    >
      {/* PRO TIP: The Hero is part of the 'article' of your life. 
          Use section for better SEO indexing.
      */}
      <section id="home" aria-label="Introduction">
        <Hero />
      </section>

      <section id="about" className="scroll-mt-20" aria-label="About Ayub Liaqat">
        <About />
      </section>

      <section id="skills" className="scroll-mt-20" aria-label="Technical Skills">
        <Skills />
      </section>

      <section id="expertise" className="scroll-mt-20" aria-label="Professional Expertise">
        <Expertise />
      </section>

      <section id="projects" className="scroll-mt-20" aria-label="Portfolio Projects">
        <Projects />
      </section>

      <section id="contact" className="scroll-mt-20 bg-gray-50" aria-label="Contact Information">
        <Contact />
      </section>

      {/* PRO FOOTER: Separate from Contact for better structure */}
      <footer className="py-10 border-t border-gray-100 bg-white text-center">
        <p className="text-sm text-gray-400 font-medium">
          © {new Date().getFullYear()} Ayub Liaqat. Built with **Next.js 15** & Native Logic.
        </p>
      </footer>
    </main>
  );
}