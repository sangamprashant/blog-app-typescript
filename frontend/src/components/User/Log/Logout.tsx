// Logout.tsx
import React from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { authProps } = React.useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    authProps.setIsLogged(false);
    authProps.setToken("");
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <button
      className="btn bg-gradient text-white rounded-5 "
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default Logout;
