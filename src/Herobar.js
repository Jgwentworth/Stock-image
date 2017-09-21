import React, { Component } from 'react';

class Herobar extends Component{
    constructor(props) {
        super(props);

    this.handleClick=this.handleClick.bind(this);
    this.onInput=this.onInput.bind(this);

    this.state = {
        input: ''
    }
    }

    handleClick() {
        this.props.handleClick(this.state.input)
        this.setState({
            input:''
        })
    }
    onInput(event) {
        this.setState({
            input: event.target.value
        });
    }

render(){

    return (
        <section id="herobar" className="hero is-info is-medium is-bold">
            <div className="hero-head">
            <header className="nav">
            <div className="container">
                <div className="nav-left">
                <a className="nav-item">
                    <img src="/logo_square.png" alt="Logo"/>
                </a>
                </div>
                <span className="nav-toggle">
                <span></span>
                <span></span>
                <span></span>
                </span>
            <div className="field has-addons">
        <div className="control">
            <input
              id="imageInput" 
              className="input"
              type="text"
              placeholder="Find an image"
              value={this.state.input}
              onChange={this.onInput}/>
        </div>
        <div className="control">
            <button className="button is-info"
            onClick={this.handleClick}>
            Search
            </button>
        </div>
        </div>
            </div>
            </header>
        </div>
        <div className="hero-body">
            <div className="container has-text-centered">
            <h1 className="title">
                Image Search
            </h1>
            <h2 className="subtitle">
                Images by Pixabay
            </h2>
            </div>
        </div>
        </section>
  );
};
}
export default Herobar;