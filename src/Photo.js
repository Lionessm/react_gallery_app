import React from 'react';

 // Display photos.
function Photo(props) {
    return(
          <li>
              <img src={props.url}/>
          </li>

    );
}

export default Photo;