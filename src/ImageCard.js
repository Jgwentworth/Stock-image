import React, {Component} from 'react';

class ImageCard extends Component {
  constructor(props) {
    super(props);
  }

render() {

    const {imageUrl, name} = this.props;
    return (
        <div className="tile is-4 is-parent">
        <article className="tile is-child box">
          <p className="title">{name}</p>
          <figure className="image is-4by3">
            <img src={imageUrl}/>
          </figure>
        </article>
        </div>
    );
};
}

export default ImageCard