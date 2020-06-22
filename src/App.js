import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { SinglePictureLayout } from './components/single-picture-layout/single-picture-layout';
import { GalleryLayout } from './components/gallery-layout/gallery-layout';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/featured_picture' component={SinglePictureLayout} />
        <Route exact path='/gallery' component={GalleryLayout}/>
        <Redirect to='/featured_picture'/>
      </Switch>
    </Router>
  );
}

export default App;
