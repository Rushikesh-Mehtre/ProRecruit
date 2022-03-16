import React, { useState } from "react";
import styles from "./About.module.css";
import { useForm } from "@formspree/react";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const About = () => {
  const [state, handleSubmit] = useForm("xknkdjze");
  console.log(state);
  const [userData, setUserData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });
  console.log(userData);
  const buttonHandler = () => {
    if (
      !userData.name ||
      !userData.email ||
      !userData.mobile ||
      !userData.message
    ) {
      alert("Please fill all the required fields.");
      return;
    }
    console.log(userData);
    setUserData({
      name: "",
      mobile: "",
      email: "",
      message: "",
    });
    alert("We received your message. Thank you !");
  };
  return (
    <div className={styles.about}>
      <div className={styles.left}>
        <div>
          <h2>About Me</h2>
          <p>
            Hey there ! This is Rushikesh. I am frontend developer skilled with
            HTML5, CSS3, JavaScript, Bootstrap and ReactJS. I have developed
            this project using ReactJS. You can connect with me by filling form
            besides for your suggestions and comments.
          </p>
        </div>
        <div>
          <h2>Contact Me</h2>
          <p>
            <IoMdCall className={styles.conatctIcon} /> 7021476869 / 7303133973
          </p>
          <p>
            {" "}
            <MdEmail className={styles.conatctIcon} /> rsmrsm5952@gmail.com
          </p>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/rushikesh-mehtre-122a81217/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className={styles.icon} />{" "}
          </a>
          <a
            href="https://github.com/Rushikesh-Mehtre/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaGithubSquare className={styles.icon} />
          </a>
          <a
            href="https://www.instagram.com/rs_mehtre/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaInstagramSquare className={styles.icon} />
          </a>
        </div>
      </div>
      <div className={styles.right}>
        <h2>Send Your Message ! </h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="Name"
            id=""
            placeholder="Name"
            onChange={(event) => {
              setUserData({ ...userData, name: event.target.value });
            }}
            value={userData.name}
          />
          <label htmlFor="">Mobile Number</label>
          <input
            placeholder="Mobile Number"
            type="text"
            maxLength="10"
            name="Mobile Number"
            value={userData.mobile}
            onChange={(event) => {
              setUserData({ ...userData, mobile: event.target.value });
            }}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
          <label htmlFor="">Email ID</label>
          <input
            type="email"
            placeholder="Email ID"
            name="Email ID"
            value={userData.email}
            onChange={(event) => {
              setUserData({ ...userData, email: event.target.value });
            }}
          />
          <label htmlFor="">Message</label>
          <textarea
            name="Message"
            id=""
            cols="30"
            rows="10"
            value={userData.message}
            onChange={(event) => {
              setUserData({ ...userData, message: event.target.value });
            }}
            placeholder="Your Message"
          ></textarea>
          <button type="submit" onClick={buttonHandler}>
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};
export default About;
