import React, { useState , useContext } from "react";
import axios from "axios";
import SessionContext from "../../context/SessionContext";

export default function DoctorUploadLink(props) {
  const {
    session: {
      user: { access_token },
    },
  } = useContext(SessionContext);
  const course_id = props.course_id;
  const [link, setLink] = useState("");
  const [link_description, setLink_description] = useState("");

  async function onSubmit(e) {
    e.nativeEvent.preventDefault();
    const body = new FormData();
    body.append("course_id", course_id);
    body.append("link", link);
    body.append("link_description", link_description);
    addLink(body);
  }

  const addLink = async (body) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/link/store",
        body,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setLink("");
      setLink_description("");
    } catch {}
    props.getLinks();
    props.setUploadLink(false);
  };

  return (
    <div>
      <div className="popup_student_assignment">
        <div className="popup_student_assignment_content_link">
          <div className="assignment_content_link">
            <h2>Upload Link</h2>
            <div className="assignment_description_box_link">
              <input
                style={{
                  padding: ".2rem 1rem",
                  marginLeft: ".5rem",
                  border: "none",
                  outline: "none",
                  color: "#0b3b70",
                  fontSize: "1.2rem",
                  width:"90%"
                }}
                placeholder="Copy and paste your link here"
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <div className="assignment_description_box_link_two">
              <div className="assignment_description_doctor">
                  <textarea
                    style={{
                      height:"90%",
                      border: "none",
                      outline: "none",
                      fontSize: "1.2rem",
                      color: "#0b3b70",
                    }}
                    placeholder= "Enter a short description"
                    value={link_description}
                    onChange={(e) => setLink_description(e.target.value)}
                  >
                  </textarea>
                <div className="assignment_description_buttons_link">
                  <div>
                    <span
                      style={{
                        color: "#ffcb08",
                        cursor: "pointer",
                        fontWeight: "600",
                        marginRight: "1rem",
                      }}
                      onClick={() => props.setUploadLink(false)}
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
            onClick={() => props.setUploadLink(false)}
          >
            <i class="fal fa-times-circle"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
