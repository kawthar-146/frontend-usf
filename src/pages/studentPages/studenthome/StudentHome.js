import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import SessionContext from "../../../context/SessionContext";
import StudentMenu from "../../../components/home/StudentMenu";
import StudentCourses from "../../../components/home/StudentCourses";
import StudentCalendaar from "../../../components/home/StudentCalendaar";

export default function StudentHome() {
  const {
    session: {
      user: { access_token },
    },
  } = useContext(SessionContext);

  const id = localStorage.getItem("id");
  const [studentCourses, setStudentCourses] = useState();

  const student = async () => {
    const result = await axios.get(`http://localhost:8000/api/studentcourse/index/${id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });
    setStudentCourses(result.data);
  }

  useEffect(() => {
    student();
  }, []);

  return (
    <div className="home_section">
      <StudentMenu />
      <div className="home_section_notfixed">
        <StudentCourses studentCourses={studentCourses}/>
        <StudentCalendaar />
      </div>
    </div>
  );
}
