import React from 'react';

function Photo(props) {
    return(
          <li>
              <img src={props.url} alt="test123"/>
          </li>

    );
}

export default Photo;