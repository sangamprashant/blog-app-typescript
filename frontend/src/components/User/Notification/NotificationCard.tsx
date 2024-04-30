import React from "react";

const NotificationCard = () => {
  return (
    <div className="d-flex gap-2 mt-3">
      <img
        src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
        width={50}
        height={50}
        alt=""
        className="rounded-5 object-fit-cover"
      />
      <div>
        <h5 className="p-0 m-0">UserName</h5>
        <p className="p-0 m-0">Notification details</p>
      </div>
    </div>
  );
};

export default NotificationCard;
