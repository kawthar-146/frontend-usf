import React from "react";
import "../../pages/studentPages/studenthome/Home.css";
import DoctorCourse from "../DoctorCourse";

export default function DoctorCourses(props) {
  const courses = props.courses;

  return (
    <div className="home_content">
      <div className="home_content_title">
        <h2>Classes</h2>
        {courses && <div>
          {courses && courses.length !==0 ? 
            <span>Teaching {courses.length} courses</span> : 
            <span>Not teaching</span>
          }
        </div>}
      </div>
      <div className="home_courses">
        {courses && courses.length!==0 && courses.map((course) => 
          <DoctorCourse
            key={course.id}
            id={course.id}
            name={course.course_name}
            image={course.file_path}
          />
        )}
      </div>
    </div>
  );
}
