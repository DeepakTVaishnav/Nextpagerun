import React from "react";
import "./style.css";
import Login from './component/Login';
import Content from './component/Content';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/content" element={<Content />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
