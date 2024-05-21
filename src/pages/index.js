import ChoosePirateSim from "@/components/home/ChoosePirateSim";
import CountrySection from "@/components/home/CountrySection";
import SimpleSteps from "@/components/home/SimpleSteps";
import Testimonials from "@/components/home/Testimonials";
import HomePageLayout from "@/components/layouts/HomePageLayout";

export default function Home() {
  return (
    <div className="bg-[#0A0601]">
      <CountrySection />
      <ChoosePirateSim />
      <SimpleSteps />
      <Testimonials />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>;
};
