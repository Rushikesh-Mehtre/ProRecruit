import React, { useState, useEffect } from "react";
import styles from "./AddCandidate.module.css";
import { FaUserPlus } from "react-icons/fa";
import { BiReset } from "react-icons/bi";
import SimpleSnackbar from "./SimpleSnackbar";

const AddCandidate = (props) => {
  const [name, setname] = useState("");
  const [mobile, setmobile] = useState("");
  const [email, setemail] = useState("");
  const [jobtitle, setjobtitle] = useState("");
  const [currentorg, setcurrentorg] = useState("");
  const [currentsalary, setcurrentsalary] = useState("");
  const [expectedsalary, setexpectedsalary] = useState("");
  const [preferredlocation, setpreferredlocation] = useState("");
  const [workex, setworkex] = useState("");
  const [count, setcount] = useState(1);
  const [noticeperiod, setnoticeperiod] = useState("");
  const [useradded, setUseradded] = useState(false);
  const [warningalert, setWarningAlert] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setWarningAlert(false);
      setUseradded(false);
    }, 5000);
  }, [warningalert, useradded]);
  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (
      !name ||
      !email ||
      !mobile ||
      !jobtitle ||
      !currentorg ||
      !currentsalary ||
      !noticeperiod ||
      !workex ||
      !preferredlocation ||
      !expectedsalary
    ) {
      setWarningAlert(true);
      return;
    }

    const candidatedata = {
      name: name,
      mobile: mobile,
      email: email,
      jobtitle: jobtitle,
      serialno: count,
      currentorg: currentorg,
      currentsalary: currentsalary,
      expectedsalary: expectedsalary,
      preferredlocation: preferredlocation,
      workex: workex,
      noticeperiod: noticeperiod,
      id: Math.random().toString(),
    };

    props.onClick(candidatedata);
    setcount(count + 1);
    setUseradded(true);
    setname("");
    setemail("");
    setmobile("");
    setjobtitle("");
    setexpectedsalary("");
    setcurrentorg("");
    setworkex("");
    setexpectedsalary("");
    setpreferredlocation("");
    setnoticeperiod("");
    setcurrentsalary("");
  };

  const restButtonHandler = () => {
    setname("");
    setemail("");
    setmobile("");
    setjobtitle("");
    setexpectedsalary("");
    setcurrentorg("");
    setworkex("");
    setexpectedsalary("");
    setpreferredlocation("");
    setnoticeperiod("");
    setcurrentsalary("");
  };

  return (
    <div>
      {useradded && (
        <SimpleSnackbar message="New candidate information added" />
      )}{" "}
      {warningalert && (
        <SimpleSnackbar message="Please fill all the input details" />
      )}{" "}
      <form action="" className={styles.form} onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="">Candiate Name</label>
          <input
            type="text"
            placeholder="Candidate Name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
            name="Candidate Name"
          />
        </div>
        <div>
          <label htmlFor="">Mobile Number</label>
          <input
            name=""
            id=""
            placeholder="Mobile Number"
            value={mobile}
            type="text"
            maxLength="10"
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            onChange={(e) => {
              setmobile(e.target.value);
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
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            name="Email Id"
          />
        </div>
        <div>
          <label htmlFor="">Job Title</label>
          <input
            type="text"
            placeholder="Job Title"
            value={jobtitle}
            onChange={(e) => {
              setjobtitle(e.target.value);
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
            value={currentorg}
            onChange={(e) => {
              setcurrentorg(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="">Work Experience (in Years)</label>
          <select
            name="Work Experience"
            id=""
            value={workex}
            onChange={(e) => {
              setworkex(e.target.value);
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
            value={currentsalary}
            onChange={(e) => {
              setcurrentsalary(e.target.value);
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
            value={expectedsalary}
            onChange={(e) => {
              setexpectedsalary(e.target.value);
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
            value={preferredlocation}
            onChange={(e) => {
              setpreferredlocation(e.target.value);
            }}
          ></input>
        </div>
        <div>
          {" "}
          <label htmlFor="">Notice Period</label>
          <select
            name="Notice Period"
            id=""
            value={noticeperiod}
            onChange={(e) => {
              setnoticeperiod(e.target.value);
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
