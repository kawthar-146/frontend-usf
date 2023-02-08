import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import SessionContext from "../../../context/SessionContext";
import DoctorMenu from "../../../components/home/DoctorMenu";
import DoctorCourses from "../../../components/home/DoctorCourses";
import DoctorCalendaar from "../../../components/home/DoctorCalendaar";

export default function DoctorHome() {
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
    <div className="home_section">
      <DoctorMenu />
      <div className="home_section_notfixed">
        <DoctorCourses courses={courses}/>
        <DoctorCalendaar />
      </div>
    </div>
  );
}
