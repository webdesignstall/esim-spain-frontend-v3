import CountryList from "@/components/countries";
import ChoosePirateSim from "@/components/home/ChoosePirateSim";
import SimpleSteps from "@/components/home/SimpleSteps";
import Testimonials from "@/components/home/Testimonials";
import CountriesLayout from "@/components/layouts/CountriesLayout";
import MetaDataApi from "../../apis/meta-data/MetaDataApi";
import { popularCountryCodes } from "../../constants/popularCountryList";

const Countries = ({ popularCountries, allCountries }) => {
  return (
    <div>
      <div className="bg-[#0A0601]">
        <CountryList
          popularCountries={popularCountries}
          allCountries={allCountries}
        />
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

export async function getStaticProps() {
  try {
    const data = await MetaDataApi.listCountry();
    const countryList = data?.data?.data ?? [];
    const popularCountries = countryList?.filter((country) =>
      popularCountryCodes?.includes(country?.iso)
    );
    return { props: { popularCountries, allCountries: countryList } };
  } catch (error) {
    console.log(error);
    return { props: { countries: [] } };
  }
}
