import React from 'react'
import IncubarorTopNav from '../../components/IncubarorTopNav'
import MainContent from './MainContent';
import MiddleContent from './MiddleContent';
import TopContent from './TopContent';
import { Link } from "react-router-dom"

function Incubator() {
    return (
        <div>
            <div>
                <IncubarorTopNav />
                <div>
                    <div className="Incubator-top-intro">
                        <div className="Incubator-top-intro-content">
                            <div>
                                <div>Invest directly into</div><div>minority innovations.</div>
                            </div>
                            <Link exact to="/learn"><button>View Startups</button></Link>
                        </div>
                    </div>
                    <div className="Incubator-body-Container">
                        <TopContent />
                        <MiddleContent />
                        <MainContent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Incubator
