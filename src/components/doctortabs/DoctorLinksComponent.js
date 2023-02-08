import React, { useContext , useState } from "react";
import axios from "axios";
import SessionContext from "../../context/SessionContext";
import DoctorDeleteLink from "./DoctorDeleteLink";

export default function DoctorLinksComponent(props) {
  const {
    session: {
      user: { access_token },
    },
  } = useContext(SessionContext);

  const [deleteLinkTab, setDeleteLinkTab] = useState(false);

  const deleteLink = async () => {
    const result = await axios.delete(`http://localhost:8000/api/link/delete/${props.id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });
    props.getLinks();
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
              <i onClick={() => setDeleteLinkTab(true)} class="fas fa-trash-alt" style={{cursor: "pointer"}}></i>
            </span>
            <span style={{ marginLeft: "1rem" }}>
              {props.link_description}
            </span>
          </div>
          <a 
            style={{
              color: "#0b3b70",
              marginRight: "1rem",
              textDecoration: "underline",
            }}
            href={`${props.link}`}
            target="_blank"
          >
            Click here
          </a>
        </div>
      </div>
      {deleteLinkTab ? (
      <DoctorDeleteLink
        setDeleteLinkTab={setDeleteLinkTab}
        deleteLink={deleteLink}
      />
      ) : (
        ""
      )}
    </>
  );
}
