import axios from "axios";
import React, { useState } from "react";
import SetGradePopup from "./SetGradePopup";

export default function StudentSubmittedAssignment(props) {
  const file = props.studentAssignment.submitted_file;
  const [gradeToggle, setGradeToggle] = useState(false);
  return (
    <div className="student_assignment_container_doctor">
      <div className="student_assignment_data_edit_doctor">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
            color: "white",
          }}
        >
          <span style={{width: "10%", marginLeft: "10px"}}>{props.studentAssignment.user[0].student_id}</span>
          <span style={{width: "10%", textAlign: "center"}}>{props.studentAssignment.user[0].firstname}</span>
          <span>{props.studentAssignment.submitted_file}</span>
          
          <span
            style={{
              color: "#0b3b70",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={()=>setGradeToggle(true)}
          >
            {props.studentAssignment.assignment[0].graded ? <> Grade </> : ''}
          </span>
          <span style={{ color: "#0b3b70", cursor: "pointer" }}>
            <a
              style={{color: "#0b3b70"}}
              href={`http://localhost:8000/api/downloadAssignment/${file}`}
            >
              <i class="far fa-arrow-to-bottom"></i>
            </a>
          </span>
        </div>
      </div>
      {gradeToggle ? <SetGradePopup id={props.studentAssignment.id} setGradeToggle={setGradeToggle} /> : " "}
    </div>
  );
}
