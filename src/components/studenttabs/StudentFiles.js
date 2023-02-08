import React from 'react'
import "./StudentFiles.css";

export default function StudenFiles(props) {  
    return (
        <>
            <div className="student_files_container">
                <div className="student_files_data">
                    <p style={{marginLeft: "5%", color: "white"}}>{props.file_name}</p>
                    <a
                        href={`http://localhost:8000/api/downloadFile/${props.file}`}
                    >
                        <i 
                            style={{
                                marginRight: "5%", 
                                color: "#0b3b70"
                            }} 
                            class="fa fa-download">
                        </i>
                    </a>
                </div>
            </div>
        </>
    )
}
