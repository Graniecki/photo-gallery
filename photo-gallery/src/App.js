import React, { useState } from 'react';
import './App.css';

import { Navigation } from './components/Navigation';
import { Images } from './components/Images';
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
          <Images
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
          />
        )
      }
    </div>
  );
}

export default App;
