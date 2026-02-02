import Button from "@/component/Buttons/page";
import Header from "@/sections/Header/page";
import FixedLinks from "@/component/SocialLinks/page";

export default function Home() {
  return (
    <main>
      <FixedLinks />
      <Header className="font-inter mx-auto max-w-5xl"/>
    </main>
  );
}
