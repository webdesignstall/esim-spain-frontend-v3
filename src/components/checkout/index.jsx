import { useRouter } from "next/router";
import CheckoutForm from "./CheckoutForm";
import CheckoutCart from "./CheckoutCart";
import { useEffect, useState } from "react";
import BundleApi from "../../apis/bundle/BundleApi";

const CheckoutPage = () => {
  const [loading, setLoading] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState({});
  const { query } = useRouter();

  const handleFetchBundles = async () => {
    try {
      setLoading(true);
      const res = await BundleApi.listBundleFromCountry(query?.countryCode);
      const resBundles = res?.data?.data?.data ?? [];
      const selectedBundle = resBundles?.find(
        (bundle) => bundle.name === query?.package
      );
      setSelectedPackage(selectedBundle);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchBundles();
  }, []);

  return (
    <div
      style={{
        zIndex: 1,
        boxShadow: "0px -10px 100px 0px rgba(0, 0, 0, 0.8)",
      }}
      className="2xl:max-w-[75%] lg:max-w-[85%] mx-auto xl:px-20 lg:py-10 p-5 bg-[#1F1B17] lg:-mt-96 -mt-20 lg:rounded-xl relative"
    >
      <div className="pb-32 mt-10 flex justify-between gap-10">
        <div className="w-3/5">
          <CheckoutForm pack={selectedPackage} />
        </div>
        <div className="w-2/5">
          <CheckoutCart pack={selectedPackage} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
