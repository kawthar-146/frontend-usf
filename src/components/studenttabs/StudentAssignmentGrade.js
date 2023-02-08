import React from "react";
import "./StudentAssignmentGrade.css";

export default function StudentAssignmentGrade(props) {
  return (
    <>
      <div className="student_assignment_grade_container">
        <div className="student_assignment_grade_data">
          <div className="student_assignment_grade_name">
            <p>{props.assignment}</p>
          </div>
          {props.grade ? (
            <div className="student_assignment_grade_info">
              <p style={{ color: "white" }}>
                {props.grade >= 50 ? <>passed</> : <>failed</>}
              </p>
              <p style={{ color: "#0b3b70" }}>{props.grade}/100</p>
            </div>
          ) : (
            <div className="student_assignment_grade_info">
              {" "}
              <p style={{ color: "white" }}> Pending...</p>{" "}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
