import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import bannerBgImage from "../../assets/images/bannerBgImage.png";
import { GoDotFill } from "react-icons/go";
import { TfiWorld } from "react-icons/tfi";
import { BiTransfer } from "react-icons/bi";
import { BiSolidCalendar } from "react-icons/bi";
import { IoIosPricetag } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import Image from "next/image";
import { useRef, useState } from "react";
import packageData from "@/constants/packageData";
import PackageCard from "./PackageCard";

const PackageCardSlider = ({ packageType }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  let sliderRef = useRef(null);
  const handleNextPack = () => {
    sliderRef.slickNext();
  };
  const handlePreviousPack = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {packageData.map((pack, index) => (
          <div key={index} className="mr-3 mb-10 ">
            <PackageCard pack={pack} packageType={packageType} />
            {/* <div className="text-white mb-10  w-[250px]  border-slate-500 rounded-lg bg-[#454545]">
              <div className="overflow-hidden h-[80px] relative">
                <h4 className="absolute z-50 p-4 text-2xl font-medium">
                  {packageType} Pack
                </h4>
                <Image
                  src={bannerBgImage}
                  alt="package card banner image"
                  layout="fill"
                  className="rounded-t-lg"
                  objectFit="cover"
                />
              </div>
              <div className="p-4 flex flex-col gap-4 w-[250px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TfiWorld className="text-xl" />
                    <span>Coverage</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <img
                      className="w-6 h-6 rounded-full"
                      src={pack?.flag}
                      alt="country flag"
                    />
                    <span>{pack?.country}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BiTransfer className="rotate-90 text-xl" />
                    <span>Data</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <span>{pack?.data}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BiSolidCalendar className="text-xl" />
                    <span>Validity</span>
                  </div>
                  <div className="font-medium">
                    <span>{pack?.validity}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <IoIosPricetag className="text-xl" />
                    <span>Price</span>
                  </div>
                  <div className="font-medium">
                    <span>US ${pack?.price}</span>
                  </div>
                </div>

                <div className="flex items-center flex-wrap justify-between">
                  {pack?.facilities?.map((item) => (
                    <div className="flex items-center gap-1">
                      <IoMdCheckmark className="text-[#C09D5E] font-bold" />
                      <span className="text-[#DFDFDF]">{item}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <button className="border-2 w-full rounded-full py-2">
                    Buy Now
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        ))}
      </Slider>
      <div className="flex justify-center items-center">
        {packageData.map((_, index) => (
          <GoDotFill
            className={
              index === currentSlide ? "text-[#C09D5E]" : "text-[#58534980]"
            }
          />
        ))}
      </div>
      <div className="flex justify-between items-center mb-20 -mt-10">
        <button
          className="bg-[#58534980] p-4 rounded-full text-left"
          onClick={handlePreviousPack}
        >
          <FaArrowLeft className="text-2xl text-[#C09D5E]" />
        </button>
        <button
          className="bg-[#58534980] p-4 rounded-full text-right"
          onClick={handleNextPack}
        >
          <FaArrowRight className="text-2xl text-[#C09D5E]" />
        </button>
      </div>
    </div>
  );
};

export default PackageCardSlider;
