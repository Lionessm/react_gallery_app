import React, {Component} from 'react';

import {NavLink} from 'react-router-dom';

export default class Nav extends Component {

    handleClick = (e) => {
        this.props.onClickHandle(e.target.textContent);
    }

    render() {
        return (
            <nav className="main-nav">
                <ul>
                    <li><NavLink to='/<cats>' onClick={this.handleClick}>Cats</NavLink></li>
                    <li><NavLink to='/dogs' onClick={this.handleClick}>Dogs</NavLink></li>
                    <li><NavLink to='/unicorns' onClick={this.handleClick}>Unicorns</NavLink></li>
                </ul>
            </nav>
        );
    }
}


