import React from "react";
import styles from "./Navbar.module.css";
import { RiFileUserFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <p>
        {" "}
        <RiFileUserFill className={styles.icon} />
        ProRecruit
      </p>
      <div></div>
    </div>
  );
};

export default Navbar;
