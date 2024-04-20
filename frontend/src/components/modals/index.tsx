import React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import "./modals.css";

type ModalsType = {
  isOpen: boolean;
  children: React.ReactNode;
  close?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modals = ({ isOpen, children, close }: ModalsType) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      {close && (
        <div className="close-button-modal">
          <button
            className="btn btn-outline-light rounded-circle py-2"
            onClick={() => close(false)}
          >
            <CloseOutlinedIcon />
          </button>
        </div>
      )}
      <div className="modal-container">{children}</div>
    </div>
  );
};

export default Modals;
