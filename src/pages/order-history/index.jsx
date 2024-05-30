import OrderHistoryLayout from "../../components/layouts/OrderHistoryLayout";
import OrderHistoryPage from "../../components/order-history";

const OrderHistory = () => {
  return (
    <div>
      <OrderHistoryPage />
    </div>
  );
};

export default Profile;

OrderHistory.getLayout = function (page) {
  return <OrderHistoryLayout>{page}</OrderHistoryLayout>;
};
