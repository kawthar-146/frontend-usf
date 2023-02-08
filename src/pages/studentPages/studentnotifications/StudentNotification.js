import React, { useState } from 'react'
import StudentNotificationPopup from "./StudentNotification.Popup";
import "./StudentNotification.css";
import girl from "../../../images/girl_profile";
import boy from "../../../images/boy_profile";
import picture from "../../../images/student.svg";

export default function StudentNotification(props) {
    const sex = props.sex;
    const name = props.name;
    const title = "Monthly Meeting"
    const date = props.notification_date;
    const [trigger, setTrigger] = useState(false);
    return (
        <>
            <div style={{cursor: "pointer"}} onClick={()=>setTrigger(true)} className="student_notification_container">
                <div className="student_notification_data">
                    <div className="student_notification_name">
                        <img 
                            className="student_notification_img" 
                            src={props.admin.image ? `http://localhost:8000/image/${props.admin.image.picture}` : picture}  
                            alt="profile_pic"
                        />
                        <p>{props.admin.firstname}</p>
                    </div>
                    <div className="student_notification_info">
                        <p>{title}</p>
                    </div>
                    <div className="student_notification_play">
                        <p style={{color: "#0b3b70"}}>{props.notification_date}</p>
                    </div>
                </div>
            </div>
            {trigger ? <StudentNotificationPopup setTrigger={setTrigger} message={props.message} name={props.admin.firstname} title={title} date={date}/> : ""}
        </>
    )
}
