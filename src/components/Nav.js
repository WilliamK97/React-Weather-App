import React from 'react'
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {
    render() {
        return (
            <div>
            <nav className="blue-grey darken-1">
                <div className="nav-wrapper container ">
                <NavLink to="#" className="brand-logo">Williams Weather</NavLink>
                
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="#">Home</NavLink></li>
                    <li><NavLink to="#">Contact</NavLink></li>
                    <li><NavLink to="#">About</NavLink></li>
                </ul>
                </div>
            </nav>
            </div>
        )
    }
}


