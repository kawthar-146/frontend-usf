import React, { useState } from "react";

export default function OverviewAddress() {
  const [addressToggle, setAddressToggle] = useState(false);
  return (
    <>
      {!addressToggle && (
        <div className="settings_container">
          <div className="settings_content_inside">
            <div className="settings_title">
              <span>Address</span>
              <span
                className="edit_button"
                onClick={() => setAddressToggle(true)}
              >
                Edit
              </span>
            </div>
            <div className="settings_data_grid-address">
              <span>
                {" "}
                Home address:
                <div className="settings_span_div">
                  Home address jshd jsjsj jdhdheh jddhd
                </div>
              </span>
              <span>
                Phone number: <div className="settings_span_div"> 76553526</div>
              </span>
            </div>
          </div>
        </div>
      )}
      {addressToggle && (
        <div className="settings_container">
          <div className="settings_content_inside">
            <div className="settings_title">
              <span>Address</span>
              <span
                className="edit_button"
                onClick={() => setAddressToggle(false)}
              >
                Save
              </span>
            </div>
            <div className="settings_data_grid-address">
              <span>
                {" "}
                Home address:
                <div className="settings_span_div">
                  <input type="text" className="input_edit" />
                </div>
              </span>
              <span>
                Phone number:{" "}
                <div className="settings_span_div">
                  <input type="text" className="input_edit" />
                </div>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
