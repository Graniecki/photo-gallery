import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import { Navigation } from './components/Navigation';
import { Images } from './components/Images';
import { Favourite } from './components/Favourite';
// import { FavouritePhotos } from './components/FavouritePhotos';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Photo gallery</h1>
        <Navigation />
      </div>
      <Switch>
        <Route exact path="/" component={Images} />
        <Route exact path="/favourite" component={Favourite} />
      </Switch>
    </Router>
  );
}

export default App;
