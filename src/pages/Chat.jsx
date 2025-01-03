import React from "react";
import Navbar from "../components/Navbar";
import ChatWindow from "../components/ChatWindow";

export default function Chat() {
  return (
    <>
      <Navbar />
      <div className="two-column-container">
        {/* Left Column */}
        <div className="left-column">
          <ChatWindow />
        </div>

        {/* Right Column */}
        <div className="right-column">
          <h2>Right Column</h2>
          <p>This is the content of the right column.</p>
        </div>
      </div>
    </>
  );
}
