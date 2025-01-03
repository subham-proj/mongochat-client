import { Route, Routes } from "react-router-dom";
import Chat from "./pages/chat";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
