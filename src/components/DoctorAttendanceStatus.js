import React from "react";

export default function DoctorAttendanceStatus(props) {
  const user_id = props.user_id;
  return (
    <div className="attendance_student_component">
      <div>
        <span>{props.student.user[0].student_id}</span>
        <span>{props.student.user[0].firstname} {props.student.user[0].lastname}</span>
        <span>
          <input 
            className="attendance_checkbox" 
            type="checkbox" 
            defaultChecked={props.checked} 
            onChange={() => {props.aa(user_id); props.setChecked(!props.checked)}} 
          />
        </span>
      </div>
    </div>
  );
}
