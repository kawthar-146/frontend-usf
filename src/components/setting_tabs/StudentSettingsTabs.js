import React, { useState } from "react";
import StudentOverview from "./StudentOverview";
import StudentAdvisors from "./StudentAdvisors";
import StudentProfile from "./StudentProfile";

export default function StudentSettingsTabs() {
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
          Advisors
        </div>
        <div
          onClick={() => setToggleState(3)}
          className={toggleState === 3 ? "active_tab" : "tabs_title"}
        >
          Profile
        </div>
      </nav>
      <StudentProfile toggleState={toggleState} />
      <StudentOverview toggleState={toggleState} />
      <StudentAdvisors toggleState={toggleState} />
    </div>
  );
}
