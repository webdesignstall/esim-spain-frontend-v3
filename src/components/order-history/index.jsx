import { Card, Button } from "antd";
import { IoSettingsOutline } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { RiCoupon2Fill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { useAuthProfile } from "../../store/auth/authHook";

const OrderHistoryPage = () => {
  const user = useAuthProfile();
  console.log({ user });
  return (
    <div>
      <div className="2xl:max-w-[70%] lg:max-w-[75%]   mx-auto lg:pb-60   lg:-mt-[620px] mt-28  relative">
        <h2 className="text-6xl font-bold text-white text-center mb-20">
          Profile
        </h2>
        <div
          style={{
            zIndex: 1,
            boxShadow: "0px 5px 15px 0px rgba(0, 0, 0, 0.8)",
          }}
          className="bg-[#1F1B17] flex xl:px-10 lg:py-10 p-5 lg:rounded-3xl flex-col items-center justify-center"
        >
          <Card className="w-full rounded-lg bg-[#1F1B17] border-0 shadow-lg">
            <div className="flex items-center space-x-4 mb-10">
              <img
                src={user?.avatar}
                alt="Profile Picture"
                className="w-24 h-24 rounded-full ring-1"
              />
              <div>
                <h2 className="text-xl text-white font-semibold">
                  {user?.firstName} {user?.lastName}
                </h2>
                <p className="text-[#D2D2D2]">Traveler</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 ">
              <Button
                type="default"
                className="flex justify-between items-center bg-[#454545] border-0  text-white text-2xl rounded-2xl py-8 "
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
              <div className="lg:hidden block w-full">
                <Button
                  type="default"
                  className="flex w-full items-center justify-center bg-[#1F1B17] border border-[#C09D5E] text-[#C09D5E] text-2xl rounded-full  py-8"
                >
                  Sign Out
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryPage;
