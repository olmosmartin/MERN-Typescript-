import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import VideoLista from "./components/videos/VideosLista";
import VideoForm from "./components/videos/VideoForm";
import Navbar from "./components/navbar/Navbar";

import './index.css';
import './bootstrap.min.css'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={VideoLista}/>
        <Route exact path="/nuevo-video" component={VideoForm}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
