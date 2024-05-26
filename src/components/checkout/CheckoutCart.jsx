import { Card, Radio, Typography } from "antd";
import creditCard from "../../assets/payment/creditCardsImage.png";
import paypal from "../../assets/payment/paypalLogo.png";
import Image from "next/image";
import styles from "./checkout.module.css";
const { Title, Paragraph } = Typography;

const CheckoutCart = ({ pack }) => {
  return (
    <div className="rounded-lg">
      <Title
        level={2}
        className="mb-4 -mt-2 lg:text-start text-center"
        style={{ color: "white" }}
      >
        Your Order
      </Title>
      <Paragraph className="text-[#BDBAC1] lg:text-xl lg:leading-9 lg:text-start text-center">
        We all know how hard it can be to make sure each look is like the demo.
        To make your start into the world of easy as possible, we have included
        the demo.
      </Paragraph>
      <Card
        className={`${styles.header}  mb-6 mt-10`}
        title={
          <div className="bg-[#737373] text-white text-center text-2xl">
            Cart Total
          </div>
        }
        bodyStyle={{
          backgroundColor: "#454545",
          padding: "0px",
        }}
      >
        <div className="px-4 py-2 text-lg">
          <div className="flex justify-between mb-4 text-white">
            <span>Subtotal:</span>
            <span>${pack?.salePrice}</span>
          </div>
          <div className="flex justify-between mb-4 text-white">
            <span>Discount:</span>
            <span>${pack?.discount || 0}</span>
          </div>
        </div>
        <hr className="text-[#FFFFFF5E]" />
        <div className="flex justify-between font-bold text-lg text-white px-4 py-4">
          <span>Total:</span>
          <span className="text-[#C09D5E]">${pack?.salePrice}</span>
        </div>
      </Card>
      <Card
        className={`${styles.header}  mb-6`}
        title={
          <div className="bg-[#737373] text-white text-center text-2xl">
            Payment Method
          </div>
        }
        bodyStyle={{
          backgroundColor: "#454545",
        }}
      >
        <Radio.Group className="flex flex-col space-y-6 text-white">
          <div className="flex items-center justify-between">
            <Radio value="creditCard" className="text-white">
              Credit Card
            </Radio>
            <Image className="w-1/2" src={creditCard} alt="credit cards logo" />
          </div>
          <div className="flex items-center justify-between">
            <Radio value="paypal" className="text-white">
              Paypal
            </Radio>
            <Image className="h-10 w-1/2" src={paypal} alt="paypal logo" />
          </div>
        </Radio.Group>
      </Card>
      <button className="bg-[#C09D5E] rounded-full font-medium w-full lg:py-5 py-3 text-white">
        Checkout
      </button>
    </div>
  );
};

export default CheckoutCart;
