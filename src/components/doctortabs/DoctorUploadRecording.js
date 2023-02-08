import React, { useState , useContext } from "react";
import axios from "axios";
import SessionContext from "../../context/SessionContext";
import { FileUploader } from "react-drag-drop-files";

export default function DoctorUploadRecording(props) {
  const {
    session: {
      user: { access_token },
    },
  } = useContext(SessionContext);
  const course_id = props.course_id;
  const [recording_name, setRecording_name] = useState("");
  const [recording_file, setRecording_file] = useState(null);
  const fileTypes = ["JPG", "PNG", "GIF", "PDF"];

  const handleChange = (recording_file) => {
    setRecording_file(recording_file);
  };

  async function onSubmit(e) {
    e.nativeEvent.preventDefault();
    const body = new FormData();
    body.append("course_id", course_id);
    body.append("recording_name", recording_name);
    body.append("recording_file", recording_file);
    addRecording(body);
  }

  const addRecording = async (body) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/recording/store",
        body,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setRecording_name("");
      setRecording_file(null);
    } catch {}
    props.getRecordings();
    props.setUploadRecording(false);
  };

  return (
    <div className="popup_student_assignment">
      <div className="popup_student_assignment_content">
        <div className="assignment_content">
          <div className="input_assignment_name">
            <input
              value={recording_name}
              onChange={(e) => setRecording_name(e.target.value)}
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
                </div>
                <div>
                  <span
                    style={{
                      color: "#ffcb08",
                      cursor: "pointer",
                      fontWeight: "600",
                      marginRight: "1rem",
                    }}
                    onClick={() => props.setUploadRecording(false)}
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
        <span
          className="close_student_assignment_popup"
          style={{ fontSize: "1.5rem" }}
          onClick={() => props.setUploadRecording(false)}
        >
          <i class="fal fa-times-circle"></i>
        </span>
      </div>
    </div>
  );
}
