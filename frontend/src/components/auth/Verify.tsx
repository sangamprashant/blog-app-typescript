import React from "react";
import { useParams } from "react-router-dom";
import "./css/Verify.css";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import { ThemeContext } from "../context/ThemeContext";
import axios from "axios";
import { SERVER } from "../../config";

type VerifyStates = "verifying" | "verified" | "error";

const Verify = () => {
  const { appTheme } = React.useContext(ThemeContext);
  const th = appTheme === "light" ? true : false;
  const { id } = useParams<string>();
  const [state, setState] = React.useState<VerifyStates | null>(null);
  const [message, setMessage] = React.useState<string | null>("");

  React.useEffect(() => {
    if (id) {
      handleVerify(id);
      setState("verifying");
    } else {
      setState("error");
      setMessage("No verification token is found.");
    }
  }, [id]);

  const handleVerify = async (id: string) => {
    try {
      const response = await axios.get(`${SERVER}/user/verify/${id}`);
      if (response.data.success) {
        setState("verified");
      }
    } catch (error: any) {
      setState("error");
      setMessage(error?.response.data.message || "Something went wrong");
    }
  };

  return (
    <section className="container text-center py-5 d-flex justify-content-center flex-column align-items-center">
      <div className=" mb-4">
        <h2 className={`${!th && "text-white"}`}>
          Account Verification Status
        </h2>
      </div>
      {state === "verifying" && (
        <div className="card w-100 bg-primary text-white p-3 verifying">
          <div className="d-flex justify-content-center mb-3">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          <h5 className="card-title mb-3">Verifying...</h5>
          <p className="card-text">Please wait while we verify your account.</p>
        </div>
      )}
      {state === "verified" && (
        <div className="card w-100 bg-success text-white p-3 verification-success">
          <div className="d-flex justify-content-center mb-3">
            <SentimentVerySatisfiedOutlinedIcon />
          </div>
          <h5 className="card-title mb-3">Verification Successful</h5>
          <p className="card-text">
            Your account has been successfully verified.
          </p>
          {/* Optionally, you can add a button or link to redirect users to a relevant page */}
        </div>
      )}
      {state === "error" && (
        <div className="card w-100 bg-danger text-white p-3 verification-failed">
          <div className="d-flex justify-content-center mb-3">
            <SentimentDissatisfiedOutlinedIcon />
          </div>
          <h5 className="card-title mb-3">Verification Failed</h5>
          <p className="card-text">Sorry, we couldn't verify your account.</p>
          <p className="card-text">{message}</p>

          {/* Optionally, you can provide instructions or a link to retry verification */}
        </div>
      )}
    </section>
  );
};

export default Verify;
