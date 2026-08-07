"use client";

import Contact from "@/components/Home/Contact";
import HomeHero from "@/components/Home/HomeHero";
import HowIWork from "@/components/Home/HowIWorks";
import TechStack from "@/components/Home/TechStack";
import WhatIDo from "@/components/Home/WhatIDo";

/**
 * HOME PAGE
 * Currently featuring the high-impact HomeHero.
 * We will append more sections (About, TechStack, Projects) here one by one.
 */
export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* SECTION 01: HERO */}
      <HomeHero/>
      <WhatIDo/>
      <HowIWork/>
      <TechStack/>
      <Contact/>
 {/**  <ExecutionProtocol/>*/}
      
      {/* Future Sections will be added below:
          <AboutSection />
          <TechMarquee />
          <ProjectGrid />
      */}
    </main>
  );
}