import React from "react";
import "./DeletePopup.css";

export default function DoctorDeleteFile(props) {
    
    async function onSubmit(e) {
        e.nativeEvent.preventDefault();
        props.deleteFile();
        props.setDeleteFileTab(false);
    }
    
    return (
    <div>
        <div className="popup_delete">
            <div className="popup_delete_content">
                <div className="pop_delete_msg">
                    Confirm that you want to remove this file.
                </div>
                <div className="pop_delete_buttons">
                    <span className="cancel_button" onClick={() => props.setDeleteFileTab(false)}>
                        {" "}
                        Cancel
                    </span>
                    <button
                        style={{
                            background: "#0b3b70",
                            padding: ".5rem 1rem",
                            borderRadius: ".5rem",
                            border: "none",
                            color: "#ffcb08",
                            fontWeight: "500",
                            cursor: "pointer",
                        }}
                        onClick={onSubmit}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
}