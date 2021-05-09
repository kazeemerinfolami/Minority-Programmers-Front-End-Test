import React from 'react'
import DashboardFrame from '../MyCourses/components/DashboardFrame'
import ContentBody from './components/ContentBody'

function ResumeCourse() {
    return (
        <DashboardFrame>
            <div className="MyCourses-Content">
                <div className="Resume-container">
                    <div className="Resume-Top-menu">
                        <div className="Resume-Top-week">Week 1</div>
                        <div className="Resume-Top-progress">Progress</div>
                        <div className="Resume-Top-bottom-progress">
                            <div className="Resume-Top-numPer">10/10</div>
                            <div className="Resume-Top-progressBar">progress bar</div>
                            <div className="Resume-Top-progress-percentage">100% Complete</div>
                        </div>
                    </div>
                </div>
                <ContentBody />
            </div>
        </DashboardFrame>
    )
}

export default ResumeCourse
