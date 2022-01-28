import React from 'react';
import ReactDOM from 'react-dom';

import { GifExpert } from './GifExpertApp';

import './index.css';

//const titulo = document.querySelector('#tituloGif')


ReactDOM.render(
  
  <GifExpert />, 
  document.getElementById('root') // de este modo tambien podemos acceder al id de un div para asignarle valores

);


