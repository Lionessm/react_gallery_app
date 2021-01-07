import React from 'react';
import Photo from './Photo';
import apiKey from "./config";
import request from "sync-request";

const PhotoContainer = (props) => {
    // Get the search query from props or use the default `cats` value.
    const searchQuery = props.match.params.searchQuery ? props.match.params.searchQuery : 'cats';

    // Set document title.
    document.title = searchQuery;

    // Get the photos from the API in a sync way.
    const res = request('GET', `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&per_page=25&tags=${searchQuery}&format=json&nojsoncallback=1`);
    const response = res.getBody();
    const photos = JSON.parse(response).photos.photo;

    const photosURLs = [];
    photos.forEach((photo) => {
        photosURLs.push(`http://farm3.static.flickr.com/2531/${photo.id}_${photo.secret}_b.jpg`);
    });

    let pictures = photosURLs.map(url =>
        <Photo url={url} key={url}/>
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

export default PhotoContainer;