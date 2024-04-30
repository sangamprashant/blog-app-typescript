import React from "react";
import NotificationCard from "./NotificationCard";
import { Card } from "react-bootstrap";
import NoNotification from "./NoNotification";

const Notification = () => {
  return (
    <section>
      <h1>Notifications</h1>
      {/* <hr /> */}
      <Card className="p-2 bg-dark text-white">
        <div className="loader"></div>
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NoNotification />
      </Card>
    </section>
  );
};

export default Notification;
