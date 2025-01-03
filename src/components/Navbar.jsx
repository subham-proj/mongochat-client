import React from "react";
import { Badge, Button, Tooltip } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="brand-logo">MongoChat</div>

      <div className="navbar-right">
        <Badge status="success" />
        <span style={{ marginLeft: "8px" }}>MongoDB Connected</span>
        <span style={{ marginLeft: "20px" }}>
          <Tooltip title="Disconnect" key="disconnect-btn">
            <Button type="primary" danger icon={<PoweroffOutlined />}></Button>
          </Tooltip>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
