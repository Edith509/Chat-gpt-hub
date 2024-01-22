import React from "react";
import ChatGpt from "./components/ChatGpt";
import Base from "./components/base";
import ChatSanta from "./components/ChatSanta";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Base />} />
          <Route path="/ChatGpt" element={<ChatGpt />} />
          <Route path="/ChatSanta" element={<ChatSanta />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
