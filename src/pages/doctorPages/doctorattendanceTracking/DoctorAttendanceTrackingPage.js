import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import SessionContext from "../../../context/SessionContext";
import DoctorAttendanceClass from "../../../components/DoctorAttendanceClass";
import DoctorMenu from "../../../components/home/DoctorMenu";
import "./DoctorAttendance.css"

export default function DoctorAttendanceTrackingPage() {
  const {
    session: {
      user: { access_token },
    },
  } = useContext(SessionContext);

  const id = localStorage.getItem("id");
  const [courses, setCourses] = useState();

  const getCourses = async () => {
    const result = await axios.get(`http://localhost:8000/api/courses/index/${id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });
    setCourses(result.data);
  }

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className="course_section">
      <DoctorMenu />
      <div className="doctor_attendance_track">
        <div className="home_content">
          <div className="home_content_title">
            <h2 style={{ fontWeight: "500" }}>Attendance Tracking</h2>
            <span>Select your class in order to take attendance</span>
          </div>
          <div className="attendance_classes">
          {courses && courses.length!==0 && courses.map((course) => 
            <DoctorAttendanceClass
              key={course.id}
              id={course.id}
              name={course.course_name}
            />
          )}
          </div>
        </div>
      </div>
    </div>
  );
}
