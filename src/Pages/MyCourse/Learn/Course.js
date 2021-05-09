import React from 'react'

function Course({ CourseName, children }) {
    return (
        <div>
            <div className="Courses-wrapper">
                <div className="Course-wrapper-name">{CourseName}</div>
                <div className="Course-demacate"></div>
                <div>
                    <span className="iconify Courses-arrow-icon" data-icon="eva:arrow-back-fill" data-inline="false"></span>
                    <span className="iconify Courses-arrow-icon" data-icon="eva:arrow-forward-outline" data-inline="false"></span>
                </div>
            </div>
            {children}
        </div>
    )
}

export default Course
