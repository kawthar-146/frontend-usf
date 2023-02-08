import React from "react";
import StudentMenu from "../../../components/home/StudentMenu";
import StudentSettingsTabs from "../../../components/setting_tabs/StudentSettingsTabs";
import './Settings.css';

export default function StudentSettingsPage() {
  return (
    <div className="student_settings_section">
      <StudentMenu />
      <div className="settings_content">
        <div className="settings_content_title">
          <h2>Settings</h2>
          <p>Student ID: 1234556</p>
          <span>Reset password</span>
        </div>
       <StudentSettingsTabs />
      </div>
    </div>
  );
}
