import React, { useState } from 'react';
import axios from 'axios';

const BookFarmhouse = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const handleSubmit = async (e) => {
      window.alert("Successfully submitted! You will be contact shortly")
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
return (
  <div className="form-container">
    <div className="form-wrapper">
      <h2>Inquiry</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="cardNumber" className="form-label">From</label>
          <input type="date" className="form-control" id="fromDate" name="fromDate" value={formData.fromDate} onChange={handleChange} minLength="16" maxLength="16" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="cardNumber" className="form-label">To</label>
          <input type="date" className="form-control" id="toDate" name="toDate" value={formData.toDate} onChange={handleChange} minLength="16" maxLength="16" required/>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
);
};


export default BookFarmhouse;




