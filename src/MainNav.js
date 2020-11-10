import React, {Component} from 'react';

import {NavLink} from 'react-router-dom';

export default class Nav extends Component {

    render() {
        return (
            <nav className="main-nav">
                <ul>
                    <li><NavLink to='/search/cats'>Cats</NavLink></li>
                    <li><NavLink to='/search/dogs'>Dogs</NavLink></li>
                    <li><NavLink to='/search/unicorns'>Unicorns</NavLink></li>
                </ul>
            </nav>
        );
    }
}


