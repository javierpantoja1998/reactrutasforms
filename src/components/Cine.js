import React, { Component } from 'react'
import imagenCine from './../assets/images/cp3.jpeg';

export default class Cine extends Component {
  render() {
    return (
      <div>
            <h1 style={{color:"green"}}>Cine</h1>
            <img src={imagenCine}></img>
      </div>
    )
  }
}
