import React, { useState , useContext , useEffect } from "react";
import axios from "axios";
import { Link , useHistory } from "react-router-dom";
import SessionContext from "../../../context/SessionContext";
import DoctorAttendanceStatus from "../../../components/DoctorAttendanceStatus";
import DoctorMenu from "../../../components/home/DoctorMenu";

export default function DoctorAttendanceClassPage(props) {
  const {
    session: {
      user: { access_token },
    },
  } = useContext(SessionContext);
  let history = useHistory();
  const c_id = props.location.course_id;
  const values = { course_id: props.location.course_id , date: props.location.attendance_date };
  const [attendaceId , setAttendaceId] = useState('');
  const [students , setStudents] = useState([]);
  const [checked, setChecked] = useState(true);
  const [studentAttendanceValues , setStudentAttendanceValues] = useState([]);

  const addAttendance = async (body) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/attendance/store",
        values,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setAttendaceId(res.data);
    } catch {}
  };

  const getStudents = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/attendance/index/${c_id}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setStudents(res.data);
    } catch {}
  };

  async function onSubmit(e) {
    e.nativeEvent.preventDefault();
    addRecords(studentAttendanceValues);
  }

  const addRecords = async (studentAttendanceValues) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/attendanceRecord/store",
        studentAttendanceValues,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setAttendaceId('');
      history.push({ pathname: "/doctorattendance" });
    } catch {}
  };

  useEffect(() => {
    addAttendance();
    getStudents();
  }, []);

  useEffect(() => {
    if(students.length > 0) {
      students.map((student) => {
        setStudentAttendanceValues((prev) => {
          return [...prev, 
            {
              "user_id":student.user_id, 
              "attendance": checked,
              "attendance_id": attendaceId
            }
          ];
        })
      })
    }
  }, [students]);

  const aa = (id) => {
    let index = studentAttendanceValues.map(function (e) {return e.user_id}).indexOf(id)
    studentAttendanceValues[index].attendance = !studentAttendanceValues[index].attendance;
  }
  
  return (
    <div className="course_section">
      <DoctorMenu />
      <div className="asd">
        <div className="home_content">
          <div className="home_tabs_title_doctor">
            <div>
              <Link to="/doctorattendance" style={{textDecoration: "none"}}>
                <h2 style={{ fontWeight: "500" }}>
                  {" "}
                    <span
                      style={{
                        fontSize: "1.5rem",
                        marginRight: ".5rem",
                        cursor: "pointer",
                      }}
                    >
                      <i class="fas fa-chevron-left"></i>
                    </span>
                  Class name
                </h2>
              </Link>
              <span
                style={{
                  color: "#ffcb08",
                  fontSize: ".8rem",
                  fontWeight: "600",
                }}
              >
                Uncheck abscent students and save changes
              </span>
            </div>
            <button 
              className="attendance_save_button"
              onClick={onSubmit}
            >
              Save
            </button>
          </div>
          <div className="attendance_classes_section">
            <div className="attendance_class_titles">
              <span>Student ID</span>
              <span>Student Name</span>
              <span>Status</span>
            </div>
            {students && students.length!==0 && students.map((student) => {
              return (
                <DoctorAttendanceStatus 
                  user_id = {student.user_id}
                  student = {student}
                  checked={checked}
                  setChecked={setChecked}
                  aa={aa}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
