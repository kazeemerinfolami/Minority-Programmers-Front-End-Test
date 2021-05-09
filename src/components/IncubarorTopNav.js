import React from 'react'
import { NavLink, Link } from "react-router-dom"

function IncubarorTopNav({ showSearch }) {
    return (
        <div className="IncubatorNav-wrapper">
            <div className="IncubatorNav-inner-wrapper">
                <div className="Na-imgmp"><Link to="/"><img src="/assets/images/Group 208.png" alt="MPlogo" className="imageLogomp" /></Link></div>
                <a className="Nav-margin" href=","><span className="iconify inc-nav-icon" data-icon="entypo-social:twitter" data-inline="false"></span></a>
                <a className="Nav-margin" href=","><span className="iconify inc-nav-icon" data-icon="entypo-social:facebook" data-inline="false"></span></a>
                <a className="Nav-margin" href=","><span className="iconify inc-nav-icon" data-icon="fa-brands:linkedin" data-inline="false"></span></a>
                <a className="Nav-margin" href=","><span className="iconify inc-nav-icon" data-icon="akar-icons:instagram-fill" data-inline="false"></span></a>
            </div>
            <div className="IncubatorNav-inner-wrapper">
                <NavLink className="Nav-margin" exact to="/incubator" activeClassName="active">Incubator</NavLink>
                <NavLink className="Nav-margin" exact to="mycourses" activeClassName="active">Events</NavLink>
                <NavLink className="Nav-margin" exact to="/learn" activeClassName="active">Learn</NavLink>
                <NavLink className="Nav-margin" exact to="/" activeClassName="active">Join</NavLink>
                {showSearch && <div><span className="iconify searchIcon" data-icon="ion:search-circle" data-inline="false"></span></div>}
            </div>
        </div>
    )
}

export default IncubarorTopNav
