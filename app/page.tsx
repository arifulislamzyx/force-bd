import ContactPage from "@/sections/contact/contact";
import HeroSection from "@/sections/home/hero";
import ServicesSection from "@/sections/home/service";
import TeamPage from "@/sections/home/team-member";
import WhyChooseUs from "@/sections/home/why-choose-us";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <ServicesSection></ServicesSection>
      <WhyChooseUs></WhyChooseUs>
      <TeamPage></TeamPage>
      <ContactPage></ContactPage>
    </>
  );
}
