import React from "react";
import "./Styles/HeaderOptions.css";
import { Avatar } from "@mui/material";
// import { selectUser } from "../features/userSlice";
// import {useSelector} from "react-redux";


function HeaderOptions({ avatar, title, Icon, onClick }) {
  // const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar &&
        <Avatar src={avatar} className="headerOption_icon" />
      }
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;

// {/* <Avatar src={user.photoURL} className="sidebar_avatar" >{user.email[0]}</Avatar> */}