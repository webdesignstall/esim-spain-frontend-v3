import Image from "next/image";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import bannerBgImage from "../../assets/images/bannerBgImage.png";

const ProfileLayout = ({ children }) => {
  return (
    <div className="max-w-[1920px] w-full mx-auto bg-black">
      <div className="relative lg:h-[800px] h-[400px]">
        <div className="absolute top-0 left-0 right-0 lg:px-20">
          <Navbar />
          <h2 className="text-6xl font-bold text-white text-center mt-20">
            Profile
          </h2>
        </div>
        <Image
          alt="background image"
          src={bannerBgImage}
          className="w-full lg:h-[800px] h-[600px]"
        />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default ProfileLayout;
