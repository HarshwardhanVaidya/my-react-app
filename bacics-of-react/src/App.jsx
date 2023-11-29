import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/auth/Home";
import About from "./components/auth/About";
import ContactUs from "./components/auth/ContactUs";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profile from "./components/auth/Profile";
import PageNotFound from "./components/auth/PageNotFound";
import MyAccount from "./components/auth/profileAdding/MyAccount";
import UpdateAccount from "./components/auth/profileAdding/UpdateAccount";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="/profile/myaccount" element={<MyAccount />} />
          <Route path="/profile/updateaccount" element={<UpdateAccount />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
