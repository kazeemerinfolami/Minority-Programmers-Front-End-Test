import React from 'react'
import { Link } from "react-router-dom"
import CardContent from './components/CardContent';
import DashboardFrame from './components/DashboardFrame'

function MyCourses() {

    return (
        <DashboardFrame>
            <div className="MyCourses-Content">
                <div className="MyCourse-top-Content">
                    <div>
                        <span className="iconify MyCourse-profile-icon" data-icon="gg:profile" data-inline="false"></span>
                    </div>
                    <div className="MyCourse-welcome-wrapper">
                        <div className="MyCourse-welcome">Welcome back, Shot</div>
                        <div className="MyCourse-welcome-per">75% Completed</div>
                        <Link exact to="/resumeCourse"><button className="MyCourse-welcome-button">Resume</button></Link>
                    </div>
                </div>
                <div>
                    <div className="MyCourse-main-Content">
                        <div>
                            <div className="MyCourse-main-Content-pageNav">
                                <div className="MyCourse-main-modules-pageNav">Modules</div>
                                <div>Calendar</div>
                                <div>Messages</div>
                            </div>
                            <CardContent />
                        </div>
                    </div>
                </div>
            </div>
        </DashboardFrame>
    )
}

export default MyCourses
