import React, { useContext , useState } from "react";
import axios from "axios";
import SessionContext from "../../context/SessionContext";
import DoctorDeleteRecording from "./DoctorDeleteRecording";

export default function DoctorRecording(props) {
    const {
        session: {
            user: { access_token },
        },
    } = useContext(SessionContext);

    const [deleteRecordingTab, setDeleteRecordingTab] = useState(false);

    const deleteFile = async () => {
        const result = await axios.delete(`http://localhost:8000/api/recording/delete/${props.id}`, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });
        props.getRecordings();
    }

    return (
    <>
        <div className="student_assignment_container_doctor" style={{ marginTop: ".5rem" }}>
            <div className="student_assignment_data_edit_doctor">
                <div className="student_assignment_title_doctor">
                    <span>
                        <i onClick={() => setDeleteRecordingTab(true)} class="fas fa-trash-alt" style={{cursor: "pointer"}}></i>
                    </span>
                    <span style={{ marginLeft: "2rem" }}>{props.recording_name}</span>
                </div>
                <span style={{color: "white", marginRight:"4rem"}}>Session subject</span>
                <p style={{ color: "#0b3b70", marginRight: "1rem" }}>
                    <i class="far fa-arrow-to-bottom"></i>
                </p>
            </div>
        </div>
        {deleteRecordingTab ? (
        <DoctorDeleteRecording
            setDeleteRecordingTab={setDeleteRecordingTab}
            deleteFile={deleteFile}
        />
        ) : (
            ""
        )}
    </>
    );
}