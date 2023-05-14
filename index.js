const express = require('express');
const foodData = require('./foodData.json');
const app = express();

app.get('/health-api', function (req, res) { 
  // You can include health API logic here
})

app.get('/protein', (req, res) => {
  const proteinFoods = foodData.foods.filter(food => food.category === 'protein');
  res.send(proteinFoods);
})

app.get('/all', function (req, res) {
  res.send(foodData);
})

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
