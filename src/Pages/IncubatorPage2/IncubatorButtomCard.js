import React from 'react'
import { MainContentData3 } from "../../Data/Data";

function IncubatorButtomCard() {
    return (
        <div className="incubator-2-content2">
            <div className="incubator-2-CONtent2">
                <div className="incubator-2-content1-main-border-bottom">
                    <div className="incubator-2-content1-margin2">
                        <div className="incubator-2-content1-conTitle">About startup</div>
                                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint
                                    </div>
                </div>

                <div className="incubator-2-content1-margin2">
                    <div className="incubator-2-content1-conTitle">Vision</div>
                                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint
                                   </div>
            </div>
            <div className="incubator-2-CONtent2-MARGIN">
                <div className="incubator-2-content1-margin2">
                    <div className="incubator-2-content1-bottom-top">
                        <div className="incubator-2-content1-conTitle">Related startups</div>
                        <div>
                            <span className="iconify incubator-2-content1-bottom-top-icon" data-icon="bi:arrow-left-short" data-inline="false"></span>
                            <span className="iconify incubator-2-content1-bottom-top-icon" data-icon="bi:arrow-right-short" data-inline="false"></span>
                        </div>
                    </div>
                    <div>
                        <div className="mainContent-wrapper">
                            {
                                MainContentData3.map((D) => (
                                    <div className="Incubator-2-content1-mainContent-card" key={D.key}>
                                        <div>
                                            <div className="mainContent-content1">
                                                <div><img alt="mango-swap-img" src="/assets/images/Frame 313.png" /></div>
                                                <div>{D.topContent}</div>
                                            </div>
                                            <div className="mainContent-content3">
                                                <div>Fund raise</div>
                                                <div className="mainContent-content3a">{D.rate}% complete</div>
                                            </div>
                                            <div className="mainContent-content4">${D.price1}/${D.price2}</div>
                                            <div>Progress bar</div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IncubatorButtomCard
