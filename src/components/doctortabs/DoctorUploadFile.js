import React, { useState , useContext } from "react";
import axios from "axios";
import SessionContext from "../../context/SessionContext";
import DoctorSetFilesDate from "./DoctorSetFilesDate";
import { FileUploader } from "react-drag-drop-files";

export default function DoctorUploadFile(props) {
  const {
    session: {
      user: { access_token },
    },
  } = useContext(SessionContext);
  const course_id = props.course_id;
  const [dateTrigger, setDateTrigger] = useState(false);
  const [file, setFile] = useState(null);
  const [file_name, setFile_name] = useState("");
  const [reveal_date, setReveal_date] = useState("");
  const fileTypes = ["JPG", "PNG", "GIF", "PDF"];
  const [notify, setNotify] = useState();

  const handleChange = (file) => {
    setFile(file);
  };

  async function onSubmit(e) {
    e.nativeEvent.preventDefault();
    const body = new FormData();
    body.append("course_id", course_id);
    body.append("file_name", file_name);
    body.append("file", file);
    body.append("reveal_date", reveal_date);
    addFile(body);
  }

  const addFile = async (body) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/file/store",
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
      setFile_name("");
      setFile(null);
      setReveal_date("");
    } catch {}
    props.getFiles();
    props.setUploadFile(false);
  };

  return (
    <div className="popup_student_assignment">
      <div className="popup_student_assignment_content">
        <div className="assignment_content">
          <div className="input_assignment_name">
            <input
              value={file_name}
              onChange={(e) => setFile_name(e.target.value)}
              type="text"
              placeholder="Enter file name"
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
                  <span
                    style={{
                      color: "#ffcb08",
                      fontWeight: "600",
                      textDecoration: "underline",
                      cursor: "pointer"
                    }}
                    onClick={() => setDateTrigger(true)}
                  >
                    Set Date
                  </span>
                </div>
                <div>
                  <span
                    style={{
                      color: "#ffcb08",
                      cursor: "pointer",
                      fontWeight: "600",
                      marginRight: "1rem",
                    }}
                    onClick={() => props.setUploadFile(false)}
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
          className="close_student_assignment_popup"
          style={{ fontSize: "1.5rem" }}
          onClick={() => props.setUploadFile(false)}
        >
          <i class="fal fa-times-circle"></i>
        </span>
      </div>
      {dateTrigger ? (
        <DoctorSetFilesDate 
          setDateTrigger={setDateTrigger} 
          setReveal_date={setReveal_date}
        />
      ) : (
        ""
      )}
    </div>
  );
}
