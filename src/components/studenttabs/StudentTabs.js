import React, { useState , useContext , useEffect, } from "react";
import axios from "axios";
import SessionContext from "../../context/SessionContext";
import StudentGradesTab from "./StudentGradesTab";
import StudentAssignmentsTab from "./StudentAssignmentsTab";
import StudentLinksTab from "./StudentLinksTab";
import StudentFilesTab from "./StudentFilesTab";
import StudentRecordingsTab from "./StudentRecordingsTab";
import StudentDiscussionTab from "./StudentDiscussionTab";
import { Link } from "react-router-dom";

export default function StudentTabs(props) {
  const {
    session: {
      user: { access_token },
    },
  } = useContext(SessionContext);
  const course_id = props.course_id;
  const [toggleState, setToggleState] = useState(1);
  const [assignments, setAssignments] = useState();
  const [files, setFiles] = useState();
  const [links, setLinks] = useState();
  const [recordings, setRecordings] = useState();

  const getStudentCourseInfo = async () => {
    const result = await axios.get(`http://localhost:8000/api/courses/getStudentCourse/${course_id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });
    setAssignments(result.data.assignments);
    setFiles(result.data.files);
    setLinks(result.data.links);
    setRecordings(result.data.recordings);
  }


  useEffect(() => {
    getStudentCourseInfo();
  }, []);

  return (
    <div className="home_content">
      <div className="home_tabs_title">
        <Link to="/studenthome" style={{textDecoration: "none" ,color: "#ffcb08"}}>
          <h2>
            {" "}
            <span>
              <i class="fas fa-chevron-left"></i>
            </span>{" "}
            Classes
          </h2>
        </Link>
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
            Grades
          </div>
          <div
            onClick={() => setToggleState(4)}
            className={toggleState === 4 ? "active_tab" : "tabs_title"}
          >
            Files
          </div>
          <div
            onClick={() => setToggleState(5)}
            className={toggleState === 5 ? "active_tab" : "tabs_title"}
          >
            Links
          </div>
          <div
            onClick={() => setToggleState(6)}
            className={toggleState === 6 ? "active_tab" : "tabs_title"}
          >
            Recordings
          </div>
        </nav>
        <StudentGradesTab toggleState={toggleState} />
        <StudentDiscussionTab toggleState={toggleState} />
        <StudentFilesTab toggleState={toggleState} files={files} />
        <StudentLinksTab toggleState={toggleState} links={links} />
        <StudentRecordingsTab toggleState={toggleState} recordings={recordings} />
        <StudentAssignmentsTab toggleState={toggleState} assignments={assignments} />
      </div>
    </div>
  );
}
