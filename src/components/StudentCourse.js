import React from 'react'
import { Link } from 'react-router-dom'

export default function StudentCourse(props) {
  const data = props.course.course[0];
  const id = data.id;
  const name = data.course_name;
  const image = data.file_path;
  return (
    <div className="home_course">
      <img src={`http://localhost:8000/image/${image}`} alt="course image" />
      <div className="course_details">
        <h2>
          <Link 
            to={{ pathname: "/studentcourse" , state: id,name}}
            style={{textDecoration: "none" ,color: "#ffcb08"}}
          >
            {name}
          </Link>
        </h2>
        <span>All time</span>
      </div>
      <div className="course_completion">
        <div className="completion_outer">
            <span className="completion_inner"></span>
        </div>
        <p>50%</p>
      </div>
      <div className="course_play">
        <i class="fas fa-play-circle"></i>
      </div>
    </div>
  )
}
