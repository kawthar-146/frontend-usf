import React, { useState } from "react";

export default function EditDoctorAddress(props) {
  const infoData = props.infoData;
  const [addressToggle, setAddressToggle] = useState(false);
  return (
    <div>
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
                  {infoData.homeaddress}
                </div>
              </span>
              <span>
                Phone number: <div className="settings_span_div">{infoData.phonenumber}</div>
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
                  {" "}
                  <input type="text" className="input_edit" />
                </div>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
