import React from "react";
import DoctorRecording from "./DoctorRecording";

export default function DoctorRecordingsTab(props) {
  const recordings = props.recordings;
  const getRecordings = props.getRecordings;
  return (
    <div className={props.toggleState !== 5 ? "unactive_content" : "block"}>
      {recordings && recordings.length !== 0 ? <div>
        {recordings && recordings.length !== 0 && recordings.map((recording) => 
          <DoctorRecording
            key={recording.id}
            id={recording.id}
            recording_file={recording.recording_file}
            recording_name={recording.recording_name}
            getRecordings={getRecordings}
          />
        )}
      </div> : 
      <div className="student_middle_notification">
      No recordings found
      </div>}
    </div>
  );
}
