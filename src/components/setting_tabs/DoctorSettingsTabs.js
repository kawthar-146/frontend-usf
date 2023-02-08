import React, { useState } from "react";
import DoctorOverview from "./DoctorOverview";
import DoctorEmergencies from "./DoctorEmergencies";
import DoctorProfile from "./DoctorProfile";

export default function DoctorSettingsTabs(props) {
  const infoData = props.infoData;
  const [toggleState, setToggleState] = useState(1);
  return (
    <div class="tabs_blocks">
      <nav className="tabs_titles">
        <div
          onClick={() => setToggleState(1)}
          className={toggleState === 1 ? "active_tab" : "tabs_title"}
        >
          Overview
        </div>
        <div
          onClick={() => setToggleState(2)}
          className={toggleState === 2 ? "active_tab" : "tabs_title"}
        >
          Profile
        </div>
        <div
          onClick={() => setToggleState(3)}
          className={toggleState === 3 ? "active_tab" : "tabs_title"}
        >
          Emergency
        </div>
        </nav>
        <DoctorProfile toggleState={toggleState} infoData={infoData}/>
        <DoctorOverview toggleState={toggleState} infoData={infoData} getData={props.getData}/>
        <DoctorEmergencies toggleState={toggleState} />
    </div>
  );
}
