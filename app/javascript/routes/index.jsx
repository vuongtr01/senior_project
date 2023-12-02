import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClosetsIndex from "../components/ClosetsIndex";
import SignIn from "../components/authentication/SignIn";
import SignUp from "../components/authentication/SignUp";
import ClosetDetail from "../components/ClosetDetail";
import NewItem from "../components/items/NewItem";
import EditItem from "../components/items/EditItem";
import ItemsIndex from "../components/ItemsIndex";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<ClosetsIndex />} />
      <Route path="/closets" element={<ClosetsIndex />} />
      <Route path="/users/sign_in" element={<SignIn />} />
      <Route path="/users/sign_up" element={<SignUp />} />
      <Route path="/closets/:closetId" element={<ClosetDetail />} />
      <Route path="/items/new" element={<NewItem />}/>
      <Route path="/closets/:closet_id/items/new" element={<NewItem />}/>
      <Route path="/closets/:closet_id/items/:id/edit" element={<EditItem/>} />
      <Route path="/items/:id/edit" element={<EditItem/>} />
      <Route path="/items" element={<ItemsIndex />} />
    </Routes>
  </Router>
);