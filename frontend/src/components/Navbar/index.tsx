import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AppLogo } from "../../assets/images";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Link } from "react-router-dom";
import Toggle from "./Toggle";

function Navbar() {
  const theme = React.useContext(ThemeContext);

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor:
          theme.appTheme !== "light"
            ? theme.Theme.secondary.main
            : theme.Theme.primary.main,
        color: "white",
      }}
    >
      <div className="container-fluid">
        <Link
          to="/"
          className="navbar-brand text-white "
          style={{ fontSize: "30px", fontWeight: "700" }}
        >
          <img src={AppLogo} width={70} />
          Blog-App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <div className="d-flex gap-3 align-items-center">
            <Toggle />
            <Link to="/login" className="btn btn-outline-light" type="submit">
              LOGIN
            </Link>
            <Link
              to="register"
              className={`btn btn-${
                theme.appTheme !== "light" ? "dark" : "success"
              }`}
              type="submit"
            >
              REGISTER
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
