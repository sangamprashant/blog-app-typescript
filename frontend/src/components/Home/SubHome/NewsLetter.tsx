import React, { useState } from "react";
import { NewsLetterImage } from "../../../assets/images";
import { ThemeContext } from "../../context/ThemeContext";

const NewsLetter: React.FC = () => {
  const theme = React.useContext(ThemeContext);
  const bg = theme.appTheme === "light" ? "bg-dark" : "bg-success";

  const [email, setEmail] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you can submit the email to your server
    console.log("Email submitted:", email);
    // Clear the email input after submission
    setEmail("");
  };

  return (
    <div className="container mt-5 mb-5">
      <div
        className={`row justify-content-center align-items-center rounded-4 bg-success ${bg}`}
      >
        <div className="col-md-5 rounded-4 text-white p-5">
          <h2 className="mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus quae aperiam dolor, laborum reiciendis incidunt, velit,
            obcaecati veritatis molestias assumenda magnam totam porro. Pariatur
            molestiae obcaecati soluta, recusandae tenetur ex!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <button className="btn btn-warning text-white" type="submit">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-5">
          <img
            src={NewsLetterImage}
            alt="Newsletter"
            className="img-fluid rounded-4"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
