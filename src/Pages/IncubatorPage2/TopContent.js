import React from 'react'

function TopContent() {
    return (
        <div className="Incubator2-body-wrapper">
            <div><span className="iconify Incubator2-arrowRIght-icon" data-icon="bi:arrow-left-circle-fill" data-inline="false"></span></div>
            <div className="Incubator2-price-wrapper">
                <img alt="mango-swap-img" src="/assets/images/Frame 313.png" />
                <div className="Incubator2-img-name">Mangoswap</div>
            </div>
            <div className="Incubator2-price-wrapper">
                <div className="Incubator2-price-per">
                    <div className="Incubator2-price-fund">Funds raised</div>
                    <div>50% complete</div>
                </div>
                <div className="Incubator2-price">$200,000/$400,000</div>
            </div>
            <div className="Incubator2-progress-wrapper">progress bar</div>
            <button className="Incubator2-button-wrapper">Fund Startup</button>
        </div>
    )
}

export default TopContent
