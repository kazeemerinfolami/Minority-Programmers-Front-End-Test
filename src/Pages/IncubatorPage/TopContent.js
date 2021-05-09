import React from 'react'
import { Link } from "react-router-dom"
import { MainContentData2 } from "../../Data/Data"

function TopContent() {
    return (
        <div>
            <div>
                <div className="mainContent-wrapper">
                    <div className="mainContent-card-1contentTop">
                        <div className="mainContent-con-top">Featured Startups</div>
                        <div className="mainContent-con-top1">Invest in the next billion dollar company today.</div>
                    </div>
                    <div>
                        <span className="iconify mainContentArrow" data-icon="bi:arrow-left-circle" data-inline="false"></span>
                    </div>

                    {
                        MainContentData2.map((D) => (
                            <div className="mainContent-card-content" key={D.key}>
                                <div>
                                    <div className="mainContent-content1">
                                        <div><img alt="mango-swap-img" src="/assets/images/Frame 313.png" /></div>
                                        <div>{D.topContent}</div>
                                    </div>
                                    <div className="mainContent-content2">
                                        {D.mainContent}                        </div>
                                    <div className="mainContent-content3">
                                        <div>Fund raise</div>
                                        <div className="mainContent-content3a">{D.rate}% complete</div>
                                    </div>
                                    <div className="mainContent-content4">${D.price1}/${D.price2}</div>
                                    <div>Progress bar</div>
                                    <div className="mainContent-content5">
                                        <Link exact to="/incubator"><button className="mainContent-contentButton1">Fund Startup</button></Link>
                                        <button className="mainContent-contentButton2">Learn more</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div>
                        <span className="iconify mainContentArrow" data-icon="bi:arrow-right-circle" data-inline="false"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopContent
