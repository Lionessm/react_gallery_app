import React, {Component} from 'react';
import {
    BrowserRouter, Route
} from 'react-router-dom';
import './App.css';
import PhotoContainer from "./PhotoContainer";
import SearchForm from "./SearchForm";
import Nav from "./MainNav";
import apiKey from "./config";

export default class App extends Component {
    constructor() {
        super();

        console.log("apiKey", apiKey);
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <SearchForm/>
                    <Nav/>
                    <Route path="/:searchQuery" component={PhotoContainer}/>
                    <Route exact path="/" component={PhotoContainer}/>
                </div>
            </BrowserRouter>
        );
    }
}
