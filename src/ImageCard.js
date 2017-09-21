import React, {Component} from 'react';


class ImageCard extends Component{

render() {

    const {imageUrl, name} = this.props;
    return (
        <div className="col col-xs-12 col-md-6 col-lg-4">
          <div>
            <img src={imageUrl}/>
          </div>  
          <p>{name}</p>
        </div>
    );
};
}

export default ImageCard