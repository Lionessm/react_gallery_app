import React from 'react';
import Photo from './Photo';
import Flickr from "flickr-sdk";
import apiKey from "./config";
import request from "sync-request";

const PhotoContainer = (props) => {

    const searchQuery = props.match.params.searchQuery;

    // Get the photos from the API in a sync way.
    const res = request('GET', `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchQuery}&format=json&nojsoncallback=1`);
    const response = res.getBody();
    const photos = JSON.parse(response).photos.photo;


    const photosURLs = [];
    photos.forEach((photo) => {
        photosURLs.push(`http://farm3.static.flickr.com/2531/${photo.id}_${photo.secret}_b.jpg`);
    });

    let pictures = photosURLs.map(photo =>
        <Photo url={photo}/>
    );

    return(
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {pictures}
            </ul>
        </div>
    );
}

const performSearch = async (searchQuery) => {
    let flickr = new Flickr(apiKey);

    const response = await flickr.photos.search({
        tags: searchQuery
    });

    return await callMap(response);
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

export default PhotoContainer;