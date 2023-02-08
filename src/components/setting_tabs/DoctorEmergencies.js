import React from "react";

export default function DoctorEmergencies(props) {
  return (
    <div className={props.toggleState !== 3 ? "unactive_content" : "block"}>
      <div className="settings_container">
        <div className="settings_content_inside">
          <div className="settings_title">
            <span>Emergency 1</span>
          </div>
          <div className="settings_data_grid basic">
            <span>
              {" "}
             Name: <div className="settings_span_div">Secreteria </div>
            </span>
            <span>
              Office Number: <div className="settings_span_div"> required</div>
            </span>
            <span>
              Email: <div className="settings_span_div">j@gmail.com</div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
