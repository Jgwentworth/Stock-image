import React, { Component } from 'react';
import Herobar from './Herobar'; 
import ImageList from './ImageList';
import axios from'axios';
import './App.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images:[],
      imageToAdd:[]
    };
    this.handleSearch = this.handleSearch.bind(this);
  } 
 
    handleSearch(event) {
      const nextImage = this.state.imageToAdd.concat(event);
      console.log(nextImage)
      const imageSearch = nextImage[0]
      let imageArr = []
        axios.get("https://pixabay.com/api/?key=6415093-d13cc03b29c89f87bcdb7aec5&q="+imageSearch+"&image_type=photo&pretty=true.json"
        ).then(function(response){
            let tempVal= response.data
            let searchResults = tempVal.hits
            for (let i = 0; i < searchResults.length; i++) {
                let x = searchResults[i];
                let y = x.webformatURL
                let user = x.user
                let post = {name: user, imageUrl: y}
                imageArr.push(post)
            } 
            this.setState({
              images: imageArr
            })          
        }.bind(this))        
    }  
    
  render() {
    return (
      <div>
        <Herobar  handleClick={this.handleSearch}></Herobar>
        <div className="container">
          <div className="row">
              <ImageList images={this.state.images} ></ImageList>
         </div>
      </div>
      </div>
    );
  }
}

export default App;
