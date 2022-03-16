import React, { useState } from "react";
import styles from "./AddCandidate.module.css";
import { FaUserPlus } from "react-icons/fa";
import { BiReset } from "react-icons/bi";

const AddCandidate = (props) => {
  const [userData, setUserData] = useState({
    name: "",
    mobile: "",
    email: "",
    jobtitle: "",
    currentorg: "",
    currentsalary: "",
    expectedsalary: "",
    preferredlocation: "",
    workex: "",
    count: 1,
    noticeperiod: "",
  });

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (
      !userData.name ||
      !userData.email ||
      !userData.mobile ||
      !userData.jobtitle ||
      !userData.currentorg ||
      !userData.currentsalary ||
      !userData.noticeperiod ||
      !userData.workex ||
      !userData.preferredlocation ||
      !userData.expectedsalary
    ) {
      alert("Please fill all mandatory fields");
      return;
    }
    const candidatedata = {
      ...userData,
      id: Math.random().toString(),
    };
    setUserData({ ...userData, count: userData.count + 1 });
    alert("Candidate information added successfully ! ");

    setUserData({
      ...userData,
      name: "",
      mobile: "",
      email: "",
      jobtitle: "",
      currentorg: "",
      currentsalary: "",
      expectedsalary: "",
      preferredlocation: "",
      workex: "",
      noticeperiod: "",
    });
    props.onClick(candidatedata);
  };

  const restButtonHandler = () => {
    setUserData({
      name: "",
      mobile: "",
      email: "",
      jobtitle: "",
      currentorg: "",
      currentsalary: "",
      expectedsalary: "",
      preferredlocation: "",
      workex: "",
      noticeperiod: "",
    });
  };

  return (
    <div>
      <form action="" className={styles.form} onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="">Candiate Name</label>
          <input
            type="text"
            placeholder="Candidate Name"
            value={userData.name}
            onChange={(e) => {
              setUserData({ ...userData, name: e.target.value });
            }}
            name="Candidate Name"
          />
        </div>
        <div>
          <label htmlFor="">Mobile Number</label>
          <input
            id=""
            placeholder="Mobile Number"
            value={userData.mobile}
            type="text"
            maxLength="10"
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            onChange={(e) => {
              setUserData({ ...userData, mobile: e.target.value });
            }}
            name="Mobile Number"
          />
        </div>
        <div>
          {" "}
          <label htmlFor="">Email Id</label>
          <input
            type="email"
            placeholder="Email Id"
            value={userData.email}
            onChange={(e) => {
              setUserData({ ...userData, email: e.target.value });
            }}
            name="Email Id"
          />
        </div>
        <div>
          <label htmlFor="">Job Title</label>
          <input
            type="text"
            placeholder="Job Title"
            value={userData.jobtitle}
            onChange={(e) => {
              setUserData({ ...userData, jobtitle: e.target.value });
            }}
            name="Job Title"
          />
        </div>
        <div>
          {" "}
          <label htmlFor="">Current Organization</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Current Organization"
            value={userData.currentorg}
            onChange={(e) => {
              setUserData({ ...userData, currentorg: e.target.value });
            }}
          />
        </div>

        <div>
          <label htmlFor="">Work Experience (in Years)</label>
          <select
            name="Work Experience"
            id=""
            value={userData.workex}
            onChange={(e) => {
              setUserData({ ...userData, workex: e.target.value });
            }}
          >
            <option value="Work Experience">Work Experience</option>
            <option value="Fresher">Fresher</option>
            <option value="< 6 months"> less than 6 months</option>
            <option value="6 months - 1 year"> 6 months - 1 year</option>
            <option value="2 years">2 years</option>
            <option value="3 years">3 years</option>
            <option value="4 years">4 years</option>
            <option value="5 years">5 years</option>
            <option value="> 5 years">5 years</option>
          </select>
        </div>
        <div>
          {" "}
          <label htmlFor="">Current CTC (LPA)</label>
          <input
            name=""
            id=""
            placeholder="Current CTC"
            value={userData.currentsalary}
            onChange={(e) => {
              setUserData({ ...userData, currentsalary: e.target.value });
            }}
            type="number"
            onKeyPress={(event) => {
              if (event.target.value.length > 4) {
                event.preventDefault();
              }
            }}
          />
        </div>
        <div>
          {" "}
          <label htmlFor="">Expected CTC (LPA)</label>
          <input
            name=""
            id=""
            placeholder="Expected CTC"
            value={userData.expectedsalary}
            onChange={(e) => {
              setUserData({ ...userData, expectedsalary: e.target.value });
            }}
            type="number"
            onKeyPress={(event) => {
              if (event.target.value.length > 4) {
                event.preventDefault();
              }
            }}
          />
        </div>
        <div>
          {" "}
          <label htmlFor="">Preferred Location</label>
          <input
            name="Preferred Location"
            placeholder="Preferred Location"
            type="text"
            id=""
            value={userData.preferredlocation}
            onChange={(e) => {
              setUserData({ ...userData, preferredlocation: e.target.value });
            }}
          ></input>
        </div>
        <div>
          {" "}
          <label htmlFor="">Notice Period</label>
          <select
            name="Notice Period"
            id=""
            value={userData.noticeperiod}
            onChange={(e) => {
              setUserData({ ...userData, noticeperiod: e.target.value });
            }}
          >
            <option value="notice period">Notice Period</option>
            <option value="Immediate Joiner">Immediate Joiner</option>
            <option value="15 days">15 days</option>
            <option value="30 days">30 days</option>
            <option value="45 days">45 days</option>
            <option value="60 days">60 days</option>
            <option value="more than 60 days">more than 60 days</option>
          </select>
        </div>
        <div></div>
        <div>
          {" "}
          <button type="submit">
            <FaUserPlus className={styles.icon} /> ADD CANDIDATE
          </button>
          <button type="button" onClick={restButtonHandler}>
            {" "}
            <BiReset className={styles.icon} /> RESET
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddCandidate;
