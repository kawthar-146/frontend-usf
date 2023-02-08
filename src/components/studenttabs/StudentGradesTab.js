import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import SessionContext from "../../context/SessionContext";
import StudentAssignmentGrade from "./StudentAssignmentGrade";

export default function StudentGradesTab(props) {
  let id = localStorage.getItem("id");
  const [assignments, setAssignments] = useState([]);
  const {
    session: {
      user: { access_token },
    },
  } = useContext(SessionContext);
  const getData = async () => {
    let res = await axios.get(
      `http://localhost:8000/api/student/submitted/${id}`,
      {
        method: "get",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    setAssignments(res.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={props.toggleState !== 3 ? "unactive_content" : "block"}>
      {assignments &&
        assignments.length !== 0 &&
        assignments.map((item) => {
          return (
            <StudentAssignmentGrade
              grade={item.grade}
              assignment={item.assignment[0].assignment_name}
            />
          );
        })}
    </div>
  );
}
