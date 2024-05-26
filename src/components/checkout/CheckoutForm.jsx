import React from "react";
import { Button, Form, Input } from "antd";

const CheckoutForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="w-full p-6 bg-[#454545] border text-white rounded-lg">
      <h3 className="text-3xl mb-6 font-bold">Billing Details</h3>
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
            placeholder="Name*"
            className="bg-[#717171] text-white text-xl focus:text-black hover:text-black outline-none border-0 px-3 py-4"
          />
        </Form.Item>
        <Form.Item
          name="nickname"
          rules={[{ required: true, message: "Please input your nickname!" }]}
          className="mb-10"
        >
          <Input
            placeholder="Nick Name*"
            className="bg-[#717171] text-white text-xl focus:text-black hover:text-black outline-none border-0 px-3 py-4"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
          className="mb-10"
        >
          <Input
            placeholder="Email*"
            className="bg-[#717171] text-white text-xl focus:text-black hover:text-black outline-none border-0 px-3 py-4"
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
            placeholder="Phone No."
            className="bg-[#717171] text-white text-xl focus:text-black hover:text-black outline-none border-0 px-3 py-4"
          />
        </Form.Item>
        <Form.Item
          name="country"
          rules={[{ required: true, message: "Please input your country!" }]}
          className="mb-10"
        >
          <Input
            placeholder="Country:"
            className="bg-[#717171] text-white text-xl focus:text-black hover:text-black outline-none border-0 px-3 py-4"
          />
        </Form.Item>
        <Form.Item
          name="address"
          rules={[{ required: true, message: "Please input your address!" }]}
          className="mb-10"
        >
          <Input
            placeholder="Address:"
            className="bg-[#717171] text-white text-xl focus:text-black hover:text-black outline-none border-0 px-3 py-4"
          />
        </Form.Item>
        <Form.Item
          name="zipcode"
          rules={[{ required: true, message: "Please input your zip code!" }]}
          className="mb-10"
        >
          <Input
            placeholder="Zip Code:"
            className="bg-[#717171] text-white text-xl focus:text-black hover:text-black outline-none border-0 px-3 py-4"
          />
        </Form.Item>
        <Form.Item
          name="note"
          rules={[{ required: true, message: "Please input your order note!" }]}
          className="mb-10"
        >
          <Input.TextArea
            placeholder="Note of order:"
            className="bg-[#717171] text-white text-xl focus:text-black hover:text-black outline-none border-0 px-3 py-4"
          />
        </Form.Item>
        <Form.Item className="w-1/2 mx-auto">
          <button className="border-2 border-[#FFFFFF]  rounded-full w-full font-medium  text-center py-5 text-white">
            Continue Shopping
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CheckoutForm;
