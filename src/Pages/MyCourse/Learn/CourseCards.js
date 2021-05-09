import React from 'react'
import { Link } from "react-router-dom"
import { CourseInfo } from "../../../Data/Data"


function CourseCards() {
    return (
        <div>
            <div className="CourseCards-container">
                {CourseInfo.map((D) => (
                    <div className="CourseCards-wrapper" key={D.key}>
                        <div className="Course-success-box">
                            <div className="Course-success-card">
                                <div><span className="iconify Course-success-icon" data-icon="clarity:success-standard-solid" data-inline="false"></span></div>
                                <div>Earn ${D.earn}</div>
                            </div>
                        </div>
                        <div className="Course-card-intro">Intro to Blockchain</div>
                        <div className="Course-card-inner-intro">Blockchain Cryptocurrency Fundamentals</div>
                        <Link exact to="/mycourses"><button className="Course-card-inner-button">Learn</button></Link>
                        <div className="Course-card-inner-module">{D.numModule}/10 Modules </div>
                        <div>progress bar</div>
                        <div className="Course-card-inner-complete">{D.completed}% Completed</div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default CourseCards
