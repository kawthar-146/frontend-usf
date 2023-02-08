import React from 'react'
import { Link } from 'react-router-dom'

export default function DoctorCourse(props) {
  const id = props.id;
  const name = props.name;
  return (
      <div className="home_course">
        <img src={`http://localhost:8000/image/${props.image}`} alt="" />
        <div className="course_details">
          <h2>
            <Link 
              to={{ pathname: "/doctorcourse" , id,name}}
              style={{textDecoration: "none" ,color: "#ffcb08"}}
            >
              {props.name}
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
