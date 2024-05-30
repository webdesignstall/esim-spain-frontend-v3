import ChoosePirateSim from "@/components/home/ChoosePirateSim";
import CountrySection from "@/components/home/CountrySection";
import SimpleSteps from "@/components/home/SimpleSteps";
import Testimonials from "@/components/home/Testimonials";
import HomePageLayout from "@/components/layouts/HomePageLayout";
import MetaDataApi from "../apis/meta-data/MetaDataApi";
import { popularCountryCodes } from "../constants/popularCountryList";

export default function Home({ countries }) {
  return (
    <div className="bg-[#0A0601]">
      <CountrySection countries={countries} />
      <ChoosePirateSim />
      <SimpleSteps />
      <Testimonials />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>;
};

export async function getStaticProps() {
  try {
    const data = await MetaDataApi.listCountry();
    const countryList = data?.data?.data ?? [];
    const popularCountries = countryList?.filter((country) =>
      popularCountryCodes?.includes(country?.iso)
    );
    const commonCountries = countryList?.filter(
      (country) => !popularCountryCodes?.includes(country?.iso)
    );
    return {
      props: {
        countries: popularCountries?.concat(commonCountries?.slice(0, 4)),
      },
    };
  } catch (error) {
    console.log(error);
    return { props: { countries: [] } };
  }
}
