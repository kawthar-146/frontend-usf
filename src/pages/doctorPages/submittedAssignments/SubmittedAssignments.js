import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DoctorSubmittedAssignment from "../../../components/doctortabs/DoctorSubmittedAssignment";
import DoctorTabs from "../../../components/doctortabs/DoctorTabs";
import DoctorMenu from "../../../components/home/DoctorMenu";
import SessionContext from "../../../context/SessionContext";

export default function SubmittedAssignments(props) {
  const {
    session: {
      user: { access_token },
    },
  } = useContext(SessionContext);
  const [assignments, setAssignments] = useState([]);
  const id = props.location.course_id;
  const name = props.location.course_name;
  
  const getAssignments = async () => {
    const result = await axios.get(
      `http://localhost:8000/api/assignment/index/${id}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    setAssignments(result.data);
  };

  useEffect(() => {
    getAssignments();
  }, []);

  return (
    <div className="course_section">
      <DoctorMenu />
      <div className="home_content margin_left">
        <div className="home_tabs_title_doctor">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Link
              to={{ pathname: "/doctorcourse" , id , name }}
              style={{ textDecoration: "none", color: "#ffcb08" }}
            >
              <h2>
                {" "}
                
                  <span>
                    <i class="fas fa-chevron-left"></i>
                  </span>{" "}
                
                Submitted assignments
              </h2>
            </Link>
            <h4
              style={{
                color: "#ffcb08",
                fontWeight: "600",
                fontSize: ".8rem",
                margin: "0 auto",
              }}
            >
              Select assignment to view and download student's submission
            </h4>
          </div>
        </div>
        <div style={{ marginTop: "4rem" }}>
          {assignments &&
            assignments.length !== 0 &&
            assignments.map((item) => {
              return (
                <div>
                  <DoctorSubmittedAssignment
                    assignment_id={item.id}
                    assignment_name={item.assignment_name}
                    id={id}
                    name={name}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
