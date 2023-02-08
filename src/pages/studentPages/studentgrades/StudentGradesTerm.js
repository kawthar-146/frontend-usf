import React from "react";
import { Link } from 'react-router-dom';
import StudentTermCourse from "./StudentTermCourse";
import StudentMenu from "../../../components/home/StudentMenu";

export default function StudentGradesPage() {
  return (
    <div className="course_section">
      <StudentMenu />
      <div className="margin_left">
        <div className="home_content">
          <div className="home_content_title">
            <Link to="/studentgrades" style={{textDecoration: "none" ,color: "#ffcb08"}}>
                <h2>
                    {" "}
                    <span>
                    <i class="fas fa-chevron-left"></i>
                    </span>{" "}
                    Fall 2020-2021
                </h2>
            </Link>
          </div>
          <div className="home_courses">
            <StudentTermCourse/>
            <StudentTermCourse/>
            <StudentTermCourse/>
            <StudentTermCourse/>
          </div>
        </div>
      </div>
    </div>
  );
}
