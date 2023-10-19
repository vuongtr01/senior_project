import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClosetsIndex from "../components/ClosetsIndex";
import SignIn from "../components/authentication/SignIn";
import SignUp from "../components/authentication/SignUp";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<ClosetsIndex />} />
      <Route path="/closets" element={<ClosetsIndex />} />
      <Route path="/users/sign_in" element={<SignIn />} />
      <Route path="/users/sign_up" element={<SignUp />} />
    </Routes>
  </Router>
);