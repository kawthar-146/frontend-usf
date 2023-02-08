import React from "react";
import "./StudentNotification.Popup.css";

export default function StudentNotificationPopup(props) {
    const name = props.name;
    const title = props.title;
    const date = props.date;
    return (
        <>
            <div className="popup_student_notification">
                <div className="popup_student_notification_content">
                    <div className="notification_content">
                        <h2>{title}</h2>
                        <span>{name}</span>
                        <div className="notification_description_box">
                            <div className="notification_description">
                                <p>{props.message}</p>
                                <p className="notification_date">{date}</p>
                            </div>
                        </div>
                    </div>
                    <span onClick={()=>props.setTrigger(false)} className="close_student_notification_popup">
                        x
                    </span>
                </div>
            </div>
        </>
    )
}