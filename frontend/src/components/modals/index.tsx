import React from "react";

type ModalsType = {
  isOpen: boolean;
  children: React.ReactNode;
};

const Modals = ({ isOpen, children }: ModalsType) => {
    
  if (!isOpen) return null;

  return <div>{children}</div>;
};

export default Modals;
