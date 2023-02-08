import React from 'react'
import "./StudentTermCourse.css";

export default function StudentTermCourse(props) {
    return (
        <>
            <div className="student_course_grade_container">
                <div className="student_course_grade_data">
                    <div className="student_course_grade_name">
                        <p className="student_course_grade_p"></p>
                        <p>Course 1</p>
                    </div>
                    <div className="student_course_grade_info">
                        <p>Passed</p>
                    </div>
                    <div className="student_course_grade_play">
                        <p style={{color: "#0b3b70"}}>85/100</p>
                    </div>
                </div>
            </div>
        </>
    )
}
