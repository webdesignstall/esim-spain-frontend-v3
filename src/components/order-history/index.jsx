import Sidebar from "./Sidebar";

const OrderHistoryPage = () => {
  return (
    <div>
      <div className="2xl:max-w-[70%] lg:max-w-[75%] h-full   mx-auto lg:pb-60   lg:-mt-[620px] mt-28  relative">
        <h2 className="text-6xl font-bold text-white text-center mb-20">
          Order History
        </h2>
        <div
          style={{
            zIndex: 1,
            boxShadow: "0px 5px 15px 0px rgba(0, 0, 0, 0.8)",
          }}
          className="bg-[#1F1B17] h-[1200px] xl:px-10 lg:py-10 p-5 lg:rounded-3xl flex"
        >
          <div className="w-4/12 h-full">
            <Sidebar />
          </div>
          <div className="w-8/12 h-full">
            <h2 className="text-white">Main content</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryPage;
