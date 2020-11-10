import React, {Component} from 'react';
import Flickr from "flickr-sdk";
import './App.css';
import SearchForm from "./SearchForm";
import Nav from "./MainNav";
import PhotoContainer from "./PhotoContainer";
import apiKey from "./config";

export default class General extends Component {
    constructor() {
        super();

        this.state = {
            images: []
        };
    }

    performSearch = async (query) => {
        let flickr = new Flickr(apiKey);

        const response = await flickr.photos.search({
            tags: query
        });

        const photosWithURL = await callMap(response);

        this.setState ({
            images: photosWithURL
        });
    }

    render() {
        return (
            <div>
                <SearchForm onSearch={this.performSearch} />
                <Nav onClickHandle={this.performSearch}/>
                <PhotoContainer data={this.state.images} />
            </div>
        );
    }
}

const callMap = async (response) => {
    let flickr = new Flickr(apiKey);

    // This map returns an array of photos with their URL and ID
    const photosWithURL = await Promise.all(response.body.photos.photo.map(async (photo) => {
        const res = await flickr.photos.getSizes({
            photo_id: photo.id
        });

        return {
            url: res.body.sizes.size[1].source,
            id: photo.id
        };
    }));

    return photosWithURL;
}


