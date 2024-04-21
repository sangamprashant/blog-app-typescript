import React from "react";
import { HomeImage } from "../../../assets/images";
import { ThemeContext } from "../../context/ThemeContext";

function Banner() {
  const global = React.useContext(ThemeContext);
  const ct = global.appTheme === "light" ? "text-dark" : "text-success";

  return (
    <section className="container">
      <div className="container-fluid py-5 banner ">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-12 text-center mt-3">
            <h2 className="display-4 banner-heading">
              <b className={`${ct}`}>Welcome to Blog-App</b>
            </h2>
            <p className={`lead ${ct}`}>
              Your ultimate destination for insightful articles and engaging
              content.
            </p>
          </div>
          <div className="col-md-3">
            <img
              src={HomeImage}
              className="img-fluid rounded"
              alt="Blog Banner"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
