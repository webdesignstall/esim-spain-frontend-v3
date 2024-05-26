import React from "react";
import CheckoutLayout from "../../../components/layouts/CheckoutLayout";
import CheckoutPage from "../../../components/checkout";

const Checkout = () => {
  return (
    <div className="bg-black pb-36">
      <CheckoutPage />
    </div>
  );
};

export default Checkout;

Checkout.getLayout = function (page) {
  return <CheckoutLayout>{page}</CheckoutLayout>;
};
