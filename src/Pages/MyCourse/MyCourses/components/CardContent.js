import React from 'react'
import { MyCourseData } from '../../../../Data/Data';

function CardContent() {
    return (
        <div className="MyCourse-main-Card-container">
            {MyCourseData.map((D) => (
                <div className="MyCourse-main-Card-wrapper" key={D.key}>
                    {D.completed >= 100 ? <div className="MyCourse-main-Card-button"><div className="Mycourse-completed">Completed</div></div> : <div className="MyCourse-main-Card-button"><div className=" Mycourse-inprogress">In Progress</div></div>}
                    <div className="MyCourse-main-Card-content">
                        <div className="MyCourse-main-Card-content1">Week {D.week} -  Fundamentals of Cryptocurrency</div>
                        <div className="MyCourse-main-Card-cont">progressbar</div>
                        <div className="MyCourse-main-Card-content3">{D.completed}% Completed</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CardContent
