import React from 'react'
import StudentFiles from './StudentFiles'

export default function StudentFilesTab(props) {
    const files = props.files;
    return (
        <div className={props.toggleState !== 4 ? "unactive_content" : "block"}>
            {files && files.length !== 0 && files.map((file) => 
                <StudentFiles
                    key={file.id}
                    id={file.id}
                    file_name={file.file_name}
                    file={file.file}
                />
            )}
        </div>
    )
}
