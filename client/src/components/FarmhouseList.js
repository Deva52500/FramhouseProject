import React, { useState, useEffect } from 'react';
import { Modal, Carousel } from 'react-bootstrap';

const FarmhouseList = ({ addToFavorites }) => {
  const [farmhouses, setFarmhouses] = useState([]);
  const [cityFilter, setCityFilter] = useState('');
  const [selectedFarmhouse, setSelectedFarmhouse] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchFarmhouses();
  }, []);

  const fetchFarmhouses = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/farmhouses');
      const data = await response.json();
      setFarmhouses(data.farmhouses);
    } catch (error) {
      console.error('Error fetching farmhouses:', error);
    }
  };

  const handleCityFilterChange = (e) => {
    setCityFilter(e.target.value);
  };

  const handleFilterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/api/farmhouses/${cityFilter}`);
      const data = await response.json();
      setFarmhouses(data.farmhouses);
    } catch (error) {
      console.error('Error filtering farmhouses:', error);
    }
  };

  const handleImageClick = (farmhouse) => {
    setSelectedFarmhouse(farmhouse);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedFarmhouse(null);
    setShowModal(false);
  };

  return (
    <div>
      <form class="form-inline my-2 my-lg-0 filter" onSubmit={handleFilterSubmit}>
        <input class="form-control mr-sm-2" placeholder="Filter by city"
          value={cityFilter}
          onChange={handleCityFilterChange} />
        <button class="btn btn-outline-success my-2 my-sm-0">Search</button>
      </form>
      
      <div className="farmhouse-grid-container">
      <div className="farmhouse-grid">
        {farmhouses.map((farmhouse) => (
          <div key={farmhouse.id} className="farmhouse-card">
            <img src={farmhouse.image} alt="Farmhouse" width='300' height='300'/>
            <p>Owner: {farmhouse.ownerName}</p>
            <p>City: {farmhouse.city}</p>
            <p>Address: {farmhouse.address}</p>
            <p>Email: {farmhouse.email}</p>
            <p>Phone: {farmhouse.phone}</p>
            <button className="btn btn-primary" onClick={() => addToFavorites(farmhouse)}>Add to Favorites</button>
            <div style={{ width: '10px', padding: '5px'}}></div>
            <button className="btn btn-primary" onClick={() => handleImageClick(farmhouse)}>View Farmhouse</button>
            </div>
            ))}
      </div>
      </div>
      {showModal && selectedFarmhouse && (
        <Modal show={true} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedFarmhouse.city}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Carousel className="custom-carousel">
              {selectedFarmhouse.images ? (
                selectedFarmhouse.images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img className="d-block w-100" src={image} alt={`Image ${index}`} />
                  </Carousel.Item>
                ))
              ) : (
                <h1>Loading...</h1>
              )}
            </Carousel>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default FarmhouseList;
