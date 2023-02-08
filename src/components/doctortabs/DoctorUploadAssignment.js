import React, { useState, useContext } from "react";
import axios from "axios";
import SessionContext from "../../context/SessionContext";
import DoctorSetAssignmentDate from "./DoctorSetAssignmentDate";
import { FileUploader } from "react-drag-drop-files";

export default function DoctorUploadAssignment(props) {
  const course_id = props.course_id;
  const {
    session: {
      user: { access_token },
    },
  } = useContext(SessionContext);
  const [dateTrigger, setDateTrigger] = useState(false);
  const fileTypes = ["JPG", "PNG", "GIF", "PDF"];
  const [assignment_file, setAssignment_file] = useState(null);
  const [assignment_name, setAssignment_name] = useState("");
  const [reveal_date, setReveal_date] = useState("");
  const [deadline, setDeadline] = useState("");
  const [checked, setChecked] = useState(true);
  const [notify, setNotify] = useState();
  let graded;

  const handleChange = (assignment_file) => {
    setAssignment_file(assignment_file);
  };

  async function onSubmit(e) {
    e.nativeEvent.preventDefault();
    const body = new FormData();
    if (checked) {
      graded = 1;
    } else {
      graded = 0;
    }
    body.append("course_id", course_id);
    body.append("assignment_name", assignment_name);
    body.append("assignment_file", assignment_file);
    body.append("deadline", deadline);
    body.append("reveal_date", reveal_date);
    body.append("graded", graded);
    addAssignment(body);
  }

  const addAssignment = async (body) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/assignment/store",
        body,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data === "success") {
        setNotify(true);
      } else {
        setNotify(false);
      }
      setAssignment_name("");
      setAssignment_file(null);
      setDeadline("");
      setReveal_date("");
    } catch {}
    props.getAssignments();
    props.setUploadAssignment(false);
  };

  return (
    <>
      <div className="popup_student_assignment">
        <div className="popup_student_assignment_content">
          <div className="assignment_content">
            <div className="input_assignment_name">
              <input
                value={assignment_name}
                onChange={(e) => setAssignment_name(e.target.value)}
                type="text"
                placeholder="Enter assignment name"
              />
            </div>
            <div className="assignment_description_box">
              <div className="assignment_description_doctor">
                <p>Drag the file you want to upload</p>
                <FileUploader
                  handleChange={handleChange}
                  name="file"
                  types={fileTypes}
                />
                <div className="assignment_description_buttons">
                  <div>
                    <input
                      type="checkbox"
                      defaultChecked={checked}
                      onChange={() => setChecked(!checked)}
                    />
                    <span style={{ color: "#0b3b70", fontWeight: "600" }}>
                      Graded
                    </span>
                  </div>
                  <div>
                    <span
                      style={{
                        color: "#ffcb08",
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: "600",
                        marginRight: "1rem",
                      }}
                      onClick={() => setDateTrigger(true)}
                    >
                      {" "}
                      Set Date
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
                      onClick={onSubmit}
                    >
                      Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {notify && notify === true && (
            <p style={{ textAlign: "center", color: "green" }}>Successful</p>
          )}
          {notify && notify === false && (
            <p style={{ textAlign: "center", color: "red" }}>failed</p>
          )}
          <span
            onClick={() => props.setUploadAssignment(false)}
            className="close_student_assignment_popup"
            style={{ fontSize: "1.5rem" }}
          >
            <i class="fal fa-times-circle"></i>
          </span>
        </div>
      </div>
      {dateTrigger ? (
        <DoctorSetAssignmentDate
          setDateTrigger={setDateTrigger}
          setReveal_date={setReveal_date}
          setDeadline={setDeadline}
        />
      ) : (
        ""
      )}
    </>
  );
}
