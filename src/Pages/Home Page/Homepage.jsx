import React, { useState } from "react";
import AddCandidate from "../../components/AddCandidate";
import styles from "./Homepage.module.css";
import CandidateListPage from "../../components/CandidateListPage";
const Homepage = () => {
  const [candidateData, setcandidateData] = useState([]);
  const onCandidateAddHandler = (candidatedata) => {
    setcandidateData((previousData) => {
      return [...previousData, candidatedata];
    });
  };
  console.log(candidateData);
  return (
    <div className={styles.homepage}>
      <div className={styles.content}>
        <AddCandidate onClick={onCandidateAddHandler} />
        <div>
          <CandidateListPage candidateData={candidateData} />
        </div>
      </div>
    </div>
  );
};
export default Homepage;
