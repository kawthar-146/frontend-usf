import React, { useContext , useState } from "react";
import axios from "axios";
import DoctorDeleteAssignment from "./DoctorDeleteAssignment";
import SessionContext from "../../context/SessionContext";

export default function DoctorAssignment(props) {
  const assignment_id = props.id;
  const [deleteAssignmentTab, setDeleteAssignmentTab] = useState(false);
  
  const {
    session: {
      user: { access_token },
    },
  } = useContext(SessionContext);

  const deleteAssignment = async () => {
    const result = await axios.delete(`http://localhost:8000/api/assignment/delete/${assignment_id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });
    props.getAssignments();
  }

  return (
    <>
    <div className="student_assignment_container_doctor">
      <div className="student_assignment_data_edit_doctor">
        <div className="student_assignment_title_doctor">
          <span>
            {" "}
            <i style={{cursor: "pointer"}} class="fas fa-trash-alt" onClick={() => setDeleteAssignmentTab(true)}></i>
          </span>
          <span style={{width: "120px"}}>{props.name}</span>
        </div>
        <div className="student_assignment_info_doctor_inside">
          <p>{props.reveal_date}</p>
          <p>{props.deadline}</p>
          <p>Yes</p>
          {props.graded === 1 ? <p>Yes</p> : <p>No</p>}
        </div>
        <div className="student_assignment_play">
          <p style={{ color: "#0b3b70", cursor: "pointer" }}>Edit Date</p>
          <p style={{ color: "#0b3b70" }}>
            <i class="fas fa-play"></i>
          </p>
        </div>
      </div>
    </div>
    {deleteAssignmentTab ? (
      <DoctorDeleteAssignment
        setDeleteAssignmentTab={setDeleteAssignmentTab}
        deleteAssignment={deleteAssignment}
      />
    ) : (
      ""
    )}
    </>
  );
}
