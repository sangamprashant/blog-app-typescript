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
  const theme = React.useContext(ThemeContext);

  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor:
            theme.appTheme === "light" ? "#d7d7d7" : theme.Theme.primary.main,
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
      <Modals isOpen={false} children={<Home />} />
    </React.Fragment>
  );
};

export default Main;
