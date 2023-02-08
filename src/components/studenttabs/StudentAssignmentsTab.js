import React from 'react'
import StudentAssignment from './StudentAssignment'
import "./StudentAssignment.css";

export default function StudentAssignmentsTab(props) {
    const assignments = props.assignments;
    return (
        <div className={props.toggleState !== 2 ? "unactive_content" : "block"}>
            <div className="student_assignment_legend">
                <div className="student_assignment_data">
                    <div className="student_assignment_name">
                        <p></p>
                    </div>
                    <div style={{opacity: ".5", color: "#0b3b70"}} className="student_assignment_info">
                        <p>Reveal Date</p>
                        <p>Dealine</p>
                        <p>Graded</p>
                    </div>
                    <div className="student_assignment_play">
                        <p></p>
                    </div>
                </div>
            </div>
            {assignments && assignments.length !== 0 && assignments.map((assignment) => 
                <StudentAssignment 
                    key={assignment.id}
                    id={assignment.id}
                    name={assignment.assignment_name}
                    file={assignment.assignment_file}
                    reveal_date={assignment.reveal_date}
                    deadline={assignment.deadline}
                    graded={assignment.graded}
                    submitted={false}
                />
            )}
            
        </div>
    )
}
