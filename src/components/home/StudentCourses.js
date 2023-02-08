import React from "react";
import "../../pages/studentPages/studenthome/Home.css";
import StudentCourse from "../StudentCourse";

export default function StudentCourses(props) {
  const studentCourses = props.studentCourses;
  return (
    <div className="home_content">
      <div className="home_content_title">
        <h2>Classes</h2>
        <span>
          Enrolled
        </span>
      </div>
      <div className="home_courses">
      {studentCourses && studentCourses.length !== 0 && studentCourses.map((course) => 
        <StudentCourse
          course={course}
          // key={course.id}
          // id={course.id}
          // name={course.course_name}
          // image={course.file_path}
        />
      )}
      </div>
    </div>
  );
}
