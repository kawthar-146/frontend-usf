import React from "react";
import StudentMenu from "../../../components/home/StudentMenu";
import StudentGrades from "./StudentGrades";

export default function StudentGradesPage() {
  return (
    <div className="course_section">
      <StudentMenu />
      <div className="margin_left">
        <div className="home_content">
          <div className="home_content_title">
            <h2>Grades</h2>
            <span>Select term</span>
          </div>
          <div className="home_courses">
            <StudentGrades/>
          </div>
        </div>
      </div>
    </div>
  );
}
