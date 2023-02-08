import React from 'react'
import "./StudentAttendanceTracking.css";

export default function StudentAttendanceTracking(props) {
    console.log(props.data.attendance[0].date)
    return (
        <>
            <div className="student_attendanceTracking_container">
                <div className="student_attendanceTracking_data">
                    <div className="student_attendanceTracking_name">
                        <p>Absent {props.data.attendance[0].course[0].course_name}</p>
                    </div>
                    <div className="student_attendanceTracking_info">
                        <p>Session 1</p>
                    </div>
                    <div className="student_attendanceTracking_play">
                        <p style={{color: "#0b3b70"}}>{props.data.attendance[0].date}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
