import React from 'react'
import { Link } from 'react-router-dom';
import "./StudentGrades.css";

export default function StudentGrades(props) {
    return (
        <>
            <Link to="/studentgrades/term">
                <div className="student_grades_container">
                    <div className="student_grades_data">
                        <div className="student_grades_name">
                            <p>Fall</p>
                        </div>
                        <div className="student_grades_info">
                            <p>2020-2021</p>
                        </div>
                        <div className="student_grades_play">
                            <p style={{color: "#0b3b70"}}><i class="fa fa-play" aria-hidden="true"></i></p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}
