import React from "react";
import icon from "../../assets/img/notification-icon.svg";
import "./styles.css";

const NotificationButton = () => {
  return (
    <div className="dsmeta-notification-btn">
      <img src={icon} alt="Notificar" />
    </div>
  );
};

export default NotificationButton;
