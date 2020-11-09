import React, {Component} from 'react';
import Flickr from "flickr-sdk";
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
import apiKey from "./config";


export default class App extends Component {
    constructor() {
        super();
        this.state = {
            images: []
        };
    }

    performSearch = (query) => {
        console.log("the perfom is called")
        console.log("Query " , query)
        let flickr = new Flickr(apiKey);

        flickr.photos.search({
            tags: query
        }).then( (res) => {
            this.setState ({
                images: res.body.photos
            });
            console.log('yay!', res.body.photos);
        }).catch( (err) => {
            console.error('bonk', err);
        });
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


