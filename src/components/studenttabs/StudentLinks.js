import React from 'react'
import "./StudentLinks.css";

export default function StudenLinks(props) {    
    return (
        <>
            <div className="student_files_container">
                <div className="student_files_data">
                    <p 
                        style={{
                            marginLeft: "5%", 
                            color: "white"
                        }}
                    >
                        {props.link_description}
                    </p>
                    <a 
                        style={{
                            marginRight: "5%", 
                            color: "#0b3b70", 
                            textDecoration: "underline", 
                            cursor: "pointer",
                            marginTop: "15px"
                        }}
                        href={`${props.link}`}
                        target="_blank"
                    >
                        Click Here
                    </a>
                </div>
            </div>
        </>
    )
}
