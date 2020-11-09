import React, {Component} from 'react';
import axios from 'axios';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
import './App.css';
import SearchForm from "./SearchForm";
import Nav from "./MainNav";
import PhotoContainer from "./PhotoContainer";
import NotFound from "./NotFound";
import Config from "./config";


let apiKey = Config;

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            images: []
        };
    }

    performSearch = (query) => {
        axios.get(`http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC`)
            .then( response => {
                this.setState ({
                    images: response.data.data
                });
            })
            .catch(error => {
                console.log('Error fetching and parsing data')
            })
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <SearchForm onSearch={this.performSearch} />
                    <Nav />
                    <PhotoContainer />
                    <Route exact path="/notFound" component={NotFound}/>
                </div>
            </BrowserRouter>
        );
    }
}


