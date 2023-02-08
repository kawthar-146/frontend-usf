import React from "react";
import "./Discussion.css";
import student from "../../images/student.svg";

export default function DoctorDiscussionTab(props) {
  return (
    <div className={props.toggleState !== 1 ? "unactive_content" : "block"}>
      <div className="discussion_section">
        <div className="discussion_container">
          <h2>Class chat</h2>
          <div className="discussion_chat_container">
            <div className="sender_container">
              <div className="sender_image">
                <img src={student} alt="" />
              </div>
              <div className="sender_messages">
                <span
                  style={{
                    color: "#ffcb08",
                    padding: ".5rem",
                    fontSize: ".9rem",
                  }}
                >
                  Name
                </span>
                <span
                  style={{ color: "#0b3b70", padding: "0 .5rem .5rem .5rem" }}
                >
                  Hello I am here
                </span>
              </div>
            </div>
            <div className="user_container">
              <div className="sender_image">
                <img src={student} alt="" />
              </div>
              <div className="sender_messages">
                <span
                  style={{
                    color: "#ffcb08",
                    padding: ".5rem",
                    fontSize: ".9rem",
                  }}
                >
                  Name
                </span>
                <span
                  style={{ color: "#0b3b70", padding: "0 .5rem .5rem .5rem" }}
                >
                  Hello I am here
                </span>
              </div>
            </div>
          </div>
          <div className="discussion_message">
            <input type="text" placeholder="Enter your message ..." />
            <button>Send</button>
          </div>
        </div>
        <div className="discussion_students">helo</div>
      </div>
    </div>
  );
}
