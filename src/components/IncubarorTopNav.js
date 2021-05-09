import React from 'react'
import { NavLink } from "react-router-dom"

function IncubarorTopNav({ showSearch }) {
    return (
        <div className="IncubatorNav-wrapper">
            <div className="IncubatorNav-inner-wrapper">
                <div className="Nav-margin"><img src="/" alt="MPlogo" /></div>
                <a className="Nav-margin" href=","><span className="iconify inc-nav-icon" data-icon="entypo-social:twitter" data-inline="false"></span></a>
                <a className="Nav-margin" href=","><span className="iconify inc-nav-icon" data-icon="entypo-social:facebook" data-inline="false"></span></a>
                <a className="Nav-margin" href=","><span className="iconify inc-nav-icon" data-icon="fa-brands:linkedin" data-inline="false"></span></a>
                <a className="Nav-margin" href=","><span className="iconify inc-nav-icon" data-icon="akar-icons:instagram-fill" data-inline="false"></span></a>
            </div>
            <div className="IncubatorNav-inner-wrapper">
                <NavLink className="Nav-margin" exact to="/aboutme">Get Bult</NavLink>
                <NavLink className="Nav-margin" exact to="/aboutme">Events</NavLink>
                <NavLink className="Nav-margin" exact to="/aboutme">Learn</NavLink>
                <NavLink className="Nav-margin" exact to="/aboutme">Join</NavLink>
                {showSearch && <div><span className="iconify searchIcon" data-icon="ion:search-circle" data-inline="false"></span></div>}
            </div>
        </div>
    )
}

export default IncubarorTopNav
