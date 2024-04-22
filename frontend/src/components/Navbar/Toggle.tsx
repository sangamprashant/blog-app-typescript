import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const Toggle = () => {
  const theme = React.useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme.appTheme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    theme.setAppTheme(newTheme);
  };

  const themeForToggleOn = "bg-warning";
  return (
    <div className="d-flex align-items-center gap-0 bg-gradient rounded-5">
      <label
        className={`form-check-label p-1 rounded-4  ${
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
  );
};

export default Toggle;
