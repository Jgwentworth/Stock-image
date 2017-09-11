import React from 'react';

const Herobar = () => { 
    return (
        <section className="hero is-info is-medium is-bold">
            <div className="hero-head">
            <header className="nav">
            <div className="container">
                <div className="nav-left">
                <a className="nav-item">
                    <img src="images/bulma-type-white.png" alt="Logo"/>
                </a>
                </div>
                <span className="nav-toggle">
                <span></span>
                <span></span>
                <span></span>
                </span>
            <div className="field has-addons">
        <div className="control">
            <input className="input" type="text" placeholder="Find an image"/>
        </div>
        <div className="control">
            <a className="button is-info">
            Search
            </a>
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
                Images by Unsplash
            </h2>
            </div>
        </div>
        </section>
  );
};

export default Herobar;