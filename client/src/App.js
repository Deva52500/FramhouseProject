import React, { useState } from 'react';
import './App.css';
import FarmhouseList from './components/FarmhouseList';
import Header from './components/Header';
import Favourites from './components/Favourites';
import BookFarmhouse from './components/BookFarmhouse';
import Footer from './components/Footer';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [favorites, setFavorites] = useState([]);
  const [tab, setTab] = useState('farmhouses');
  const [notification, setNotification] = useState('');

  const addToFavorites = (farmhouse) => {
    const isAlreadyFavorite = favorites.some((favorite) => favorite.id === farmhouse.id);
    if (!isAlreadyFavorite) {
      setFavorites([...favorites, farmhouse]);
      setNotification('Successfully added to favorites.');
    } else {
      setNotification('This farmhouse is already in your favorites.');
    }
    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  return (
    <div className="App">
      <Header tab={tab} setTab={setTab} />
      {notification && <div className="notification">{notification}</div>}
      <Routes>
        <Route path="/" element={tab === 'farmhouses' && (
            <FarmhouseList addToFavorites={addToFavorites} />
          )}/>
          
          <Route path="/favorites" element={tab === 'favorites' && <Favourites favorites={favorites} />}/>

        <Route path="/book/:id" element={<BookFarmhouse />} />
      </Routes>
      <Footer/>
       
    </div>
  );
}

export default App;
