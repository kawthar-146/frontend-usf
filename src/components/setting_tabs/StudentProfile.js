import React from "react";
import student from "../../images/student.svg";

export default function StudentProfile(props) {
  return (
    <div className={props.toggleState !== 3 ? "unactive_content" : "block"}>
      <div className="student_profile_page">
        <div className="profile_pic">
          <img src={student} alt="" />
        </div>
        <div className="profile_edit_pic">
          <h1>Edit Profile Picture</h1>

          <h3>Select a photo to set as profile picture</h3>

          <div className="select_photo_button">
            <label for="file-upload" class="custom-file-upload">
             Select File
            </label>
            <input id="file-upload" type="file" />
          </div>
          <div className="upload_photo_button">
            <button>Upload</button>
          </div>
        </div>
      </div>
    </div>
  );
}
