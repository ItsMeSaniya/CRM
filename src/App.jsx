import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginPage from "./LoginPage";
import LoginRegister from "./LoginRegister";

function App() {
  const [currentPage, setCurrentPage] = useState("login");

  return (
    <Router basename="/reac-deploy/">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<LoginRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
