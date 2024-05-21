import React, { useContext, useEffect, useState } from "react";
import PackageFilterable from "./PackageFilterable";
import PackageCard from "../cards/PackageCard";
import Link from "next/link";
import PackageCardSlider from "../cards/PackageCardSlider";
import { convertBase64ToImgSource } from "../../common/utils/image";
import { useRouter } from "next/router";
import { CountryContext } from "../../contexts/CountryProvider";
import BundleApi from "../../apis/bundle/BundleApi";

const PackageList = () => {
  const [packageType, setPackageType] = useState("Daily");
  const { countries } = useContext(CountryContext);
  const [loading, setLoading] = useState(false);
  const [singleCountry, setSingleCountry] = useState({});
  const [packages, setPackages] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (countries && router?.query?.country) {
      const currentCountry = countries.find(
        (cnt) =>
          cnt?.name?.toLowerCase() === router?.query?.country?.toLowerCase()
      );
      if (currentCountry) {
        setSingleCountry(currentCountry);
        handleFetchBundles(currentCountry?.iso);
      } else {
        setSingleCountry({});
      }
    }
  }, [router, singleCountry]);

  const handleFetchBundles = async (countryCode) => {
    try {
      setLoading(true);
      const res = await BundleApi.listBundleFromCountry(countryCode);
      const resBundles = res?.data?.data?.data ?? [];
      setPackages(resBundles);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        zIndex: 1,
        boxShadow: "0px -10px 100px 0px rgba(0, 0, 0, 0.8)",
      }}
      className="2xl:max-w-[70%] lg:max-w-[85%]  mx-auto xl:px-20 lg:py-10 p-5 bg-[#1F1B17] lg:-mt-24 mt-28 lg:rounded-3xl relative"
    >
      <div className="flex items-center lg:gap-5 gap-3 justify-center">
        <img
          className="lg:w-16 w-10 lg:h-12 h-8 rounded-lg"
          src={convertBase64ToImgSource(singleCountry?.flag)}
          alt="country flag"
        />
        <h3 className="text-white lg:text-5xl text-3xl">
          {singleCountry?.name}
        </h3>
      </div>
      <div className="2xl:max-w-[70%]  xl:max-w-[75%] lg:max-w-[90%] w-full mx-auto my-10">
        <PackageFilterable setPackageType={setPackageType} />
      </div>
      <div className="md:block hidden">
        {loading ? (
          <h4 className="text-xl font-semibold my-10 text-white text-center">
            Packages loading...
          </h4>
        ) : (
          <>
            {packages?.length <= 0 ? (
              <h5 className="text-lg font-semibold text-white text-center my-10">
                There is no pack found for this country
              </h5>
            ) : (
              <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10 pb-10">
                {packages?.map((pkg) => (
                  <PackageCard
                    pack={pkg}
                    packageType={packageType}
                    country={singleCountry}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
      <div className="md:hidden block">
        <PackageCardSlider packageType={packageType} />
      </div>
      {packages?.length > 0 ? (
        <div className="flex justify-center items-center">
          <Link href={"/countries"}>
            <button className="bg-[#C09D5E] rounded-full font-medium mb-10 -mt-5 px-6 py-3 flex gap-2 items-center text-white">
              Explore More Packages
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <Link href={"/countries"}>
            <button className="bg-[#C09D5E] rounded-full font-medium mb-10 -mt-5 px-14 py-3 flex gap-2 items-center text-white">
              Back
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default PackageList;
