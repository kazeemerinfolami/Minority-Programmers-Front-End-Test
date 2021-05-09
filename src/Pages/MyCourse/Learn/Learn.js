import React, { useState } from 'react'
import IncubarorTopNav from '../../../components/IncubarorTopNav';
import Course from './Course';
import CourseCards from './CourseCards';
import LearnBody from './LearnBody';

function Learn() {
    const [showSearch] = useState(true);

    return (
        <div>
            <IncubarorTopNav showSearch={showSearch} />
            <div>
                <div className="Learn-top-intro">
                    <div className="Incubator-top-intro-content">
                        <div>
                            <div>Learn high in demand</div><div>IT Skills & Get Crypto.</div>
                        </div>
                        <div style={{ fontSize: "14px", textAlign: "right" }}>powered by <span className="Learn-top-content-name">KoinStreet</span></div>
                    </div>
                </div>
                <div className="Learn-body-Container">
                    <LearnBody />
                    <Course CourseName="My Course">
                        <CourseCards />
                    </Course>
                    <Course CourseName="Featured Courses">
                        <CourseCards />
                    </Course>
                    <div className="Learn-body-Container-button">
                        <button className="Learn-body-button">Load more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Learn
