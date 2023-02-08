import React, { useState } from 'react'
import DoctorMenu from '../../../components/home/DoctorMenu'
import CalendarComponent from 'react-calendar';
import '../../../components/CalendarsCss.css';

export default function DoctorCalendarPage() {
    const [value, onChange] = useState(new Date());
    return (
        <div className="home_section">
            <DoctorMenu />
            <div className="home_section_notfixed">
                <div className="home_content">
                    <div className="home_content_title">
                        <h2>Calendar</h2>
                        <span>Select the day to view corresponding tasks</span>
                    </div>
                    <div className="student_calendar_home">
                        <div className="student_calendar_page_calendar">
                            <CalendarComponent
                                onChange={onChange}
                                value={value}
                                className="react-calendar-home"
                            />
                        </div>
                        <div className="student_calendar_page_tasks">
                            <div className="student_calendar_page_tasks_info">
                                <p>Tasks</p>
                                <span>-Class from 10:00 am to 12:45 pm</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
