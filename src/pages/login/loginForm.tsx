import "react";
import { Button, Checkbox, Form, Input } from "antd";
import { login } from "./service";
import { useNavigate } from "react-router-dom";
import { globalStore } from "@/stores/index";

export default () => {
  const naviagte = useNavigate();
  const onFinish = (values: any) => {
    console.log("Success:", values);
    const { name, password } = values;
    login({
      name,
      password,
    }).then((res) => {
      const { token } = res.data;
      globalStore.setToken(token);
      
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{paddingTop: 20, paddingBottom:40}}
    >
      <Form.Item
        label="User Name"
        name="name"
        rules={[{ required: true, message: "please input！" }]}
      >
        <Input placeholder={"name is admin/usr"} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "please input" }]}
      >
        <Input placeholder={"password is 123456"} />
      </Form.Item>

        <Button type="primary" htmlType="submit" style={{width:'100%', height:40}}>
          Login
        </Button>
    </Form>
  );
};
