import Image from "next/image";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import bannerBgImage from "../../assets/images/bannerBgImageRectangle.png";

const OrderHistoryLayout = ({ children }) => {
  return (
    <div className="max-w-[1920px] w-full mx-auto bg-black">
      <div className="relative lg:h-[800px] h-[400px]">
        <div className="absolute top-0 left-0 right-0 lg:px-20">
          <Navbar />
        </div>
        <Image
          alt="background image"
          src={bannerBgImage}
          className="w-full lg:h-[700px] h-[600px]"
        />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default OrderHistoryLayout;
