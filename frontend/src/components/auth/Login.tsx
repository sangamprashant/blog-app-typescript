import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { ThemeContext } from "../context/ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER } from "../../config";

const Login = () => {
  const { appTheme, modalsProps, authProps } = React.useContext(ThemeContext);
  const th = appTheme === "light" ? true : false;
  const navigate = useNavigate();
  const [waithing, setWaiting] = React.useState<boolean>(false);
  // Form data state variables
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const maxLength: {
    [key: string]: number;
  } = {
    email: 50,
    password: 20,
  };

  React.useLayoutEffect(() => {
    if (authProps.isLogged) {
      navigate("/account");
    }
  }, [authProps]);

  // Handle input changes
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // Validate input length
    if (value.length <= maxLength[name]) {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      modalsProps.setIsOpenModal(true);
      modalsProps.setModalValue(
        <>
          <p className="text-warning ">warning</p>
          <h5 className="m-0 p-0">Length of "{name}" is more.</h5>
          <p className="m-0 p-0 text-success">
            maximum length is {name === "password" ? 20 : 50}
          </p>
        </>
      );
    }
  };

  // Handle form submission
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email.trim() || !formData.password.trim()) {
      // Display warning for empty input fields
      modalsProps.setIsOpenModal(true);
      modalsProps.setModalValue(
        <>
          <p className="text-warning">Warning</p>
          <h5 className="m-0 p-0">Input fields are required</h5>
          <p className="m-0 p-0 text-success">Please fill in all the fields</p>
        </>
      );
      return;
    }
    if (formData.email.length > 50 || formData.password.length > 20) {
      // Display warning for exceeding maximum lengths
      modalsProps.setIsOpenModal(true);
      modalsProps.setModalValue(
        <>
          <p className="text-warning">Warning</p>
          <h5 className="m-0 p-0">
            Length of name, email, or password is too long.
          </h5>
          <p className="m-0 p-0 text-success">
            Maximum length for email is 50, and for password is 20.
          </p>
        </>
      );
      return;
    }
    try {
      const response = await axios.post(`${SERVER}/user/login`, formData);
      if (response.data.success) {
        sessionStorage.setItem("token", response.data.token);
        authProps.setToken(response.data.token);

        authProps.setIsLogged(true);
        modalsProps.setIsOpenModal(true);
        modalsProps.setModalValue(
          <>
            <p className="text-success ">Success</p>
            <h5 className="m-0 p-0">
              {response.data.message || "Registered successfully."}
            </h5>
          </>
        );
        navigate("/account");
      }
    } catch (error: any) {
      console.log("failed to login");
      const redirectUrl = error.response?.data?.redirect ?? null;
      modalsProps.setIsOpenModal(true);
      modalsProps.setModalValue(
        <>
          <p className="text-danger ">Error</p>
          <h5 className="m-0 p-0 text-dark">{error.response.data.message}</h5>
          <p className="m-0 p-0">
            Redirecting:{" "}
            <a href={`${window.location.origin}${redirectUrl}`}>
              {window.location.origin}
              {redirectUrl}
            </a>
          </p>
        </>
      );
      if (redirectUrl) {
        navigate(redirectUrl);
      }
    } finally {
      setWaiting(false);
    }
  };
  return (
    <div className="auth_form_wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className={`col-md-5 card ${
              th ? "bg-dark" : "bg-success"
            } text-white`}
          >
            <div className="login_wrapper p-4">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6 mb-1">
                  <a
                    href="#"
                    className={`btn btn-${
                      th ? "success" : "dark"
                    } btn-block d-flex align-items-center justify-content-center text-decoration-none`}
                  >
                    <FacebookOutlinedIcon />
                    <span className="m-2">Login with Facebook</span>
                  </a>
                </div>
                <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6 mt-1">
                  <a
                    href="#"
                    className={`btn btn-danger btn-block d-flex align-items-center justify-content-center text-decoration-none`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      height="20"
                      width="20"
                      stroke="white"
                      fill="white"
                    >
                      <path d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"></path>
                    </svg>
                    <span className="m-2">Login with Google</span>
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center text-uppercase">
                <h2>or</h2>
              </div>
              <form onSubmit={handleLogin}>
                <div className="formsix-pos my-2">
                  <div className="form-group i-email">
                    <input
                      type="email"
                      className="form-control p-3"
                      id="email2"
                      placeholder="Email Address *"
                      name="email"
                      onChange={handleOnChange}
                    />
                  </div>
                </div>
                <div className="formsix-e my-2">
                  <div className="form-group i-password">
                    <input
                      type="password"
                      className="form-control p-3"
                      id="password2"
                      placeholder="Password *"
                      name="password"
                      onChange={handleOnChange}
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="my-2 d-flex justify-content-end">
                  <a
                    href="#"
                    className={`forget_password text-decoration-none text-${
                      th ? "success" : "dark"
                    }`}
                  >
                    Forgot Password
                  </a>
                </div>
                <button
                  className={`w-100 btn btn-lg btn-${th ? "success" : "dark"}`}
                  type="submit"
                >
                  {waithing ? "PLEASE WAIT.." : "LOGIN"}
                </button>
              </form>
              <div className="login_message">
                <p>
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className={`text-decoration-none text-${
                      th ? "success" : "dark"
                    }`}
                  >
                    Get Started
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
