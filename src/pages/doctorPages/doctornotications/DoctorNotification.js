import React, { useState } from 'react'
import DoctorNotificationPopup from "./DoctorNotification.Popup";
import "./DoctorNotification.css";
import girl from "../../../images/girl_profile";
import boy from "../../../images/boy_profile";
import picture from "../../../images/student.svg";

export default function DoctorNotification(props) {
    const title = "Monthly Meeting"
    const date = props.notification_date;
    const [trigger, setTrigger] = useState(false);
    return (
        <>
            <div style={{cursor: "pointer"}} onClick={()=>setTrigger(true)} className="doctor_notification_container">
                <div className="doctor_notification_data">
                    <div className="doctor_notification_name">
                        <img 
                            className="doctor_notification_img" 
                            src={props.admin.image ? `http://localhost:8000/image/${props.admin.image.picture}` : picture} 
                            alt="profile_pic"
                        />
                        <p>{props.admin.firstname}</p>
                    </div>
                    <div className="doctor_notification_info">
                        <p>{title}</p>
                    </div>
                    <div className="doctor_notification_play">
                        <p style={{color: "#0b3b70"}}>{props.notification_date}</p>
                    </div>
                </div>
            </div>
            {trigger ? <DoctorNotificationPopup setTrigger={setTrigger} message={props.message} name={props.admin.firstname} title={title} date={date}/> : ""}
        </>
    )
}