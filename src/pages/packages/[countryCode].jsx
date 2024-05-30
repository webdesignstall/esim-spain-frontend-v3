import ChoosePirateSim from "@/components/home/ChoosePirateSim";
import SimpleSteps from "@/components/home/SimpleSteps";
import Testimonials from "@/components/home/Testimonials";
import PackageLayout from "@/components/layouts/PackageLayout";
import PackageList from "@/components/packages";
import BundleApi from "../../apis/bundle/BundleApi";

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
