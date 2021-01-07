import React, {Component} from 'react';
import Flickr from "flickr-sdk";
import {
    BrowserRouter,
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
                    <Route path="/search/:searchQuery" component={PhotoContainer} data={this.images}/>
                </div>
            </BrowserRouter>
        );
    }
}




