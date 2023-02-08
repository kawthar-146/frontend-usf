import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SessionContext from "../../context/SessionContext";
import student from "../../images/student.svg";

export default function DoctorMenu() {
  const {
    actions: { logout },
    session: {
      user: { access_token },
    },
  } = useContext(SessionContext);
  const [loading, setLoading] = useState(false);
  const [doctorPicture, setDoctorPicture] = useState("");
  // const [userName, setUserName] = useState('');
  const id = localStorage.getItem("id");
  const userName = localStorage.getItem("name");

  async function getPicture() {
    setLoading(true);
    const result = await axios.get(
      `http://localhost:8000/api/admins/getPicture/${id}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    setDoctorPicture(result.data.picture);
    // setUserName(result.data[1].firstname);
    setLoading(false);
  }


  useEffect(() => {
    getPicture();
  }, []);

  return (
    <>
      {loading ? (
        <div className="home_menu">
          <span style={{marginTop: "5rem", color: "white"}}><i class="fad fa-spinner"></i></span>
        </div>
      ) : (
        <div className="home_menu">
          <div className="home_menu_upper">
            <div className="menu_image_div">
              <img
                src={
                  doctorPicture === undefined
                    ? student
                    : `http://localhost:8000/image/${doctorPicture}`
                }
                alt=""
              />
            </div>
            <div className="menu_welcome">
              <h3 className="title">Welcome {userName}</h3>
              <span className="text">Pedagogy Department</span>
            </div>
            <div className="menu_actions">
              <ul>
                <li>
                  <span className="menu_menu">Menu</span>
                </li>
                <Link
                  to="/doctorhome"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>
                    <span className="menu_fontawesome">
                      <i class="fas fa-th"></i>
                    </span>
                    <span className="action_name">Classes</span>
                  </li>
                </Link>
                <Link
                  to="/doctornotifications"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>
                    <span className="menu_fontawesome">
                      <i class="fas fa-bell"></i>
                    </span>
                    <span className="action_name">Notifications</span>
                  </li>
                </Link>
                <Link
                  to="/doctorcalendar"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>
                    <span className="menu_fontawesome">
                      <i class="fas fa-calendar-alt"></i>
                    </span>
                    <span className="action_name">Calendar</span>
                  </li>
                </Link>
                <Link
                  to="/doctorattendance"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>
                    <span className="menu_fontawesome">
                      <i class="fas fa-calendar-check"></i>
                    </span>
                    <span className="action_name">Attendance Tracking</span>
                  </li>
                </Link>
                <Link
                  to="/doctorsettings"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>
                    <span className="menu_fontawesome">
                      <i class="fas fa-cog"></i>
                    </span>
                    <span className="action_name">Settings</span>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="home_logout_button">
            <span className="menu_fontawesome">
              <i class="fal fa-sign-out"></i>
            </span>
            <span onClick={() => logout()}>Logout</span>
          </div>
        </div>
      )}
    </>
  );
}
