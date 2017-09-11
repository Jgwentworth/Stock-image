import React, {Component} from 'react';
import ImageCard from './ImageCard';

class ImageList extends Component {
    render() {
        const {images} = this.props;
        return (
            <div className="tile-is-ancestor">
                {images.map((it, index) => {
                    return <ImageCard key={index} {...it}></ImageCard>
                })}
            </div>        
        )
    }
}
export default ImageList