import React, { useState } from "react";
import styles from "./Loginuser.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FiMoreHorizontal } from "react-icons/fi";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

export default function Loginuser() {
  const [isVisible, setIsVisible] = useState(false);
  let navigate = useNavigate();

  // function handleLogOut() {
  //   navigate("/logout");
  // }

  return (
    <div className={styles.main}>
     
        <div className={styles.userDetail}>
          <h5>UserName</h5>
          <p>Username@gmail.com</p>
        </div>
        <Link to="/"> <div>
        <button className={styles.log_out_btn}>Log out</button>
        </div></Link>
      </div>
   
  );
}
