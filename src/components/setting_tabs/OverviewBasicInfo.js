import React, { useState } from "react";

export default function OverviewBasicInfo() {
  const [basicToggle, setBasicToggle] = useState(false);
  const user = {
    firstname: "Mhamad",
    lastname: "Safa",
    mothername: "Faten",
    fathername: "Ali",
    birthdate: "16/04/2020",
    email: "mhamad@gmail.com",
  };
  return (
    <>
      {!basicToggle && (
        <div className="settings_container">
          <div className="settings_content_inside">
            <div className="settings_title">
              <span>Basic info</span>
              <span
                className="edit_button"
                onClick={() => setBasicToggle(true)}
              >
                Edit
              </span>
            </div>
            <div className="settings_data_grid basic">
              <span>
                {" "}
                First Name:
                <div className="settings_span_div">{user.firstname} </div>
              </span>
              <span>
                Father's Name: <div className="settings_span_div"> Mhamad</div>
              </span>
              <span>
                Birth Date: <div className="settings_span_div">10/10/2020</div>
              </span>
              <span>
                Last Name:<div className="settings_span_div">Safa</div>
              </span>
              <span>
                Mother's Name: <div className="settings_span_div">Safa</div>
              </span>
              <span>
                Email:{" "}
                <div className="settings_span_div">mhamad@gmail.com </div>
              </span>
            </div>
          </div>
        </div>
      )}

      {basicToggle && (
        <div className="settings_container">
          <div className="settings_content_inside">
            <div className="settings_title">
              <span>Basic info</span>
              <span
                className="edit_button"
                onClick={() => setBasicToggle(false)}
              >
                Save
              </span>
            </div>
            <div className="settings_data_grid basic">
              <span>
                {" "}
                First Name:
                <div className="settings_span_div">
                  {" "}
                  <input
                    className="input_edit"
                    type="text"
                    name=""
                    id=""
                    value={user.firstname}
                  />{" "}
                </div>
              </span>
              <span>
                Father's Name:{" "}
                <div className="settings_span_div">
                  {" "}
                  <input className="input_edit" type="text" name="" id="" />
                </div>
              </span>
              <span>
                Birth Date:{" "}
                <div className="settings_span_div">
                  <input className="input_edit" type="text" name="" id="" />
                </div>
              </span>
              <span>
                Last Name:
                <div className="settings_span_div">
                  <input className="input_edit" type="text" name="" id="" />
                </div>
              </span>
              <span>
                Mother's Name:{" "}
                <div className="settings_span_div">
                  <input className="input_edit" type="text" name="" id="" />
                </div>
              </span>
              <span>
                Email:{" "}
                <div className="settings_span_div">
                  {" "}
                  <input className="input_edit" type="text" name="" id="" />
                </div>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
