import React, {Component} from 'react';


class ImageCard extends Component{

render() {

    const {imageUrl, name} = this.props;
    return (
    <div className="columns is-mobile">
      <div className="column is-8 is-offset-2"> 
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={imageUrl} alt={name}/>
            </figure>
          </div>
          <div className="card-content">
            <div className="media-content">
              <p className="title is-4">Original Author: {name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>      
    );
};
}

export default ImageCard