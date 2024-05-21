import Image from "next/image";
import React from "react";

const PirateMobileChooseCard = ({ icon, title, subTitle, dangerousWidth }) => {
  return (
    <div className="bg-[#343230] lg:p-8 p-3 rounded-2xl h-full">
      <div className="bg-[#6d5844] w-[68px] h-[68px] rounded-full relative">
        <Image
          className="absolute bottom-0 top-6 -right-4"
          src={icon}
          alt={title}
        />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: title }}
        className={`text-2xl font-medium my-6 ${
          dangerousWidth && `w-[${dangerousWidth}]`
        }`}
      ></div>
      <p className="text-[#D2D2D2]">{subTitle}</p>
    </div>
  );
};

export default PirateMobileChooseCard;
