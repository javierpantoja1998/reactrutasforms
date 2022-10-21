import React, { Component } from 'react';
import imagenMusica from './../assets/images/musica.png';

export default class Musica extends Component {
  render() {
    return (
      <div>
        <h1 style={{color:"blue"}}>Musica</h1>
            <img src={imagenMusica} style={{width: "200px" , height: "200px"}}></img>
        </div>
    )
  }
}
