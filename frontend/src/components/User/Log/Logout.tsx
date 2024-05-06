// Logout.tsx
import React from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { authProps, modalsProps } = React.useContext(ThemeContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    authProps.setIsLogged(false);
    authProps.setToken("");
    sessionStorage.clear();
    modalsProps.setIsOpenModal(false)
    navigate("/");
  };

  const OpenModel = () => {
    modalsProps.setIsOpenModal(true);
    modalsProps.setModalValue(
      <>
        <h1>Are you sure you want to Logout?</h1>
        <div className="d-flex justify-content-evenly">
          <button className="btn btn-danger" onClick={handleLogout}>LOGOUT</button>
          <button className="btn btn-success" onClick={(e)=>modalsProps.setIsOpenModal(false)}>CANCEL</button>
        </div>
      </>
    );
  };

  return (
    <button
      className="btn bg-gradient text-white rounded-5 "
      onClick={OpenModel}
    >
      Logout
    </button>
  );
};

export default Logout;
