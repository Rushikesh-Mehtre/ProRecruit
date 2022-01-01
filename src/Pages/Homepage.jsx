import React, { useState, useEffect } from "react";
import AddCandidate from "../components/AddCandidate";
import styles from "./Homepage.module.css";
import { style } from "@mui/system";
import CandidateListPage from "../components/CandidateListPage";
import SimpleSnackbar from "../components/SimpleSnackbar";
import About from "../components/About";
const Homepage = () => {
  const [candidateData, setcandidateData] = useState([]);
  const [showsnackbar, setShowsnackbar] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowsnackbar(false);
    }, 3000);
  }, []);
  const onCandidateAddHandler = (candidatedata) => {
    setcandidateData((previousData) => {
      return [...previousData, candidatedata];
    });
  };
  console.log(candidateData);
  return (
    <div className={styles.homepage}>
      <div className={styles.content}>
        <div className={styles.left}>
          {showsnackbar && <SimpleSnackbar message="Welcome to ProRecruit" />}{" "}
        </div>
        <AddCandidate onClick={onCandidateAddHandler} />
        <div>
          <CandidateListPage candidateData={candidateData} />
        </div>
        <div>
          <About />
        </div>
      </div>
    </div>
  );
};
export default Homepage;
