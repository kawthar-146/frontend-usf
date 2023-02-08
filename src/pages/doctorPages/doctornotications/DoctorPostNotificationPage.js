import React, { useState, useContext } from "react";
import axios from "axios";
import SessionContext from "../../../context/SessionContext";

export default function DoctorPostNotificationPage(props) {
  const {
    session: {
      user: { access_token },
    },
  } = useContext(SessionContext);
  const id = localStorage.getItem('id');
  const [message, setMessage] = useState('');

  async function onSubmit(e) {
    e.nativeEvent.preventDefault();
    const body = new FormData();
    body.append("admin_id", id);
    body.append("message", message);
    addNotification(body);
  }

  const addNotification = async (body) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/createNotification",
        body,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setMessage("");
    } catch {}
    props.getNotifications();
    props.setPostNotification(false);
  };

  return (
    <>
      <div className="popup_student_assignment">
        <div className="popup_student_assignment_content">
          <div className="assignment_content">
            <div className="input_assignment_name">
                <h2>Upload Notification</h2>
            </div>
            <div style={{border: "none"}} className="assignment_description_box">
              <textarea
                style={{
                    height:"100%",
                    width: "100%",
                    margin: "0 auto",
                    outline: "none",
                    fontSize: "1.2rem",
                    color: "#0b3b70",
                    border: "2px solid #0b3b70",
                }}
                placeholder= "Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              >
              </textarea>
            </div>
            <button
                style={{
                    background: "#0b3b70",
                    padding: ".5rem 1rem",
                    borderRadius: ".5rem",
                    border: "none",
                    color: "#ffcb08",
                    fontWeight: "600",
                    cursor: "pointer",
                    marginTop: "2%",
                    float: "right",
                    marginRight: "5%",
                }}
                onClick={onSubmit}
            >
                Upload
            </button>
          </div>
          <span
            onClick={() => props.setPostNotification(false)}
            className="close_student_assignment_popup"
            style={{ fontSize: "1.5rem" }}
          >
            <i class="fal fa-times-circle"></i>
          </span>
        </div>
      </div>
    </>
  );
}
