import React, { useState, useContext } from "react";
import axios from "axios";
import SessionContext from "../../context/SessionContext";

export default function EditDoctorBasicInfo(props) {
  const {
    session: {
      user: { access_token },
    },
  } = useContext(SessionContext);

  const infoData = props.infoData;
  const [basicInfoToggle, setBasicInfoToggle] = useState(false);
  const id = localStorage.getItem("id");

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [fathername, setFathername] = useState("");
  const [mothername, setMothername] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");

  let x = {};
  let inputs = {};

  async function onSubmit(e) {
    e.nativeEvent.preventDefault();
    if (firstname !== "") x.firstname = firstname;
    if (lastname !== "") x.lastname = lastname;
    if (fathername !== "") x.fathername = fathername;
    if (mothername !== "") x.mothername = mothername;
    if (birthdate !== "") x.birthdate = birthdate;
    if (email !== "") x.email = email;
    if (
      x.hasOwnProperty("firstname") ||
      x.hasOwnProperty("lastname") ||
      x.hasOwnProperty("fathername") ||
      x.hasOwnProperty("mothername") ||
      x.hasOwnProperty("birthdate") ||
      x.hasOwnProperty("email")
    ) {
      inputs = x;
      updateInfo(inputs);
    }
    setBasicInfoToggle(false);
    setFirstname("");
    setLastname("");
    setFathername("");
    setMothername("");
    setBirthdate("");
    setEmail("");
  }

  const updateInfo = async (info) => {
    try {
      const result = await axios.put(
        `http://localhost:8000/api/admins/editDoctor/${id}`,
        info,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch {}
    props.getData();
  };

  return (
    <>
      {!basicInfoToggle && (
        <div className="settings_container">
          <div className="settings_content_inside">
            <div className="settings_title">
              <span>Basic info</span>
              <span
                className="edit_button"
                onClick={() => setBasicInfoToggle(true)}
              >
                Edit
              </span>
            </div>
            <div className="settings_data_grid basic">
              <span>
                {" "}
                First Name:
                <div className="settings_span_div">{infoData.firstname}</div>
              </span>
              <span>
                Father's Name:{" "}
                <div className="settings_span_div">{infoData.fathername}</div>
              </span>
              <span>
                Birth Date:{" "}
                <div className="settings_span_div">{infoData.birthdate}</div>
              </span>
              <span>
                Last Name:
                <div className="settings_span_div">{infoData.lastname}</div>
              </span>
              <span>
                Mother's Name:{" "}
                <div className="settings_span_div">{infoData.mothername}</div>
              </span>
              <span>
                Email: <div className="settings_span_div">{infoData.email}</div>
              </span>
            </div>
          </div>
        </div>
      )}
      {basicInfoToggle && (
        <form onSubmit={onSubmit}>
          <div className="settings_container">
            <div className="settings_content_inside">
              <div className="settings_title">
                <span>Basic info</span>
                <span className="edit_button">
                  <button
                    style={{
                      border: "none",
                      background: "none",
                      cursor: "pointer",
                      fontSize: "0.8rem",
                      fontWeight: "500",
                      color: "#ffcb08",
                      padding: "0",
                    }}
                    type="submit"
                  >
                    Save
                  </button>
                </span>
              </div>
              <div className="settings_data_grid basic">
                <span>
                  {" "}
                  First Name:
                  <div className="settings_span_div">
                    <input
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      type="text"
                      className="input_edit"
                    />
                  </div>
                </span>
                <span>
                  Father's Name:{" "}
                  <div className="settings_span_div">
                    <input
                      value={fathername}
                      onChange={(e) => setFathername(e.target.value)}
                      type="text"
                      className="input_edit"
                    />
                  </div>
                </span>
                <span>
                  Birth Date:{" "}
                  <div className="settings_span_div">
                    <input
                      value={birthdate}
                      onChange={(e) => setBirthdate(e.target.value)}
                      type="date"
                      className="input_edit"
                    />
                  </div>
                </span>
                <span>
                  Last Name:
                  <div className="settings_span_div">
                    <input
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      type="text"
                      className="input_edit"
                    />
                  </div>
                </span>
                <span>
                  Mother's Name:{" "}
                  <div className="settings_span_div">
                    <input
                      value={mothername}
                      onChange={(e) => setMothername(e.target.value)}
                      type="text"
                      className="input_edit"
                    />
                  </div>
                </span>
                <span>
                  Email:{" "}
                  <div className="settings_span_div">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="input_edit"
                    />
                  </div>
                </span>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
}
