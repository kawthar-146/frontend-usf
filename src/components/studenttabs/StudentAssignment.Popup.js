import React, { useContext, useState } from "react";
import "./StudentAssignment.Popup.css";
import StudentAssignmentSubmitPopup from "./StudentAssignmentSubmit.Popup";
import axios from 'axios';
import SessionContext from "../../context/SessionContext";


export default function StudentAssignmentPopup(props) {
 

  const assignment_info = props.assignment_info;
  
  const user_id = localStorage.getItem('id')
  const assignment_id = assignment_info.id
  const [submitTrigger, setSubmitTrigger] = useState(false);
 
  
 
  return (
    <>
      <div className="popup_student_assignment">
        <div className="popup_student_assignment_content">
          <div className="assignment_content">
            <h2 style={{ marginLeft: "5%" }}>{assignment_info.name}</h2>
            <span style={{ marginLeft: "5%" }}>
              Due date {assignment_info.deadline}
            </span>
            <div className="assignment_description_box">
              <div className="assignment_description">
                <p>Assignment Description ...</p>
                <div className="assignment_description_buttons">
                  <div className="assignment_buttons">
                    <a
                      style={{ color: "#ffcb08" }}
                      href={`http://localhost:8000/api/downloadAssignment/${assignment_info.file}`}
                    >
                      <p>{assignment_info.file}</p>
                      <i class="fa fa-download"></i>
                    </a>
                  </div>
                  <div
                    className="assignment_buttons"
                    onClick={() => setSubmitTrigger(true)}
                  >
                    <p>Upload File</p>
                    <i class="fa fa-upload"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span
            onClick={() => props.setTrigger(false)}
            className="close_student_assignment_popup"
          >
            x
          </span>
        </div>
      </div>
      {submitTrigger ? (
        <StudentAssignmentSubmitPopup user_id={user_id} assignment_id={assignment_id} setSubmitTrigger={setSubmitTrigger} setTrigger={props.setTrigger} setSubmitted={props.setSubmitted} />
      ) : (
        ""
      )}
    </>
  );
}
