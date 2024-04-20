import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Navbar from "../Navbar";
import Login from "../auth/Login";
import Register from "../auth/Register";
import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import Footer from "../Footer";
import Modals from "../modals";

const Main = () => {
  const global = React.useContext(ThemeContext);

  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor:
            global.appTheme === "light" ? "#d7d7d7" : global.Theme.primary.main,
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
      <Modals
        isOpen={global.modalsProps.isOpenModal}
        children={global.modalsProps.modalValue}
        close={(e) => {
          global.modalsProps.setIsOpenModal(false);
        }}
      />
    </React.Fragment>
  );
};

export default Main;
