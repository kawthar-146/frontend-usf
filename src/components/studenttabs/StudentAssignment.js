import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import SessionContext from '../../context/SessionContext';
import StudentAssignmentPopup from "./StudentAssignment.Popup";
import "./StudentAssignment.css";

export default function StudentAssignment(props) {
    const {
        session: {
          user: { access_token },
        },
    } = useContext(SessionContext);
    const id = localStorage.getItem("id");
    const assignment_info = props;
    const assignment_id = props.id;
    const [submitted, setSubmitted] = useState();
    const [trigger, setTrigger] = useState(false);

    const getSubmitted = async () => {
        const result = await axios.get(`http://localhost:8000/api/users/getStudentSubmittedAssignment/${id}/${assignment_id}`, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });
        setSubmitted(result.data.submitted);
    }

    useEffect(() => {
        getSubmitted();
    }, []);

    return (
        <>
            {!submitted && (
                <div className="student_assignment_container">
                    <div className="student_assignment_data">
                        <div className="student_assignment_name">
                            <p style={{cursor: "pointer"}} onClick={()=>setTrigger(true)}>{props.name}</p>
                        </div>
                        <div className="student_assignment_info">
                            <p>{props.reveal_date}</p>
                            <p>{props.deadline}</p>
                            {props.graded === 1 ? <p>Yes</p> : <p>No</p>}
                        </div>
                        <div className="student_assignment_play">
                            <p style={{color: "#0b3b70"}}><i class="fa fa-play" aria-hidden="true"></i></p>
                        </div>
                    </div>
                </div>
            )}
            {submitted && (
                <div className="student_assignment_container">
                    <div className="student_assignment_data">
                        <div className="student_assignment_name">
                            <p style={{textDecoration: "none"}}>{props.name}</p>
                        </div>
                        <div className="student_assignment_info">
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                        <div className="student_assignment_play">
                            <p style={{color: "#0b3b70"}}>Submitted</p>
                        </div>
                    </div>
                </div>
            )}
            {trigger ? <StudentAssignmentPopup setTrigger={setTrigger} assignment_info={assignment_info} setSubmitted={setSubmitted} /> : ""}
        </>
    )
}
