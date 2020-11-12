import React, { useState } from 'react';
import useLocalStorage from './components/useLocalStorage';
import './App.css';

import { Navigation } from './components/Navigation';
import { Gallery } from './components/Gallery';
import { Favourite } from './components/Favourite';
import { FullScreen } from './components/FullScreen';

function App() {
  const [fullScreenImg, setFullScreenImg] = useState('');
  const [openFullScreen, setOpenFullScreen] = useState(false);
  const [likes, setLikes] = useLocalStorage('photo', []);
  const [favouriteOn, setFavouriteOn] = useLocalStorage('favourite-on', false);

  const closeFullScreen = (event) => {
    if (event.currentTarget === event.target) {
      setOpenFullScreen(false);
    }
  };

  return (
    <div className="App">
      <h1>Photo gallery</h1>
      <Navigation
        favouriteOn={favouriteOn}
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
