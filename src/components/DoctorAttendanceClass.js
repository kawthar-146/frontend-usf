import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";

export default function DoctorAttendanceClass(props) {
  const course_id = props.id;
  const [attendance_date , setAttendance_date] = useState('');

  useEffect(() => {
    setAttendance_date('');
  }, []);

  return (
    <div className="attendance_assignment_container_doctor">
      <div className="attendance_class_name">
        <span>{props.name}</span>
        <span>
          Date {" "}
          <input 
            type="datetime-local" 
            onChange={(e) => setAttendance_date(e.target.value)}
          />
        </span>
      </div>
      <Link 
        exact 
        className="attendance_class_link"
        to={{ pathname: "/doctorattendance/class" , course_id , attendance_date }}
      >
        <div className="attendance_view_class">
          <span>
            <i class="fas fa-play"></i>
          </span>
        </div>
      </Link>
    </div>
  );
}
