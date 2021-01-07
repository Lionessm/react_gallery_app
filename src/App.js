import React, {Component} from 'react';
import Flickr from "flickr-sdk";
import {
    BrowserRouter, NavLink,
    Route,
    Switch
} from 'react-router-dom';
import './App.css';
import SearchForm from "./SearchForm";
import Nav from "./MainNav";
import PhotoContainer from "./PhotoContainer";
import NotFound from "./NotFound";
import apiKey from "./config";


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
                            <li><NavLink to='/cats' onClick={this.handleClick}>Cats</NavLink></li>
                            <li><NavLink to='/dogs' onClick={this.handleClick}>Dogs</NavLink></li>
                            <li><NavLink to='/unicorns' onClick={this.handleClick}>Unicorns</NavLink></li>
                        </ul>
                    </nav>
                    <Route path="/:searchQuery" component={PhotoContainer} data={this.images}/>
                </div>
            </BrowserRouter>
        );
    }
}




