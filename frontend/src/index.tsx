import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import VideoLista from "./components/videos/VideosLista";
import VideoForm from "./components/videos/VideoForm";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={VideoLista}/>
        <Route exact path="/nuevo-video" component={VideoForm}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
