import React from "react";
import { Form, Input } from 'antd'
import { Link } from 'react-router-dom'


const RegisterPage = () => {
  //form onfinishHandler
  const onfinishHandler = (values) => {
    console.log(values)
  }
  return (
    <>
      <div className="form-comtainer">
        <Form typeof="virtical" onFinish={onfinishHandler}>
          <h1 className="text-center">Register Form</h1>
          <Form.Item label="Name" name={"mane"}>
            <Input type="text" required placeholder="Enter your name" />
          </Form.Item>
          <Form.Item label="Email" name={"email"}>
            <Input type="email" required placeholder="Enter your email" />
          </Form.Item>
          <Form.Item label="Password" name={"Password"}>
            <Input type="password" required placeholder="Enter your password" />
          </Form.Item>
          <Link to={"/login"}>Already User Login Here</Link><br /><br />
          <button className="btn btn-primary" type="submit">Register</button>
        </Form>
      </div>
    </>
  )
};

export default RegisterPage;
