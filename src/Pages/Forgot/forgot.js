import { FaTwitter } from "react-icons/fa";
import styles from "./forgotPass.module.css";
import { useState } from "react";
import axios from "axios";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

export default function ForgotPassward() {
  const navigate =  useNavigate();
  const [Num, setNum] = useState(" ");

  function validNum() {
    const correctNumber = /^[6-9]\d{9}$/.test(Num);

    if (!correctNumber) {
      alert("Please Check Number");
    } else {
   
      setNum(" ");
      navigate('/getOTP')

    }
  }

  function getOTP() {
    axios
      .post(`https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`, {
        mobile: `${Num}`,
      })
      .then((data) => setNum(data.mobile))
      .catch((error) => console.log(error));
    validNum();
  }

  return (
    <>
      <div className={styles.main_div}>
        <div className={styles.header}>
          <GrClose />
        </div>
        <FaTwitter color="Royalblue" size={35} />
        <div className={styles.headin_para}>
          <h2 >Find your Twitter account</h2>
          <p>
            Enter the email, phone number, or username associated with your
            account to change your password.
          </p>
        </div>
        <input
          type="tel"
          placeholder="Enter Phone Number"
          onChange={(e) => { setNum(e.target.value); }}
          className={styles.forgot_input}
          value={Num}
        ></input>

  

        <button className={styles.forgot_btn} onClick={getOTP}>
          Get OTP
        </button>
      </div>
    </>
  );
}