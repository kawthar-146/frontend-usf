import React, { useEffect } from "react";
import DoctorAssignment from "./DoctorAssignment";

export default function DoctorAssignmentsTab(props) {
  const assignments = props.assignments;

  useEffect(() => {
    props.getAssignments();
  }, []);

  return (
    <div className={props.toggleState !== 2 ? "unactive_content" : "block"}>
      {assignments && assignments.length !== 0 ? <div>
        <div className="student_assignment_data_doctor">
          <div
            style={{ opacity: ".5", color: "#0b3b70" }}
            className="student_assignment_info_doctor"
          >
            <p>Reveal Date</p>
            <p>Dealine</p>
            <p>Late Turn In</p>
            <p>Graded</p>
          </div>
        </div>
        {assignments && assignments.length !== 0 && assignments.map((assignment) => 
          <DoctorAssignment 
            key={assignment.id}
            id={assignment.id}
            name={assignment.assignment_name}
            reveal_date={assignment.reveal_date}
            deadline={assignment.deadline}
            graded={assignment.graded}
            course_id={props.course_id}
            getAssignments={props.getAssignments}
          />
        )}
      </div> : 
      <div className="student_middle_notification">
        No Assignments found
      </div>}
    </div>
  );
}
