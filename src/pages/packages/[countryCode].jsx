import ChoosePirateSim from "@/components/home/ChoosePirateSim";
import SimpleSteps from "@/components/home/SimpleSteps";
import Testimonials from "@/components/home/Testimonials";
import PackageLayout from "@/components/layouts/PackageLayout";
import PackageList from "@/components/packages";
import BundleApi from "../../apis/bundle/BundleApi";
import MetaDataApi from "../../apis/meta-data/MetaDataApi";

const Packages = ({ bundles, countryCode }) => {
  return (
    <div>
      <div className="bg-[#0A0601]">
        <PackageList bundles={bundles} countryCode={countryCode} />
        <ChoosePirateSim />
        <SimpleSteps />
        <Testimonials />
      </div>
    </div>
  );
};

export default Packages;

Packages.getLayout = function getLayout(page) {
  return <PackageLayout>{page}</PackageLayout>;
};

// export async function getStaticPaths() {
//   const data = await MetaDataApi.listCountry();
//   const countryList = data?.data?.data ?? [];
//   const paths = countryList.map((country) => {
//     const path = { params: { countryCode: country?.iso?.toString() } };
//     return path;
//   });

//   return {
//     paths,
//     fallback: true,
//   };
// }

export async function getServerSideProps({ params }) {
  const { countryCode } = params;
  try {
    const res = await BundleApi.listBundleFromCountry(countryCode);
    const bundles = res?.data?.data?.data ?? [];
    return { props: { bundles, countryCode } };
  } catch (error) {
    return { props: { bundles: [], countryCode } };
  }
}
