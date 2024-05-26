import CountryList from "@/components/countries";
import ChoosePirateSim from "@/components/home/ChoosePirateSim";
import SimpleSteps from "@/components/home/SimpleSteps";
import Testimonials from "@/components/home/Testimonials";
import CountriesLayout from "@/components/layouts/CountriesLayout";
import MetaDataApi from "../../apis/meta-data/MetaDataApi";

const Countries = ({ countries }) => {
  return (
    <div>
      <div className="bg-[#0A0601]">
        <CountryList countries={countries} />
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

export async function getServerSideProps() {
  try {
    const data = await MetaDataApi.listCountry();
    const countryList = data?.data?.data ?? [];
    return { props: { countries: countryList } };
  } catch (error) {
    console.log(error);
  }
}
