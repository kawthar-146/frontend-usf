import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import SessionContext from "../../../context/SessionContext";
import DoctorMenu from "../../../components/home/DoctorMenu";
import DoctorSettingsTabs from "../../../components/setting_tabs/DoctorSettingsTabs";

export default function DoctorSettingsPage() {
  const {
    session: {
      user: { access_token },
    },
  } = useContext(SessionContext);

  const userId = localStorage.getItem('id');
  const [infoData , setInfoData] = useState([]);
  const [professorId , setProfessorId] = useState('');
  const [userName , setUserName] = useState('');

  const getDoctorInfo = async () => {
    const result = await axios.get(`http://localhost:8000/api/admins/getDoctor/${userId}`, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });
    setProfessorId(result.data.professor_id);
    setUserName(result.data.firstname);
    setInfoData(result.data);
  }

  useEffect(() => {
    getDoctorInfo();
  }, []);
  
  return (
    <div className="course_section">
      <DoctorMenu />
      <div className="settings_content">
        <div className="settings_content_title">
          <h2>Settings</h2>
          <p>Professor ID: {professorId}</p>
          <span>Reset password</span>
        </div>
       <DoctorSettingsTabs infoData={infoData} getData={getDoctorInfo}/>
      </div>
    </div>
  );
}
