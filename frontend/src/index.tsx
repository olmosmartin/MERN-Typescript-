import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import VideoLista from "./components/videos/VideosLista";
import VideoForm from "./components/videos/VideoForm";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './index.css';
import './bootstrap.min.css'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    
    <ToastContainer/>
      <Switch>
        <Route exact path="/videos" component={VideoLista}/>
        <Route exact path="/nuevo-video" component={VideoForm}/>
        <Route exact path="/actualizar/:id" component={VideoForm}/>
      </Switch>
      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
