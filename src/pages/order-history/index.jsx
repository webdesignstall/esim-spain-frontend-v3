import dynamic from "next/dynamic";
const OrderHistoryLayout = dynamic(
  import("../../components/layouts/OrderHistoryLayout"),
  { ssr: false }
);
const OrderHistoryPage = dynamic(import("../../components/order-history"), {
  ssr: false,
});

const OrderHistory = () => {
  return (
    <div>
      <OrderHistoryPage />
    </div>
  );
};

export default OrderHistory;

OrderHistory.getLayout = function (page) {
  return <OrderHistoryLayout>{page}</OrderHistoryLayout>;
};
