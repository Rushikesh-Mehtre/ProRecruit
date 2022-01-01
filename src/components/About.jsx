import React, { useState, useEffect } from "react";
import styles from "./About.module.css";
import { useForm } from "@formspree/react";
import SimpleSnackbar from "./SimpleSnackbar";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
const About = () => {
  const [state, handleSubmit] = useForm("xknkdjze");
  const [formsubmitted, setFormSubmitted] = useState(false);
  const [name, setname] = useState("");
  const [mobile, setmobile] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [fillalldetails, setfillalldetails] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFormSubmitted(false);
      setfillalldetails(false);
    }, 5000);
  }, [formsubmitted, fillalldetails]);
  const buttonHandler = () => {
    if (
      name.length == 0 ||
      email.length == 0 ||
      mobile.length == 0 ||
      message.length == 0
    ) {
      setfillalldetails(true);
      return;
    }
    if (state.succeeded) {
      setFormSubmitted(true);
      setname("");
      setemail("");
      setmobile("");
      setmessage("");
    }
  };
  return (
    <div className={styles.about}>
      {fillalldetails && (
        <SimpleSnackbar message="Please fill all the details" />
      )}{" "}
      {formsubmitted && <SimpleSnackbar message="We received your message" />}{" "}
      <div className={styles.left}>
        <div>
          <h1>About Me</h1>
          <p>
            Hey there ! this is Rushikesh. I am frontend developer skilled with
            HTML5, CSS3, JavaScript, Bootstrap and ReactJS. I have developed
            this project using ReactJS. You can connect with me by filling form
            besides for your suggestions and comments.
          </p>
        </div>
        <div>
          <h1>Contact Me</h1>
          <p>Phone - 7021476869 / 7303133973</p>
          <p>Email ID - rsmrsm5952@gmail.com</p>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/rushikesh-mehtre-122a81217/"
            target="_blank"
          >
            <BsLinkedin className={styles.icon} />{" "}
          </a>
          <a href="https://github.com/Rushikesh-Mehtre/" target="_blank">
            {" "}
            <FaGithubSquare className={styles.icon} />
          </a>
          <a href="https://www.instagram.com/rs_mehtre/" target="_blank">
            {" "}
            <FaInstagramSquare className={styles.icon} />
          </a>
        </div>
      </div>
      <div className={styles.right}>
        <h1>Send Your Message ! </h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="Name"
            id=""
            placeholder="Name"
            onChange={(event) => {
              setname(event.target.value);
            }}
            value={name}
          />
          <label htmlFor="">Mobile Number</label>
          <input
            placeholder="Mobile Number"
            type="text"
            maxLength="10"
            name="Mobile Number"
            value={mobile}
            onChange={(event) => {
              setmobile(event.target.value);
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
            value={email}
            onChange={(event) => {
              setemail(event.target.value);
            }}
          />
          <label htmlFor="">Message</label>
          <textarea
            name="Message"
            id=""
            cols="30"
            rows="10"
            value={message}
            onChange={(event) => {
              setmessage(event.target.value);
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
