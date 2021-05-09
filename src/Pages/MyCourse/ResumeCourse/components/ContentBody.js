import React from 'react'
import ContentCard from '../ContentCard'

function ContentBody() {
    return (
        <div className="Resume-main-Content">
            <div>
                <div className="Resume-main-icon-container">
                    <div><span className="iconify Resume-main-arrow" data-icon="ant-design:arrow-left-outlined" data-inline="false"></span></div>
                    <div><span className="iconify Resume-main-arrow" data-icon="ant-design:arrow-right-outlined" data-inline="false"></span></div>
                </div>
                <div>
                    <ContentCard />
                </div>
            </div>
        </div>
    )
}

export default ContentBody
