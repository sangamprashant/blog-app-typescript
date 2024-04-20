import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AppLogo } from "../../assets/images";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Link } from "react-router-dom";

function Navbar() {
  const theme = React.useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme.appTheme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    theme.setAppTheme(newTheme);
  };

  const themeForToggleOn = "bg-warning";

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
            <div className="d-flex align-items-center gap-0">
              <label
                className={`form-check-label p-1 rounded-4 mx-1 ${
                  theme.appTheme === "light" && themeForToggleOn
                }`}
                htmlFor="themeSwitch"
              >
                <WbSunnyOutlinedIcon />
              </label>
              {"  "}
              <div className="form-check form-switch">
                {" "}
                <input
                  className="form-check-input mt-2 p-2"
                  type="checkbox"
                  id="themeSwitch"
                  onChange={toggleTheme}
                  checked={theme.appTheme === "dark"}
                />
              </div>
              <label
                className={`form-check-label p-1 mx-0 rounded-4 ${
                  theme.appTheme === "dark" && themeForToggleOn
                } `}
                htmlFor="themeSwitch"
              >
                <DarkModeOutlinedIcon />
              </label>
            </div>
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
