import React, { useState } from "react";
import CalnedarImage from "../../images/calendar_image";

export default function DoctorSetFilesDate(props) {
  return (
    <div className="popup_student_assignment">
      <div className="popup_doctor_assignment_content">
        <div className="popup_doctor_setdate_assignment_uppercontainer">
          <p>Set Date</p>
        </div>
        <div className="popup_doctor_setdate_assignment_lowercontainer">
          <div className="set_reveal_date_info">
            <p>Set Reveal Date <span>File will appear in</span></p>
            <div className="set_reveal_date">
              <div className="set_reveal_date_image_and_calendar">
                <div className="set_reveal_date_image">
                  <img src={CalnedarImage} alt="calendar image"/>
                </div>
                <div style={{marginTop: "5px"}} className="set_reveal_date_calendar">
                  <input 
                    type="datetime-local" 
                    onChange={(e) => props.setReveal_date(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="set_deadline">     
              <div style={{float: "right"}}>
                <div>
                  <span
                    style={{
                      color: "#ffcb08",
                      cursor: "pointer",
                      fontWeight: "600",
                      marginRight: "1rem",
                    }}
                    onClick={() => props.setDateTrigger(false)}
                  >
                    {" "}
                    Cancel
                  </span>
                  <button
                    style={{
                      background: "#0b3b70",
                      padding: ".5rem 1rem",
                      borderRadius: ".5rem",
                      border: "none",
                      color: "#ffcb08",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                    onClick={() => props.setDateTrigger(false)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span
          onClick={() => props.setDateTrigger(false)}
          className="close_student_assignment_popup"
          style={{ fontSize: "1.5rem" }}
        >
          <i class="fal fa-times-circle"></i>
        </span>
      </div>
    </div>
  );
}
