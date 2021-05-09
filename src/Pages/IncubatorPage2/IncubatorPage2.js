import React from 'react'
import IncubarorTopNav from '../../components/IncubarorTopNav'
import TopContent from './TopContent'
import IncubatorCard1 from './IncubatorCard1';
import IncubatorButtomCard from './IncubatorButtomCard';


function IncubatorPage2() {
    return (
        <div>
            <div>
                <IncubarorTopNav />

                <div className="Incubator-body-Container">
                    <TopContent />
                    <div>
                        <div className="incubator-2-content-container">
                            <IncubatorCard1 />
                            <IncubatorButtomCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IncubatorPage2
