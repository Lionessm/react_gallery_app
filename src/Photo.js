import React from 'react';

function Photo(props) {
    return(
          <li>
              <img src={props.url}/>
          </li>

    );
}

export default Photo;