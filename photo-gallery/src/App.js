import React, { useState } from 'react';
import './App.css';

import { Navigation } from './components/Navigation';
import { Gallery } from './components/Gallery';
import { Favourite } from './components/Favourite';
import { FullScreen } from './components/FullScreen';

function App() {
  const [favouriteOn, setFavouriteOn] = useState(false);
  const [likes, setLikes] = useState([]);
  const [fullScreenImg, setFullScreenImg] = useState('');
  const [openFullScreen, setOpenFullScreen] = useState(false);

  const closeFullScreen = (event) => {
    if (event.currentTarget === event.target) {
      setOpenFullScreen(false);
    }
  };

  return (
    <div className="App">
      <h1>Photo gallery</h1>
      <Navigation
        setFavouriteOn={setFavouriteOn}
      />
      <FullScreen
        fullScreenImg={fullScreenImg}
        openFullScreen={openFullScreen}
        closeFullScreen={closeFullScreen}
      />
      {!favouriteOn
        ? (
          <Gallery
            likes={likes}
            setLikes={setLikes}
            setFullScreenImg={setFullScreenImg}
            setOpenFullScreen={setOpenFullScreen}
          />
        )
        : (
          <Favourite
            likes={likes}
            setLikes={setLikes}
            setFullScreenImg={setFullScreenImg}
            setOpenFullScreen={setOpenFullScreen}
          />
        )
      }
    </div>
  );
}

export default App;
