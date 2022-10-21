import React, { Component } from 'react';
import imagenHome from './../assets/images/home.png';

class  Home extends Component {
  render() {
    return (
      <div>
            <h1 style={{color:"fuchsia"}}></h1>
            <img src={imagenHome}></img>
      </div>
    )
  }
}
export default Home;