import React from "react";
import styles from "./Navbar.module.css";
import { RiFileUserFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/home" className={styles.logo}>
        {" "}
        <RiFileUserFill className={styles.icon} />
        ProRecruit
      </Link>
      <Link to="/about" className={styles.aboutLink}>
        About
      </Link>
    </div>
  );
};

export default Navbar;
