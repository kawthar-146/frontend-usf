import React, { useContext , useState } from "react";
import SessionContext from "../../context/SessionContext";
import axios from "axios";
import DoctorDeleteFile from "./DoctorDeleteFile";

export default function DoctorFilesComponent(props) {
  const {
    session: {
      user: { access_token },
    },
  } = useContext(SessionContext);

  const [deleteFileTab, setDeleteFileTab] = useState(false);

  const deleteFile = async () => {
    const result = await axios.delete(`http://localhost:8000/api/file/delete/${props.id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });
    props.getFiles();
  }

  return (
    <>
      <div
        className="student_assignment_container_doctor"
        style={{ marginTop: ".5rem" }}
      >
        <div className="student_assignment_data_edit_doctor">
          <div className="student_assignment_title_doctor">
            <span>
              <i onClick={() => setDeleteFileTab(true)} class="fas fa-trash-alt" style={{cursor: "pointer"}}></i>
            </span>
            <span style={{ marginLeft: "1rem" , width:"11rem"}}>{props.file_name}</span>
            <span style={{ marginLeft: "3rem" }}>{props.reveal_date}</span>
          </div>
          <p style={{ color: "#0b3b70", marginRight: "1rem" }}>
            <i class="far fa-arrow-to-bottom"></i>
          </p>
        </div>
      </div>
      {deleteFileTab ? (
      <DoctorDeleteFile
        setDeleteFileTab={setDeleteFileTab}
        deleteFile={deleteFile}
      />
      ) : (
        ""
      )}
    </>
  );
}
