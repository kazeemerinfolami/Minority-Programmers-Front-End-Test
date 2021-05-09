import React from 'react'
import { ResumeData } from '../../../Data/Data'

function ContentCard() {
    return (
        <div className="Resume-ContentCard-container">
            {
                ResumeData.map((D) => (
                    <div Key={D.key} className="Resume-ContentCard-wrapper">
                        <div className="Resume-conpleted">
                            {D.completed === 100 ?
                                <div className="Resume-module-completed">Completed</div>
                                : D.completed === 0 ?
                                    <div className="Resume-module-Start">Start</div>
                                    : <div className="Resume-module-incompleted">Incompleted</div>}
                        </div>
                        <div className="Resume-card-content">
                            <div className="Resume-img"><img src="/assets/images/image 7.png" alt="resume-img" /></div>
                            <div className="Resume-title-content">Activity {D.activity} - {D.title} </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default ContentCard
