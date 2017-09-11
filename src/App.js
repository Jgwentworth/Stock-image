import React, { Component } from 'react';
import Herobar from './Herobar'; 
import ImageList from './ImageList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [{ imageUrl: "http://lorempixel.com/400/200",
                 name: "John Doe" },
                 { imageUrl: "http://lorempixel.com/400/200",
                 name: "Jane Doe" },
                 { imageUrl: "http://lorempixel.com/400/200",
                 name: "Jim Doe" },
                 { imageUrl: "http://lorempixel.com/400/200",
                 name: "John Doe" },
                 { imageUrl: "http://lorempixel.com/400/200",
                 name: "Jane Doe" },
                 { imageUrl: "http://lorempixel.com/400/200",
                 name: "John Doe" },
                 { imageUrl: "http://lorempixel.com/400/200",
                 name: "Jane Doe" },
                 { imageUrl: "http://lorempixel.com/400/200",
                 name: "John Doe" },
                 { imageUrl: "http://lorempixel.com/400/200",
                 name: "Jane Doe" },
                 { imageUrl: "http://lorempixel.com/400/200",
                 name: "John Doe" },
                 { imageUrl: "http://lorempixel.com/400/200",
                 name: "Jane Doe" }
                ],
      imageToAdd: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  } 
    handleChange(event) {
      const nextImageToAdd = event.target.value;

      this.setState({
        imageToAdd : nextImageToAdd
      })
    }
    handleClick(event) {
      const nextImage = this.state.images.concat(this.state.imageToAdd);
      const nextImageToAdd = '';

      this.setState({
        images: nextImage,
        imageToAdd: nextImageToAdd          
      })
    }


  render() {
    return (
      <div>
        <Herobar />
        <div className="container">
          <div className="row">
              <ImageList images={this.state.images}></ImageList>
         </div>
      </div>
      </div>
    );
  }
}

export default App;
