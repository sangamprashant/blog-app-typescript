import React from "react";

type SubTimeLineProps = {
  count: number;
  title: string;
  isDark: boolean;
  icon: React.ComponentType;
};

const SubTimeLine = ({
  isDark,
  count,
  title,
  icon: Icon,
}: SubTimeLineProps) => {
  return (
    <div className="col-md-4 mt-2">
      <div
        className={`card border-0 shadow-sm py-3 ${
          !isDark ? "bg-success" : "bg-dark"
        }`}
      >
        <div className="card-body d-flex align-items-center">
          <div className="me-3">
            <Icon />
          </div>
          <div>
            <h2 className={`m-0 ${!isDark ? "text-dark" : "text-success"}`}>{title}</h2>
            <h5 className={`m-0  text-white`}>
              {count}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubTimeLine;
