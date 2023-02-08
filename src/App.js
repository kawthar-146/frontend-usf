import React, { useContext, useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router";
import "./App.css";
import SessionContext from "./context/SessionContext";
import Login from "./pages/Login";
import StudentHome from "./pages/studentPages/studenthome/StudentHome";
import StudentCoursePage from "./pages/studentPages/studentcourses/StudentCoursePage";
import StudentNotificationsPage from "./pages/studentPages/studentnotifications/StudentNotificationsPage";
import StudentCalendarPage from "./pages/studentPages/studentcalendar/StudentCalendarPage";
import StudentAttendanceTrackingPage from "./pages/studentPages/studentattendanceTracking/StudentAttendanceTrackingPage";
import StudentSettingsPage from "./pages/studentPages/studentsettings/StudentSettingsPage";
import StudentGradesPage from "./pages/studentPages/studentgrades/StudentGradesPage";
import StudentGradesTerm from "./pages/studentPages/studentgrades/StudentGradesTerm";
import DoctorHome from "./pages/doctorPages/doctorhome/DoctorHome";
import DoctorCoursePage from "./pages/doctorPages/doctorcourses/DoctorCoursePage";
import DoctorNotificationsPage from "./pages/doctorPages/doctornotications/DoctorNotificationsPage";
import DoctorCalendarPage from "./pages/doctorPages/doctorcalendar/DoctorCalendarPage";
import DoctorAttendanceTrackingPage from "./pages/doctorPages/doctorattendanceTracking/DoctorAttendanceTrackingPage";
import DoctorSettingsPage from "./pages/doctorPages/doctorsettings/DoctorSettingsPage";
import SubmittedAssignments from "./pages/doctorPages/submittedAssignments/SubmittedAssignments";
import DoctorViewAssignment from "./pages/doctorPages/doctorassignmentview/DoctorViewAssignment";
import DoctorAttendanceClass from "./components/DoctorAttendanceClass";
import DoctorAttendanceClassPage from "./pages/doctorPages/doctorattendanceTracking/DoctorAttendanceClassPage";

export default function App() {
  const {
    role,
    session: {
      user: { access_token },
    },
  } = useContext(SessionContext);

  let userRole = role.message

  return (
  ( 
      <div className="App">
        <Switch>
          <LoginRoute
            path="/"
            component={Login}
            userRole={userRole}
            access_token={access_token}
            exact
          />
          <DoctorPrivateRoute
            path="/doctorhome"
            component={DoctorHome}
            userRole={userRole}
            access_token={access_token}
            exact
          />
          <DoctorPrivateRoute
            path="/doctorcourse"
            component={DoctorCoursePage}
            userRole={userRole}
            access_token={access_token}
            exact
          />
          <DoctorPrivateRoute
            path="/doctornotifications"
            component={DoctorNotificationsPage}
            userRole={userRole}
            access_token={access_token}
            exact
          />
          <DoctorPrivateRoute
            path="/doctorcalendar"
            component={DoctorCalendarPage}
            userRole={userRole}
            access_token={access_token}
            exact
          />
          <DoctorPrivateRoute
            path="/submittedassignments"
            component={SubmittedAssignments}
            userRole={userRole}
            access_token={access_token}
            exact
          />
          <DoctorPrivateRoute
            path="/doctorattendance"
            component={DoctorAttendanceTrackingPage}
            userRole={userRole}
            access_token={access_token}
            exact
          />
          <DoctorPrivateRoute
            path="/doctorsettings"
            component={DoctorSettingsPage}
            userRole={userRole}
            access_token={access_token}
            exact
          />
          <DoctorPrivateRoute
            path="/doctorattendance/class"
            component={DoctorAttendanceClassPage}
            userRole={userRole}
            access_token={access_token}
            exact
          />
          <DoctorPrivateRoute
            path="/doctorcourse/viewassignments/:id"
            component={DoctorViewAssignment}
            userRole={userRole}
            access_token={access_token}
            exact
          />
          <StudentPrivateRoute
            path="/studenthome"
            component={StudentHome}
            userRole={userRole}
            access_token={access_token}
            exact
          />
          <StudentPrivateRoute
            path="/studentcourse"
            component={StudentCoursePage}
            userRole={userRole}
            access_token={access_token}
            exact
          />
          <StudentPrivateRoute
            path="/studentnotifications"
            component={StudentNotificationsPage}
            userRole={userRole}
            access_token={access_token}
            exact
          />
          <StudentPrivateRoute
            path="/studentcalendar"
            component={StudentCalendarPage}
            userRole={userRole}
            access_token={access_token}
            exact
          />
          <StudentPrivateRoute
            path="/studentattendance"
            component={StudentAttendanceTrackingPage}
            userRole={userRole}
            access_token={access_token}
            exact
          />
          <StudentPrivateRoute
            path="/studentsettings"
            component={StudentSettingsPage}
            userRole={userRole}
            access_token={access_token}
            exact
          />
          <StudentPrivateRoute
            path="/studentgrades"
            component={StudentGradesPage}
            userRole={userRole}
            access_token={access_token}
            exact
          />
          <StudentPrivateRoute
            path="/studentgrades/term"
            component={StudentGradesTerm}
            userRole={userRole}
            access_token={access_token}
            exact
          />
        </Switch>
      </div>
   )
  );
}

function LoginRoute({
  path,
  component: Component,
  access_token,
  userRole,
  ...props
}) {
  return (
    <Route
      {...props}
      path={path}
      render={(props) =>
        access_token ? (
          userRole === "Student" ? (
            <Redirect to="/studenthome" />
          ) : (
            <Redirect to="/doctorhome" />
          )
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

function DoctorPrivateRoute({
  path,
  component: Component,
  access_token,
  userRole,
  ...props
}) {
  return (
    <Route
      {...props}
      path={path}
      render={(props) =>
        access_token ? (
          userRole === "Doctor" ? (
            <Component {...props} />
          ) : (
            <Redirect to="/" />
          )
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}

function StudentPrivateRoute({
  path,
  component: Component,
  access_token,
  userRole,
  ...props
}) {
  return (
    <Route
      {...props}
      path={path}
      render={(props) =>
        access_token ? (
          userRole === "Student" ? (
            <Component {...props} />
          ) : (
            <Redirect to="/" />
          )
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}
