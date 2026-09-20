import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SideNav } from "@/components/layout/SideNav";
import { About } from "@/components/sections/About";
import { Certifications } from "@/components/sections/Certifications";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { TechStack } from "@/components/sections/TechStack";

const mainGrid =
  "grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto pt-10 lg:pt-20 px-6 mb-16";

const stickyCol =
  "lg:sticky lg:top-20 lg:h-[calc(100vh-14rem)] flex flex-col justify-start lg:justify-between";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={mainGrid}>
        <div className={stickyCol}>
          <div className="flex flex-col lg:justify-between lg:min-h-100">
            <Hero />
            <SideNav />
          </div>
          <Contact />
        </div>
        <div className="space-y-16 pt-2">
          <About />
          <Experience />
          <TechStack />
          <Education />
          <Certifications />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
