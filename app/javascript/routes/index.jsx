import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClosetsIndex from "../components/ClosetsIndex";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<ClosetsIndex />} />
      <Route path="/closets" element={<ClosetsIndex />} />
    </Routes>
  </Router>
);