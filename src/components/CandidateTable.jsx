import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import dateFormat, { masks } from "dateformat";

const CandidateTable = (props) => {
  const now = new Date();
  const time = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");

  console.log(props.candidateData);
  const [candidatedata, setcandidatedata] = useState(props.candidateData);
  useEffect(() => {
    setcandidatedata(props.candidateData);
  }, [props]);
  console.log(candidatedata);

  const columns = [
    { title: "Sr. No.", field: "serialno" },
    { title: "Name", field: "name" },
    { title: "Phone", field: "mobile" },
    { title: "Email", field: "email" },
    { title: "Job Title", field: "jobtitle" },
    { title: "Work Exp.", field: "workex" },
    { title: "Current Org.", field: "currentorg" },
    { title: "Current CTC", field: "currentsalary" },
    { title: "Expected CTC", field: "expectedsalary" },
    { title: "Notice Period", field: "noticeperiod" },
    { title: "Location", field: "preferredlocation" },
  ];
  return (
    <div>
      <MaterialTable
        title="Candidate List"
        data={candidatedata}
        columns={columns}
        editable={
          {
            // onRowUpdate: (newData, oldData) =>
            //   new Promise((resolve, reject) => {
            //     setTimeout(() => {
            //       const dataUpdate = [...candidatedata];
            //       const index = oldData.tableData.id;
            //       dataUpdate[index] = newData;
            //       setcandidatedata([...dataUpdate]);
            //       resolve();
            //     }, 1000);
            //   }),
            // onRowDelete: (oldData) =>
            //   new Promise((resolve, reject) => {
            //     setTimeout(() => {
            //       const dataDelete = [...candidatedata];
            //       const index = oldData.tableData.id;
            //       dataDelete.splice(index, 1);
            //       setcandidatedata([...dataDelete]);
            //       resolve();
            //     }, 1000);
            //   }),
          }
        }
        options={{
          search: false,
          paging: false,
          exportButton: true,

          exportFileName: "Candidate list on " + time,
          sorting: false,
          actionsColumnIndex: -1,
          // selection: true,
          showSelectAllCheckbox: false,
          showTextRowsSelected: false,
        }}
      />
    </div>
  );
};

export default CandidateTable;
