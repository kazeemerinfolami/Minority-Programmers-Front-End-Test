import React from 'react'
import { MainContentData } from "../../Data/Data";
import { Link } from "react-router-dom"

function MainContent() {
    return (
        <div>
            <div className="mainContent-wrapper">
                <div className="mainContent-card-1content">
                    <div className="mainContent-con-top">Upcoming Startups</div>
                    <div className="mainContent-con-top1">These visionary companies and disruptors are on their journey to change the world.</div>
                </div>

                {
                    MainContentData.map((D) => (
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
            </div>
            <div className="mainContent-loadmore-container">
                <button>Load more</button>
            </div>
        </div>
    )
}

export default MainContent
