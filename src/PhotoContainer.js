import React from 'react';
import Photo from './Photo';
function PhotoContainer(props) {

    let pictures;
    const results = props.data;
    if (results !== undefined) {
        pictures = results.map(picture =>
            <Photo url={picture.url} key={picture.id} />
        );
    }

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