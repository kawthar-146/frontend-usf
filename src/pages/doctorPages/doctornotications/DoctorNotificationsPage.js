import React, { useContext, useEffect, useState }  from 'react'
import axios from "axios";
import SessionContext from '../../../context/SessionContext';
import DoctorMenu from '../../../components/home/DoctorMenu'
import DoctorNotification from "./DoctorNotification";
import DoctorPostNotificationPage from './DoctorPostNotificationPage';

export default function DoctorNotificationsPage() {
    const {
        session: {
            user: { access_token },
        },
    } = useContext(SessionContext);
    const [notifications , setNotifications] = useState();
    const [postNotification, setPostNotification] = useState(false);

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
        <>
            <div className="course_section">
                <DoctorMenu />
                <div className="margin_left">
                    <div className="home_content">
                        <div className="aaa">
                            <button
                                onClick={() => setPostNotification(true)}
                                className="update_assignment_button"
                            >
                                Post notification
                            </button>
                        </div>
                        <div className="home_content_title">
                            <h2>Notifications</h2>
                            <span>Past Month</span>
                        </div>
                        {notifications && notifications.length !== 0 ? 
                            <div className="home_courses">
                                {notifications && notifications.length !== 0 && notifications.map((aa) => 
                                    <DoctorNotification 
                                        key={aa.id}
                                        id={aa.id}
                                        message={aa.message}
                                        notification_date={aa.notification_date}
                                        admin={aa.admin}
                                    />
                                )}
                                {/* <DoctorNotification sex={"girl"} name={"Head of Pedagogy Department"}/>
                                <DoctorNotification sex={"boy"} name={"Head of Pedagogy Department"}/> */}
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
            {postNotification ?
                <DoctorPostNotificationPage setPostNotification={setPostNotification} getNotifications={getNotifications} /> : ""
            }
        </>
    )
}
