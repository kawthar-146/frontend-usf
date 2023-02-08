import axios from "axios";
import React, { useContext , useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import SessionContext from "../../context/SessionContext";
import "./StudentAssignment.Popup.css";

export default function StudentAssignmentSubmitPopup(props) {
  const fileTypes = ["JPG", "PNG", "GIF", "PDF"];
  const [submitted_file, setSubmitted_file] = useState(null);

  const {
    session: {
      user: { access_token },
    },
  } = useContext(SessionContext);

  const handleChange = (file) => {
    setSubmitted_file(file);
  };

  async function onSubmit(e) {
    e.nativeEvent.preventDefault();
    const body = new FormData();
    body.append("user_id", props.user_id);
    body.append("assignment_id", props.assignment_id);
    body.append("submitted_file", submitted_file);
    addFile(body);
  }

  const addFile = async (body) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/users/submit/assignment",
        body,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch {}
    setSubmitted_file(null);
    props.setSubmitTrigger(false);
    props.setTrigger(false);
    props.setSubmitted(true);
  };

  return (
    <div className="popup_student_assignment">
      <div className="popup_student_assignment_content">
        <div className="assignment_content">
          <h2 style={{ marginLeft: "5%" }}>Upload File</h2>
          <div className="assignment_description_box">
            <div className="assignment_description">
              <FileUploader
                handleChange={handleChange}
                name="file"
                types={fileTypes}
              />
              <div className="assignment_submit_description_buttons">
                <button
                  onClick={() => props.setSubmitTrigger(false)}
                  style={{ backgroundColor: "white" }}
                  className="assignment_submit_buttons"
                >
                  Cancel
                </button>
                <button className="assignment_submit_buttons" onClick={onSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </div>
        <span
          onClick={() => props.setSubmitTrigger(false)}
          className="close_student_assignment_popup"
        >
          x
        </span>
      </div>
    </div>
  );
}
