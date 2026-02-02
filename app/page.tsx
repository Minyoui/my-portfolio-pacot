import Button from "@/component/Buttons/page";
import Header from "@/sections/Header/page";
import FixedLinks from "@/component/SocialLinks/page";

// Sections
import About from "@/sections/About/page";
import Experience from "@/sections/Experience/page";
import TechStack from "@/sections/TechStack/page";

export default function Home() {
  return (
    <main className="space-y-5">
      <FixedLinks />
      <Header className="font-inter mx-auto max-w-5xl"/>
      <section 
        className="mx-auto max-w-5xl grid grid-cols-3 gap-5"
      >
        <About className="col-span-2"/>
        <Experience className="row-span-2"/>
        <TechStack className="col-span-2"/>
      </section>
    </main>
  );
}
