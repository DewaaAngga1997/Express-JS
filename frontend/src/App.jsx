import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./component/UserList";
import AddUser from "./component/AddUser";

export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add" element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
