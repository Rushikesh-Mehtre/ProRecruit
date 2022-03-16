import React from "react";
import Context from "../store/Context";
import CandidateTable from "./CandidateTable";
const CandidateListPage = (props) => {
  console.log(props.candidateData);
  return (
    <Context.Provider
      value={{
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
        count: "",
      }}
    >
      <div style={{ padding: "20px" }}>
        <CandidateTable candidateData={props.candidateData} />
      </div>
    </Context.Provider>
  );
};

export default CandidateListPage;
