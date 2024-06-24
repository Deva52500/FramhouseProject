import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Header = ({ tab, setTab }) => {
   
  const navigate = useNavigate();
  

  const handleClick = () => {
    setTab('favorites');
    navigate('/favorites'); 
  };

  return (
    <div>
        <h1>Farmhouse Project</h1>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">FarmHouse</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
      <button class="btn btn-outline-success my-2 my-sm-0" onClick={handleClick}>Favorites</button>
      </li>
      
    </ul>
    
  </div>
</nav>
      
    </div>
  );
};

export default Header;
