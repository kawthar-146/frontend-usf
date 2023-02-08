import React from "react";
import StudentMenu from "../../../components/home/StudentMenu";
import StudentTabs from "../../../components/studenttabs/StudentTabs";
import "./Course.css";

export default function StudentCoursePage(props) {
  const course_id = props.location.state;
  const course_name = props.location.name;
  return (
    <div className="course_section">
      <StudentMenu />
      <div className="margin_left">
        <StudentTabs course_id={course_id}/>
      </div>
    </div>
  );
}
