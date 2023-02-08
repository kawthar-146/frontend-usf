import React, { useState } from "react";

export default function StudentAdvisors(props) {
  const [advisorToggle, setAdvisorToggle] = useState(false)
  return (
    <div className={props.toggleState !== 2 ? "unactive_content" : "block"}>
      {!advisorToggle && <div className="settings_container">
        <div className="settings_content_inside">
          <div className="settings_title">
            <span>Advisor1</span>
            <span className="edit_button" onClick={()=>setAdvisorToggle(true)}>Edit</span>
          </div>
          <div className="settings_data_grid ">
            <span>
              {" "}
              Name:<div className="settings_span_div">Mhamad </div>
            </span>
            <span>
              Home Number: <div className="settings_span_div"> 0387473</div>
            </span>
            <span>
              Email:<div className="settings_span_div">10/10/2020</div>
            </span>
          </div>
        </div>
      </div>}
      {
        advisorToggle && <div className="settings_container">
        <div className="settings_content_inside">
          <div className="settings_title">
            <span>Advisor1</span>
            <span className="edit_button" onClick={()=>setAdvisorToggle(false)}>Save</span>
          </div>
          <div className="settings_data_grid ">
            <span>
              {" "}
              Name:<div className="settings_span_div"><input type="text" className="input_edit" /> </div>
            </span>
            <span>
              Home Number: <div className="settings_span_div"> <input type="text" className="input_edit" /></div>
            </span>
            <span>
              Email:<div className="settings_span_div"><input type="text" className="input_edit" /></div>
            </span>
          </div>
        </div>
      </div>
      }
    </div>
  );
}
