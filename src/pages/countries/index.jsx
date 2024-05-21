import CountryList from "@/components/countries";
import ChoosePirateSim from "@/components/home/ChoosePirateSim";
import SimpleSteps from "@/components/home/SimpleSteps";
import Testimonials from "@/components/home/Testimonials";
import CountriesLayout from "@/components/layouts/CountriesLayout";

const Countries = () => {
  return (
    <div>
      <div className="bg-[#0A0601]">
        <CountryList />
        <ChoosePirateSim />
        <SimpleSteps />
        <Testimonials />
      </div>
    </div>
  );
};

export default Countries;

Countries.getLayout = function getLayout(page) {
  return <CountriesLayout>{page}</CountriesLayout>;
};
