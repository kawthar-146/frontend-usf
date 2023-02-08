import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import SessionContext from "../../context/SessionContext";
import DoctorAssignmentsTab from "./DoctorAssignmentsTab";
import DoctorLinksTab from "./DoctorLinksTab";
import DoctorFilesTab from "./DoctorFilesTab";
import DoctorRecordingsTab from "./DoctorRecordingsTab";
import DoctorDiscussionTab from "./DoctorDiscussionTab";
import { Link } from "react-router-dom";
import DoctorUploadAssignment from "./DoctorUploadAssignment";
import DoctorUploadFile from "./DoctorUploadFile";
import DoctorUploadLink from "./DoctorUploadLink";
import DoctorUploadRecording from "./DoctorUploadRecording";

export default function DoctorTabs(props) {
  const {
    session: {
      user: { access_token },
    },
  } = useContext(SessionContext);
  const course_id = props.course_id;
  const course_name = props.course_name;
  const [toggleState, setToggleState] = useState(1);
  const [uplaodAssignment, setUploadAssignment] = useState(false);
  const [uploadFile, setUploadFile] = useState(false);
  const [uploadLink, setUploadLink] = useState(false);
  const [uploadRecording, setUploadRecording] = useState(false);
  const [assignments, setAssignments] = useState();
  const [files, setFiles] = useState();
  const [links, setLinks] = useState();
  const [recordings, setRecordings] = useState();

  const getAssignments = async () => {
    const result = await axios.get(`http://localhost:8000/api/assignment/index/${course_id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });
    setAssignments(result.data);
  }

  const getFiles = async () => {
    const result = await axios.get(`http://localhost:8000/api/file/index/${course_id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });
    setFiles(result.data);
  }

  const getLinks = async () => {
    const result = await axios.get(`http://localhost:8000/api/link/index/${course_id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });
    setLinks(result.data);
  }

  const getRecordings = async () => {
    const result = await axios.get(`http://localhost:8000/api/recording/index/${course_id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });
    setRecordings(result.data);
  }

  useEffect(() => {
    localStorage.setItem("course_id", course_id);
    getAssignments();
    getFiles();
    getLinks();
    getRecordings();
  }, []);

  return (
    <div className="home_content">
      <div className="home_tabs_title_doctor">
        <Link
          to="/studenthome"
          style={{ textDecoration: "none", color: "#ffcb08" }}
        >
          <h2>
            {" "}
            <span>
              <i class="fas fa-chevron-left"></i>
            </span>{" "}
            {course_name} Class 
          </h2>
        </Link>
        {toggleState === 2 ? (
          <div className="submitted_assignments_doctors">
            <Link
              className="link_submitted_assignments"
              to={{ pathname:"/submittedassignments", course_id , course_name }}
            >
              <span className="submitted_assignments_link">
                Submitted Assignments
              </span>
            </Link>
            <button
              onClick={() => setUploadAssignment(true)}
              className="update_assignment_button"
            >
              Upload Assignment
            </button>
          </div>
        ) : null}

        {toggleState === 3 ? (
          <div
            style={{ marginRight: "2rem" }}
            className="submitted_assignments_doctors"
          >
            <button
              style={{ borderRadius: ".8rem", fontWeight: "600" }}
              className="update_assignment_button"
              onClick={() => setUploadFile(true)}
            >
              Upload file
            </button>
          </div>
        ) : null}

        {toggleState === 4 ? (
          <div
            style={{ marginRight: "2rem" }}
            className="submitted_assignments_doctors"
          >
            <button
              style={{ borderRadius: ".8rem", fontWeight: "600" }}
              className="update_assignment_button"
              onClick={() => setUploadLink(true)}
            >
              Upload link
            </button>
          </div>
        ) : null}
        {toggleState === 5 ? (
          <div
            style={{ marginRight: "2rem" }}
            className="submitted_assignments_doctors"
          >
            <button
              style={{ borderRadius: ".8rem", fontWeight: "600" }}
              className="update_assignment_button"
              onClick={() => setUploadRecording(true)}
            >
              Upload recording
            </button>
          </div>
        ) : null}
      </div>
      <div class="tabs_blocks">
        <nav className="tabs_titles">
          <div
            onClick={() => setToggleState(1)}
            className={toggleState === 1 ? "active_tab" : "tabs_title"}
          >
            Discussion
          </div>
          <div
            onClick={() => setToggleState(2)}
            className={toggleState === 2 ? "active_tab" : "tabs_title"}
          >
            Assignment
          </div>
          <div
            onClick={() => setToggleState(3)}
            className={toggleState === 3 ? "active_tab" : "tabs_title"}
          >
            Files
          </div>
          <div
            onClick={() => setToggleState(4)}
            className={toggleState === 4 ? "active_tab" : "tabs_title"}
          >
            Links
          </div>
          <div
            onClick={() => setToggleState(5)}
            className={toggleState === 5 ? "active_tab" : "tabs_title"}
          >
            Recordings
          </div>
        </nav>
        <DoctorDiscussionTab toggleState={toggleState} />
        <DoctorFilesTab toggleState={toggleState} files={files} getFiles={getFiles}/>
        <DoctorLinksTab toggleState={toggleState} links={links} getLinks={getLinks}/>
        <DoctorRecordingsTab toggleState={toggleState} recordings={recordings} getRecordings={getRecordings}/>
        <DoctorAssignmentsTab toggleState={toggleState} course_id={course_id} assignments={assignments} getAssignments={getAssignments}/>
      </div>
      {uploadFile ? <DoctorUploadFile setUploadFile={setUploadFile} getFiles={getFiles} course_id={course_id}/> : ""}
      {uploadLink ? <DoctorUploadLink setUploadLink={setUploadLink} getLinks={getLinks} course_id={course_id}/> : ""}
      {uplaodAssignment ? (
        <DoctorUploadAssignment setUploadAssignment={setUploadAssignment} course_id={course_id} getAssignments={getAssignments}/>
      ) : (
        ""
      )}
      {uploadRecording? <DoctorUploadRecording setUploadRecording={setUploadRecording} course_id={course_id} getRecordings={getRecordings}/> : ""}
    </div>
  );
}
