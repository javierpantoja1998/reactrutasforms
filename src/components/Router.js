import React, { Component } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Cine from './Cine';
import Musica from './Musica';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
            <Routes>
            <Route path= "/" component={Home} element={<Home/>}/>
            <Route path= "/cine" component={Cine} element={<Cine/>}/>
            <Route path= "/musica" component={Musica} element={<Musica/>}/>
            </Routes>
      </BrowserRouter>
    )
  }
}
