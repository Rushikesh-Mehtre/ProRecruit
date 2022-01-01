import React from "react";
import CandidateTable from "./CandidateTable";

const CandidateListPage = (props) => {
  console.log(props.candidateData);
  return (
    <div style={{ padding: "20px" }}>
      <CandidateTable candidateData={props.candidateData} />
    </div>
  );
};

export default CandidateListPage;
