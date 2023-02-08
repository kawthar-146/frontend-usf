import React from "react";
import EditDoctorAddress from "./EditDoctorAddress";
import EditDoctorBasicInfo from "./EditDoctorBasicInfo";

export default function DoctorOverview(props) {
  const infoData = props.infoData;
  return (
    <div className={props.toggleState !== 1 ? "unactive_content" : "block"}>
      <EditDoctorBasicInfo infoData={infoData} getData={props.getData}/>
      <EditDoctorAddress infoData={infoData}/>
      <div className="settings_container">
        <div className="settings_content_inside">
          <div className="settings_title">
            <span>Department</span>
          </div>
          <div className="settings_data_grid basic">
            <span>
              {" "}
              Department: <div className="settings_span_div">{infoData.department}</div>
            </span>
            <span>
              University: <div className="settings_span_div">{infoData.university}</div>
            </span>
            <span>
              Teaching year: <div className="settings_span_div">{infoData.teachingyear}</div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
