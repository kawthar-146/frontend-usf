import React from "react";
import DoctorMenu from "../../../components/home/DoctorMenu";
import DoctorTabs from "../../../components/doctortabs/DoctorTabs";

export default function DoctorCoursePage(props) {
  const course_id = props.location.id;
  const course_name = props.location.name;
  return (
    <div className="course_section">
      <DoctorMenu />
      <div className="margin_left">
        <DoctorTabs course_id={course_id} course_name={course_name}/>
      </div>
    </div>
  );
}
