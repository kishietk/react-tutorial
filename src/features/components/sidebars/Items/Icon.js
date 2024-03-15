import React from "react";
import DefaultIcon from "../../../../images/icon.png";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

export default function Icon() {
  const user = useSelector((state) => state?.auth?.user);
  const navigate = useNavigate();
  const handleItemClick = (link) => { navigate(link, { replace: true }); };

  return <>
    <div onClick={() => handleItemClick("/home/me")}>
      {user?.avatar ? user.avatar : <img src={DefaultIcon} />}
    </div>
    <p>{user?.email ?? "Email address does not set."}</p>
  </>
};