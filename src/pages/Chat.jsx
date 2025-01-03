import React from "react";
import Navbar from "../components/Navbar";
import ChatWindow from "../components/ChatWindow";
import data from "../../dummyData.json";
import emptyData from "../../emptyData.json";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
          <div className="json-container">
            <SyntaxHighlighter language="json" style={solarizedDark}>
              {JSON.stringify(data, null, 2)}{" "}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </>
  );
}
