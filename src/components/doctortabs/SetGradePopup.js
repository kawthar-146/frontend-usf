import axios from "axios";
import React, {useState} from "react";
import "../../pages/doctorPages/doctorassignmentview/Grades.css";

export default function SetGradePopup(props) {
  const id = props.id
  const [gradeValue, setGradeValue] = useState(null);

  const setGrade = async() => {
    const Data = new FormData();
    Data.append('grade', gradeValue)

    let res = await axios.post(`http://localhost:8000/api/grade/${id}?_method=put`, Data)
  }

  return (
    <div className="popup_student_assignment">
      <div className="popup_set_grade">
        <div className="popup_set_grade_title">
          <h1>Set Grade</h1>
          <p>This grade is over 100</p>
          <input onChange={(e)=>setGradeValue(e.target.value)} type="text" name="" id="" />
        </div>
        <div className="popup_set_grade_actions">
          <span onClick={() => props.setGradeToggle(false)}>Cancel</span>
          <button onClick={setGrade}>Confirm</button>
        </div>
      </div>
    </div>
  );
}
