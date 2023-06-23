import React from "react";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";

const LoginPage = () => {
  //form onfinishHandler
  const onfinishHandler = (values) => {
    console.log(values);
  };
  return (
    <>
      <div className="form-comtainer">
        <Form typeof="virtical" onFinish={onfinishHandler}>
          <h1 className="text-center">Login Form</h1>

          <Form.Item label="Email" name={"email"}>
            <Input type="email" required placeholder="Enter your email" />
          </Form.Item>
          <Form.Item label="Password" name={"Password"}>
            <Input type="password" required placeholder="Enter your password" />
          </Form.Item>
          <Link to={"/register"}>Not a User Register Here</Link>
          <br />
          <br />
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;
