import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Favorites = ({ favorites }) => {
  return (
    <div>
      <h2>Favourites</h2>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>
            <img src={favorite.image} alt="Farmhouse" width= '300 px' height='300 px'/>            
            <p>Owner: {favorite.ownerName}</p>
            <p>City: {favorite.city}</p>
            <p>Address: {favorite.address}</p>
            <p>Email: {favorite.email}</p>
            <p>Phone: {favorite.phone}</p>
            <Link to={`/book/${favorite.id}`} className="btn btn-primary">Book</Link>
          </li>
        ))}
      </ul>
    
    </div>
  );
};

export default Favorites;
