import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { AppLogo } from "../../assets/images";

const footerLinks = [
  {
    title: "home",
    link: "/",
  },
  {
    title: "about",
    link: "/",
  },
  {
    title: "Contact Us",
    link: "/",
  },
];

const footerIcons = [
  {
    link: "/",
    icon: <LinkedInIcon />,
  },
  {
    link: "/",
    icon: <InstagramIcon />,
  },
  {
    link: "/",
    icon: <FacebookOutlinedIcon />,
  },
];

function Footer() {
  return (
    <footer className="text-white bg-dark py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <img
              src={AppLogo}
              alt="Your Logo"
              width={200}
              className="img-fluid mb-3"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              ullamcorper dolor nec neque posuere tristique.
            </p>
          </div>
          <div className="col-lg-4 col-md-6">
            <h2 className="text-success">Quick Links</h2>
            <ul className="list-unstyled">
              {footerLinks.map((data, index) => {
                return (
                  <li key={index}>
                    <a
                      className=" text-decoration-none text-white"
                      href={data.link}
                    >
                      {data.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-lg-4 col-md-12">
            <h2 className="text-success">Contact Us</h2>
            <address>
              <p>123 Main Street</p>
              <p>City, State 12345</p>
              <p>Email: info@example.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        <hr className="mt-5" />
        <div className="row">
          <div className="col-md-6">
            <p className="text-success">
              © 2024 Your Website Name. All rights reserved.
            </p>
          </div>
          <div className="col-md-6">
            <ul className="list-inline social-icons">
              {footerIcons.map((data, index) => {
                return (
                  <li className="list-inline-item" key={index}>
                    <a className="text-success" href={data.link}>
                      {data.icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
