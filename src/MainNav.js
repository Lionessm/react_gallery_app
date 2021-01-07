import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Nav extends Component {

    render() {
        return (
            <nav className="main-nav">
                <ul>
                    <li><NavLink class='active' to='/cats'>Cats</NavLink></li>
                    <li><NavLink to='/dogs'>Dogs</NavLink></li>
                    <li><NavLink to='/unicorns'>Unicorns</NavLink></li>
                </ul>
            </nav>
        );
    }
}


