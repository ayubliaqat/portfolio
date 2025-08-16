// app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Portfolio";
import Achievements from "@/components/Achievments";
import Contact from "@/components/Contact";

export const revalidate = 0;

// SEO Metadata
export const metadata = {
  title: "Ayub Liaqat | Full Stack Website Developer",
  description:
    "I am Ayub Liaqat, a Full Stack Website Developer specializing in modern, SEO-friendly, and scalable web applications using Next.js, React, Node.js, and Supabase.",
  keywords:
    "Ayub Liaqat, Full Stack Developer, Web Development, Next.js, React, Node.js, Supabase, Portfolio, SEO-friendly websites",
  authors: [{ name: "Ayub Liaqat" }],
  openGraph: {
    title: "Ayub Liaqat | Full Stack Website Developer",
    description:
      "Explore my portfolio showcasing modern web development, SEO strategies, and scalable digital solutions.",
    url: "https://ayubliaqat.dev", // replace with your domain
    siteName: "Ayub Liaqat Portfolio",
    images: [
      {
        url: "/og-image.png", // Add your OpenGraph preview image
        width: 1200,
        height: 630,
        alt: "Preview of Ayub Liaqat Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayub Liaqat | Full Stack Website Developer",
    description:
      "Full Stack Web Developer — Next.js, React, Node.js, Supabase. Explore my portfolio and expertise.",
    images: ["/og-image.png"],
    creator: "@ayubliaqat", // if you have Twitter, else remove
  },
};

export default function HomePage() {
  return (
    <main
      className="min-h-screen flex flex-col font-sans text-gray-900 bg-white"
      role="main"
    >
      {/* HERO */}
      <header>
        <Hero />
      </header>

      {/* ABOUT */}
      <section id="about" aria-label="About Ayub Liaqat">
        <About />
      </section>

      {/* SKILLS */}
      <section id="skills" aria-label="Technical Skills and Technologies">
        <Skills />
      </section>

      {/* EXPERTISE */}
      <section id="expertise" aria-label="Professional Expertise">
        <Expertise />
      </section>

      {/* PROJECTS */}
      <section id="projects" aria-label="Portfolio Projects">
        <Projects />
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" aria-label="Career Achievements">
        <Achievements />
      </section>

      {/* CONTACT */}
      <footer id="contact" aria-label="Contact Ayub Liaqat">
        <Contact />
      </footer>
    </main>
  );
}
