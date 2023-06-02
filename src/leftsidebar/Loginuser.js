import React, { useState } from "react";
import styles from "./Loginuser.module.css";
import { useNavigate } from "react-router-dom";
import { FiMoreHorizontal } from "react-icons/fi";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

export default function Loginuser() {
  const [isVisible, setIsVisible] = useState(false);
  let navigate = useNavigate();

  function handleLogOut() {
    navigate("/logout");
  }

  return (
    <div className={styles.main}>
      <div
        style={isVisible ? {} : { display: "none" }}
        className={styles.logoutPopup}
      >
        <hr />
        <div>
          <p>Add an existing account </p>
        </div>
        <div onClick={handleLogOut}>
          <p> Log out </p>
        </div>
      </div>
      <div onClick={() => setIsVisible(!isVisible)} className={styles.userDiv}>
        <PermIdentityIcon
          sx={{
            height: "3rem",
            width: "3rem",
          }}
        />
        <div className={styles.userDetail}>
          <h5>Saurabh Sakhare</h5>
          <p>saurabh@2000</p>
        </div>
        <FiMoreHorizontal />
      </div>
    </div>
  );
}
