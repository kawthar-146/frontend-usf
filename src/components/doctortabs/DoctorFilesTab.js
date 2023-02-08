import React from "react";
import DoctorFilesComponent from "./DoctorFilesComponent";

export default function DoctorFilesTab(props) {
  const files = props.files;
  const getFiles = props.getFiles;
  return (
    <div className={props.toggleState !== 3 ? "unactive_content" : "block"}>
      {files && files.length !== 0 ? <div>
        <span  style={{ marginLeft: "17.5rem", color: "#0b3b70" }}>
          Reveal Date
        </span>
        {files && files.length !== 0 && files.map((file) => 
          <DoctorFilesComponent 
            key={file.id}
            id={file.id}
            file_name={file.file_name}
            reveal_date={file.reveal_date}
            getFiles={getFiles}
          />
        )}
      </div> : 
      <div className="student_middle_notification">
        No files found
      </div>}
    </div>
  );
}
