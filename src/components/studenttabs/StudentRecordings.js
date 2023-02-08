import React from 'react'
import "./StudentRecordings.css";

export default function StudentRecordings(props) {  
    return (
        <>
            <div className="student_recordings_container">
                <div className="student_recordings_data">
                    <div className="student_recordings_name">
                        <p>{props.recording_name}</p>
                    </div>
                    <div className="student_recordings_info">
                        <p style={{color: "white"}}>Session Subject</p>
                        <a
                            href={`http://localhost:8000/api/downloadRecording/${props.recording_file}`}
                        >
                            <i 
                                style={{
                                    color: "#0b3b70",
                                    cursor: "pointer"
                                }} 
                                class="fa fa-download"
                            >
                            </i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
