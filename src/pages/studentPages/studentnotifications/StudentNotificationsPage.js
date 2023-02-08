import React, { useContext, useEffect, useState }  from 'react'
import axios from "axios";
import SessionContext from '../../../context/SessionContext';
import StudentMenu from "../../../components/home/StudentMenu";
import StudentNotification from "./StudentNotification";

export default function StudentNotificationsPage() {  
  const {
    session: {
        user: { access_token },
    },
  } = useContext(SessionContext);
  const [notifications , setNotifications] = useState();

  const getNotifications = async () => {
    const result = await axios.get(`http://localhost:8000/api/getNotifications`, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
    setNotifications(result.data);
}

  useEffect(() => {
      getNotifications();
  }, []);

  return (
    <div className="course_section">
      <StudentMenu />
      <div className="margin_left">
        <div className="home_content">
          <div className="home_content_title">
            <h2>Notifications</h2>
            <span>Past Month</span>
          </div>
          {notifications && notifications.length !== 0 ? 
            <div className="home_courses">
                {notifications && notifications.length !== 0 && notifications.map((aa) => 
                    <StudentNotification 
                        key={aa.id}
                        id={aa.id}
                        message={aa.message}
                        notification_date={aa.notification_date}
                        admin={aa.admin}
                    />
                )}
            </div> 
            :
            <div className="home_courses">
                <div className="student_middle_notification">
                    You have no notifications right now
                </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
