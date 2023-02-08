import React from 'react';
import StudentRecordings from "./StudentRecordings";

export default function StudentRecordingsTab(props) {
    const recordings = props.recordings;
    return (
        <div className={props.toggleState !== 6 ? "unactive_content" : "block"}>
            {recordings && recordings.length !== 0 && recordings.map((recording) => 
                <StudentRecordings
                    key={recording.id}
                    id={recording.id}
                    recording_file={recording.recording_file}
                    recording_name={recording.recording_name}
                />
            )}
        </div>
    )
}
