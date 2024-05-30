import { Card, Button } from "antd";
import { IoSettingsOutline } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { RiCoupon2Fill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { useAuthProfile } from "../../store/auth/authHook";

const Sidebar = () => {
  const user = useAuthProfile();
  console.log({ user });
  return (
    <Card className="w-full h-full flex border-0 flex-col justify-between  rounded-lg bg-[#1F1B17] shadow-lg relative">
      <div className="">
        <div className="flex justify-center flex-col items-center space-x-4 mb-10">
          <h2 className="text-xl text-white font-semibold">
            {user?.firstName} {user?.lastName}
          </h2>
          <p className="text-[#D2D2D2]">Traveler</p>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 w-full">
          <Button
            type="default"
            className="flex justify-between items-center bg-[#C09D5E] border-0  text-white text-2xl rounded-2xl py-8"
          >
            <div className="flex items-center gap-3">
              <FaHistory />
              <small>Order History</small>
            </div>
            <IoIosArrowForward />
          </Button>
          <Button
            type="default"
            className="flex justify-between items-center bg-[#454545] border-0 text-white text-2xl rounded-2xl py-8"
          >
            <div className="flex items-center gap-3">
              <IoSettingsOutline />
              <small>Setting</small>
            </div>
            <IoIosArrowForward />
          </Button>
          <Button
            type="default"
            className="flex items-center justify-between  bg-[#454545] border-0 text-white text-2xl rounded-2xl py-8"
          >
            <div className="flex items-center gap-3">
              <RiCoupon2Fill />
              <small>Promos</small>
            </div>
            <IoIosArrowForward />
          </Button>
        </div>
      </div>
      <div className="w-full absolute bottom-0 left-0">
        <Button
          type="default"
          className="flex w-full items-center justify-center bg-[#1F1B17] border border-[#C09D5E] text-[#C09D5E] text-2xl rounded-full  py-8"
        >
          Sign Out
        </Button>
      </div>
    </Card>
  );
};

export default Sidebar;
