import { Form, Input } from "antd";
import styles from "./checkout.module.css";

const CheckoutForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="w-full lg:p-6 lg:bg-[#454545] lg:border text-white rounded-lg">
      <h3 className="lg:text-3xl text-xl lg:text-start text-center mb-6 font-bold">
        Billing Details
      </h3>
      <Form
        name="checkout"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
          className="mb-10"
        >
          <Input
            className={`${styles.input} bg-[#717171] text-white text-xl focus:text-black hover:text-black outline-none border-0 lg:px-3 lg:py-4 p-2`}
            placeholder="Name*"
          />
        </Form.Item>
        <Form.Item
          name="nickname"
          rules={[{ required: true, message: "Please input your nickname!" }]}
          className="mb-10"
        >
          <Input
            className={`${styles.input} bg-[#717171] text-white text-xl focus:text-black hover:text-black outline-none border-0 lg:px-3 lg:py-4 p-2`}
            placeholder="Nick Name*"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
          className="mb-10"
        >
          <Input
            className={`${styles.input} bg-[#717171] text-white text-xl focus:text-black hover:text-black outline-none border-0 lg:px-3 lg:py-4 p-2`}
            placeholder="Email*"
          />
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
          className="mb-10"
        >
          <Input
            className={`${styles.input} bg-[#717171] text-white text-xl focus:text-black hover:text-black outline-none border-0 lg:px-3 lg:py-4 p-2`}
            placeholder="Phone No."
          />
        </Form.Item>
        <Form.Item
          name="country"
          rules={[{ required: true, message: "Please input your country!" }]}
          className="mb-10"
        >
          <Input
            className={`${styles.input} bg-[#717171] text-white text-xl focus:text-black hover:text-black outline-none border-0 lg:px-3 lg:py-4 p-2`}
            placeholder="Country:"
          />
        </Form.Item>
        <Form.Item
          name="address"
          rules={[{ required: true, message: "Please input your address!" }]}
          className="mb-10"
        >
          <Input
            className={`${styles.input} bg-[#717171] text-white text-xl focus:text-black hover:text-black outline-none border-0 lg:px-3 lg:py-4 p-2`}
            placeholder="Address:"
          />
        </Form.Item>
        <Form.Item
          name="zipcode"
          rules={[{ required: true, message: "Please input your zip code!" }]}
          className="mb-10"
        >
          <Input
            className={`${styles.input} bg-[#717171] text-white text-xl focus:text-black hover:text-black outline-none border-0 lg:px-3 lg:py-4 p-2`}
            placeholder="Zip Code:"
          />
        </Form.Item>
        <Form.Item
          name="note"
          rules={[{ required: true, message: "Please input your order note!" }]}
          className="mb-10"
        >
          <Input.TextArea
            className={`${styles.input} bg-[#717171] text-white text-xl focus:text-black hover:text-black outline-none border-0 lg:px-3 lg:py-4 p-2`}
            placeholder="Note of order:"
          />
        </Form.Item>
        <Form.Item className="lg:w-1/2 w-full mx-auto">
          <button className="border-2 border-[#FFFFFF] rounded-full w-full font-medium text-center lg:py-5 py-3 text-white">
            Continue Shopping
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CheckoutForm;
