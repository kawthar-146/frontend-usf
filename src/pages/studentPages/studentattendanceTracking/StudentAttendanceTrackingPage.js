import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import SessionContext from "../../../context/SessionContext";
import StudentMenu from "../../../components/home/StudentMenu";
import StudentAttendanceTracking from "./StudentAttendanceTracking";

export default function StudentAttendanceTrackingPage() {
  const {
    session: {
      user: { access_token },
    },
  } = useContext(SessionContext);
  const user_id = localStorage.getItem('id');
  const [studentAbsences , setStudentAbsences] = useState('');

  const absent = true;

  const getStudentAttendance = async () => {
    const result = await axios.get(`http://localhost:8000/api/getStudentAtt/${user_id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });
    setStudentAbsences(result.data);
  }

  useEffect(() => {
    getStudentAttendance();
  }, []);

  return (
    <div className="course_section">
      <StudentMenu />
      <div className="margin_left">
        <div className="home_content">
          <div className="home_content_title">
            <h2>Attendace Tracking</h2>
            <span>Past Month</span>
          </div>
          {studentAbsences && studentAbsences.length!==0 && studentAbsences.map((studentAbsence) => 
            <div className="home_courses">
              <StudentAttendanceTracking
                data={studentAbsence}
              />
            </div>
          )}
          {!studentAbsences && studentAbsences.length===0 && (
            <div className="home_courses">
              <div className="student_middle_notification">
                You've never missed a class!
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
