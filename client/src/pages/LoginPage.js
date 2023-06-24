import React from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  //form onfinishHandler
  const onfinishHandler = async (values) => {
    try {
      const res = await axios.post("/api/v1/user/login", values);
      if (res.data.success) {
        message.success("User login successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("something went wrong to login in client");
    }
  };
  return (
    <>
      <div className="form-comtainer">
        <Form typeof="virtical" onFinish={onfinishHandler}>
          <h1 className="text-center">Login Form</h1>

          <Form.Item label="Email" name={"email"}>
            <Input type="email" required placeholder="Enter your email" />
          </Form.Item>
          <Form.Item label="Password" name={"password"}>
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
