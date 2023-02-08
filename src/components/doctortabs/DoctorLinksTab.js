import React from "react";
import DoctorLinksComponent from "./DoctorLinksComponent";

export default function DoctorLinksTab(props) {
  const links = props.links;
  const getLinks = props.getLinks;
  return (
    <div className={props.toggleState !== 4 ? "unactive_content" : "block"}>
      {links && links.length !== 0 ? <div>
        {links && links.length !== 0 && links.map((aa) => 
          <DoctorLinksComponent 
            key={aa.id}
            id={aa.id}
            link={aa.link}
            link_description={aa.link_description}
            getLinks={getLinks}
          />
        )}
      </div> : 
      <div className="student_middle_notification">
        No links found
      </div>}
    </div>
  );
}
