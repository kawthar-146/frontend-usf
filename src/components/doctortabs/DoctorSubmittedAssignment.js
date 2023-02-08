import React from "react";
import { Link } from "react-router-dom";

export default function DoctorSubmittedAssignment(props) {
  const id = props.id;
  const name = props.name;
  const assignment_name = props.assignment_name;
  return (
    <div className="student_assignment_container_doctor">
      <div className="student_assignment_data_edit_doctor">
        <div className="student_assignment_title_doctor">
          <span>{props.assignment_name}</span>
        </div>
        <Link 
          to={{ pathname:`/doctorcourse/viewassignments/${props.assignment_id}`, id , name,assignment_name}}
        >
          {" "}
          <p style={{ cursor:"pointer", color: "#0b3b70", marginRight: "1rem" }}>
            <i class="fas fa-play"></i>
          </p>
        </Link>
      </div>
    </div>
  );
}
