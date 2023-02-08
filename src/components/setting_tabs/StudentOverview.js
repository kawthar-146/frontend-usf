import React, { useState } from "react";
import OverviewAddress from "./OverviewAddress";
import OverviewBasicInfo from "./OverviewBasicInfo";

export default function StudentOverview(props) {
  const [majorToggle, setMajorToggle] = useState(false);
  
  return (
    <div className={props.toggleState !== 1 ? "unactive_content" : "block"}>
      <OverviewBasicInfo />
      <OverviewAddress />
      {!majorToggle && (
        <div className="settings_container">
          <div className="settings_content_inside">
            <div className="settings_title">
              <span>Major</span>
            </div>
            <div className="settings_data_grid basic">
              <span>
                {" "}
                Major: <div className="settings_span_div">Mhamad </div>
              </span>
              <span>
                Faculty: <div className="settings_span_div"> Mhamad</div>
              </span>
              <span>
                Academic year:{" "}
                <div className="settings_span_div">10/10/2020</div>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
