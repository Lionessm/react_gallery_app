import React, {Component} from 'react';
import {
    BrowserRouter, Route
} from 'react-router-dom';
import './App.css';
import PhotoContainer from "./PhotoContainer";
import SearchForm from "./SearchForm";
import Nav from "./MainNav";


export default class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <SearchForm/>
                    <Nav/>
                    <Route path="/:searchQuery" component={PhotoContainer}/>
                </div>
            </BrowserRouter>
        );
    }
}




