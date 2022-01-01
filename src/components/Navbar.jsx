import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { RiFileUserFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        {" "}
        <RiFileUserFill className={styles.icon} />
        ProRecruit
      </Link>
      <div></div>
    </div>
  );
};

export default Navbar;
