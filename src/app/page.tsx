import Hero from "@/components/Hero";
import About from "@/components/About";
import MetricsBar from "@/components/MetricsBar";
import Experience from "@/components/Experience";
import CaseStudies from "@/components/CaseStudies";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import WorkingStyle from "@/components/WorkingStyle";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <MetricsBar />
      <Experience />
      <CaseStudies />
      <Skills />
      <Education />
      <WorkingStyle />
      <Contact />
    </>
  );
}