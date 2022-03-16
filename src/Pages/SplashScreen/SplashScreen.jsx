import React, { useEffect, useState } from "react";
import styles from "./SplashScreen.module.scss";
import mainImg from "../../assets/images/mainImg.png";
import { useNavigate } from "react-router-dom";
const SplashScreen = () => {
  const [value, setValue] = useState(25);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setValue(50);
    }, 1000);
    setTimeout(() => {
      setValue(75);
    }, 1500);
    setTimeout(() => {
      setValue(100);
    }, 2000);
    setTimeout(() => {
      navigate("/home");
    }, 2500);
  });

  return (
    <div className={styles.splashScreen}>
      <img src={mainImg} alt="" />
      <p className={styles.head}>Welcome to ProRecruit</p>
      <p className={styles.subhead}>redirecting to home page...</p>
      <div className={styles.progressBar}>
        <div className={styles.bar} style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
};

export default SplashScreen;
