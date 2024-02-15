import React from "react";
import DefaultIcon from "../images/icon.png";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

function SidebarMyIcon() {
  const user = useSelector((state) => state?.auth?.user);
  const navigate = useNavigate();
  const handleItemClick = (link) => { navigate(link, { replace: true }); };

  return (
    <div className="sidebar-my-icon">
      <div onClick={() => handleItemClick("me")}>
        <img src={user?.avatar ?? DefaultIcon} />
      </div>
      <p>{user?.email ?? "Email address does not set."}</p>
    </div>
  );
}

export default SidebarMyIcon;
