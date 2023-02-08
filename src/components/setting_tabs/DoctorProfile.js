import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import SessionContext from "../../context/SessionContext";
import student from "../../images/student.svg";

export default function DoctorProfile(props) {
  const {
    session: {
      user: { access_token },
    },
  } = useContext(SessionContext);

  const [doctorPicture, setDoctorPicture] = useState("");
  const [picture, setPicture] = useState();
  const id = localStorage.getItem("id");

  async function getPicture() {
    const result = await axios.get(
      `http://localhost:8000/api/admins/getPicture/${id}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    setDoctorPicture(result.data.picture);
  }

  async function onSubmit(e) {
    e.nativeEvent.preventDefault();
    const body = new FormData();
    body.append("picture", picture);
    addImage(body);
  }

  const addImage = async (body) => {
    try {
      const result = await axios.post(
        `http://localhost:8000/api/admins/addPicture/${id}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch {}

    getPicture();
  };

  useEffect(() => {
    getPicture();
  }, []);

  return (
    <div className={props.toggleState !== 2 ? "unactive_content" : "block"}>
      <div className="student_profile_page">
        <div className="profile_pic">
          <img src={`http://localhost:8000/image/${doctorPicture}`} alt="" />
        </div>
        <form onSubmit={onSubmit}>
          <div className="profile_edit_pic">
            <h1>Edit Profile Picture</h1>

            <h3>Select a photo to set as profile picture</h3>

            <div className="select_photo_button">
              <label for="file-upload" class="custom-file-upload">
                Select File
              </label>
              <input
                id="file-upload"
                type="file"
                name="picture"
                onChange={(e) => setPicture(e.target.files[0])}
              />
            </div>
            <div className="upload_photo_button">
              <button type="submit">Upload</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
