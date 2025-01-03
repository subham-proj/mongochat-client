import React, { useState, useEffect, useRef } from "react";
import { Layout, Input, Button, List, Divider } from "antd";
import { SendOutlined } from "@ant-design/icons";

const { Content } = Layout;

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const messageListRef = useRef(null);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: newMessage }]);
      setNewMessage("");
    }
  };

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Layout className="chat-window-layout">
      <Content>
        <div className="chat-container">
          {/* Message List */}
          <div ref={messageListRef} className="message-list">
            <List
              dataSource={messages}
              renderItem={(message) => (
                <List.Item className="list-item">
                  <div className="message-box">
                    <div className="message-content">{message.text}</div>
                  </div>
                </List.Item>
              )}
            />
          </div>

          <Divider />
          {/* Message Input */}
          <div className="input-container">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onPressEnter={handleSendMessage}
              placeholder="Ask your query..."
              className="input-field"
            />
            <Button
              type="primary"
              icon={<SendOutlined />}
              onClick={handleSendMessage}
              className="send-button"
            />
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default ChatWindow;
