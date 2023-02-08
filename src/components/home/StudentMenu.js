import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SessionContext from "../../context/SessionContext";
import student from "../../images/student.svg";

export default function StudentMenu() {
  const {
    role,
    actions: { logout },
  } = useContext(SessionContext);
  const userName = localStorage.getItem("firstname");
  return (
    <>
      <div className="home_menu">
        <div className="home_menu_upper">
          <img src={student} alt="" />
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
                to="/studenthome"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li>
                  <span className="menu_fontawesome">
                    <i class="fas fa-th"></i>
                  </span>
                  <span className="action_name">Courses</span>
                </li>
              </Link>
              <Link
                to="/studentnotifications"
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
                to="/studentcalendar"
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
                to="/studentattendance"
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
                to="/studentgrades"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li>
                  <span className="menu_fontawesome">
                    <i class="fas fa-file-spreadsheet"></i>
                  </span>
                  <span className="action_name">Grades</span>
                </li>
              </Link>
              <Link
                to="/studentsettings"
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
    </>
  );
}
