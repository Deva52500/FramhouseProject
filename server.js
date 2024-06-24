const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const farmhouseData = require('./data');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors()); 


app.get('/api/farmhouses', (req, res) => {
  res.json({ farmhouses: farmhouseData });
});

app.get('/api/farmhouses/:city', (req, res) => {
  const city = req.params.city;
  const filteredFarmhouses = farmhouseData.filter(f => f.city.toLowerCase() === city.toLowerCase());
  res.json({ farmhouses: filteredFarmhouses });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
