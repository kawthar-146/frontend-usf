import React from "react";
import Calendar from "../Calendar";

export default function StudentCalendaar() {
  return (
    <div className="home_calendar">
      <div className="home_content_title">
        <h2>Calendar</h2>
        <span>All time</span>
      </div>
      <div className="calendar_block">
        <Calendar/>
      </div>
      <div className="class_details">
        <span className="class_date">October 25, 2021</span>
        <span className="class_time">- Class from 10:00 am to 12:45 pm</span>
      </div>
    </div>
  );
}
