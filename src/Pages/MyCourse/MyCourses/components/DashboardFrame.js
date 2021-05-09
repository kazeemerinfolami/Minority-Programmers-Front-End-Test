import React, { useState } from 'react'
import { Link } from "react-router-dom"
import IncubarorTopNav from '../../../../components/IncubarorTopNav'
import CardList from './CardList'


function DashboardFrame({ children }) {
    const [showSearch] = useState(true)
    return (
        <div>
            <IncubarorTopNav showSearch={showSearch} />
            <div>
                <div className="MyCourse-wrapper">
                    <div className="Close-MyCourse-Side-Nav">
                        <div className="MyCourse-Side-Nav">
                            <div>
                                <div className="My-Course-back-button">
                                    <Link exact to="/learn" className="My-Course-back-Navbutton"><span className="iconify My-Course-back-icon" data-icon="dashicons:arrow-left-alt2" data-inline="false"></span></Link>
                                    <Link exact to="/learn" className="My-Course-back-Navbutton"><div>Courses</div></Link>
                                </div>
                                <div className="My-Course-Sidebar-container">
                                    <div className="My-Course-Sidebar-intro">Intro to Blockchain</div>
                                    <CardList numWeek="1" />
                                    <CardList numWeek="2" />
                                    <CardList numWeek="3" />
                                    <CardList numWeek="4" />
                                    <CardList numWeek="5" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardFrame
