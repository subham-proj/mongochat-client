import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { Button, Form, Input, message, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_API_URL;

export default function Home() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    const { url } = values;
    setLoading(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/connect-mongodb`,
        { uri: url },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      message.success("Connected successfully!");
      localStorage.setItem("token", response.data.token);
      navigate("/chat/abc"); //TODO: need to handle dynamic chat id
    } catch (error) {
      message.error(error.response.data.message);
    }

    setLoading(false);
  };

  const handleFailed = (errorInfo) => {
    console.error("Validation Failed:", errorInfo);
  };

  return (
    <div className="center-container">
      {loading && (
        <div className="spinner-overlay">
          <Spin
            indicator={
              <LoadingOutlined
                style={{
                  fontSize: 48,
                }}
                spin
              />
            }
          />
        </div>
      )}

      <Form
        layout="vertical"
        onFinish={handleSubmit}
        onFinishFailed={handleFailed}
        autoComplete="off"
        style={{
          filter: loading ? "blur(1px)" : "none",
        }}
      >
        <Form.Item
          name="url"
          label="MongoDB connection URI"
          rules={[
            {
              required: true,
              message: "Please enter the MongoDB connection URI",
            },
          ]}
        >
          <Input placeholder="mongodb://localhost:27017/mainDB" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block disabled={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
