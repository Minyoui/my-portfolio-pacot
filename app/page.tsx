import Button from "@/component/Buttons/page";
import Header from "@/sections/Header/page";
import FixedLinks from "@/component/SocialLinks/page";
import { AnimatedThemeToggler } from "@/component/ThemeToggler/page";

// Sections
import About from "@/sections/About/page";
import Experience from "@/sections/Experience/page";
import TechStack from "@/sections/TechStack/page";
import Beyond from "@/sections/Beyond/page";
import Projects from "@/sections/Projects/page";
import Misc from "@/sections/Misc/page";

export default function Home() {
  return (
    <main className="space-y-5 mb-20 px-15">
      <AnimatedThemeToggler className="fixed right-20 top-1/2 z-50 max-xl:right-5 transition-all duration-300"/>
      {/* <FixedLinks /> */}
      <Header className="font-inter mx-auto max-w-4xl"/>
      <section 
        className="mx-auto max-w-4xl grid grid-cols-3 gap-3 max-lg:flex max-lg:flex-col"
      >
        <About className="col-span-2"/>
        <Experience className="row-span-2"/>
        <TechStack className="col-span-2"/>
        <Beyond />
        <Projects className="col-span-2"/>
        <Misc className="col-span-3"/>
      </section>
      <footer className="mt-20">
        <p className="text-center font-inter text-sm">All rights reserved © Evane Pacot 2026</p>
      </footer>
    </main>
  );
}
