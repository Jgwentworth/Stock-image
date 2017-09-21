import React, {Component} from 'react';
import ImageCard from './ImageCard';

class ImageList extends Component {
    render() {
        const {images} = this.props;
        return (
            <div className="col col-sm-10">
                <div className="row">
                {images.map((it, index) => {
                    return <ImageCard key={index} {...it}></ImageCard>
                })}
            </div>        
            </div>
        )
    }
}
export default ImageList