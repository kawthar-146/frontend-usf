import {React, useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import StudentSubmittedAssignment from "../../../components/doctortabs/StudentSubmittedAssignment";
import DoctorMenu from "../../../components/home/DoctorMenu";
import { useParams } from "react-router";
import SessionContext from "../../../context/SessionContext";

export default function DoctorViewAssignment(props) {
  const course_id = props.location.id;
  const course_name = props.location.name;
  let { id } = useParams();
  const {
    session: {
      user: { access_token },
    },
  } = useContext(SessionContext);
  const [studentAssignment, setStudentAssignment] = useState([]);

  const getData = async() => {
    let res = await axios.get(`http://localhost:8000/api/submitted/assignment/${id}`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    setStudentAssignment(res.data)
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="course_section">
      <DoctorMenu />
      <div className="home_content margin_left">
        <div className="home_tabs_title_doctor">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Link
              to={{ pathname:"/submittedassignments" , course_id , course_name}}
              style={{ textDecoration: "none", color: "#ffcb08" }}
            >
              <h2>
                {" "}
                
                  <span>
                    <i class="fas fa-chevron-left"></i>
                  </span>{" "}
                
                {props.location.assignment_name}
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
              Downloaded files will be added to your downloads folder.
            </h4>
          </div>
        </div>
        <div style={{ marginTop: "4rem" }}>
          <nav
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "45%",
              marginLeft: "3.5rem",
              marginBottom: "1rem",
              color: "#0b3b70",
            }}
          >
            <span style={{marginRight:"1rem"}}>Student ID</span>
            <span style={{marginRight:"1rem"}}>Student Name</span>
            <span>File Name</span>
          </nav>
          {studentAssignment &&  studentAssignment.length !== 0 && studentAssignment.map(item=>{
            return (
              <StudentSubmittedAssignment studentAssignment={item} />
            )
          })}
        </div>
      </div>
    </div>
  );
}
