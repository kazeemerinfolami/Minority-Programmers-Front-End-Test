import React from 'react'

function CardList({ numWeek }) {
    return (
        <div className="Mycourse-card-list">
            <div>Week {numWeek}</div>
            <div>
                <div className="Mycourse-Module-List">
                    <div><span className="iconify My-Course-icon" data-icon="clarity:success-standard-solid" data-inline="false"></span></div>
                    <div>Introduction</div>
                </div>
                <div className="Mycourse-Module-List">
                    <div><span className="iconify My-Course-icon" data-icon="clarity:success-standard-solid" data-inline="false"></span></div>
                    <div>Introduction</div>
                </div>
                <div className="Mycourse-Module-List">
                    <div><span className="iconify My-Course-icon" data-icon="clarity:success-standard-solid" data-inline="false"></span></div>
                    <div>Introduction</div>
                </div>
            </div>
        </div>
    )
}

export default CardList
