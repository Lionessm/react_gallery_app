import React, {Component} from 'react';
import {
    BrowserRouter, NavLink, Route
} from 'react-router-dom';
import './App.css';
import PhotoContainer from "./PhotoContainer";


export default class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <nav className="main-nav">
                        <ul>
                            <li><NavLink to='/cats'>Cats</NavLink></li>
                            <li><NavLink to='/dogs'>Dogs</NavLink></li>
                            <li><NavLink to='/unicorns'>Unicorns</NavLink></li>
                        </ul>
                    </nav>
                    <Route path="/:searchQuery" component={PhotoContainer} data={this.images}/>
                </div>
            </BrowserRouter>
        );
    }
}




