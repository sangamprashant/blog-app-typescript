import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Navbar from "../Navbar";
import Login from "../auth/Login";
import Register from "../auth/Register";
import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import Footer from "../Footer";
import Modals from "../modals";
import Verify from "../auth/Verify";
import Profile from "../User/Profile";
import UserMain from "../User/UserMain";

const Main = () => {
  const { modalsProps, Theme, appTheme, authProps } =
    React.useContext(ThemeContext);
  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor:
            appTheme === "light" ? "#d7d7d7" : Theme.primary.main,
        }}
      >
        {!authProps.isLogged ? (
          <React.Fragment>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/verify/:id" element={<Verify />} />

              <Route path="/profile" element={<Profile />} />
            </Routes>
            <Footer />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <UserMain />
          </React.Fragment>
        )}
      </div>
      <Modals
        isOpen={modalsProps.isOpenModal}
        children={modalsProps.modalValue}
        close={(e) => {
          modalsProps.setIsOpenModal(false);
        }}
      />
    </React.Fragment>
  );
};

export default Main;
