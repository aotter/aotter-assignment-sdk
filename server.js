const express = require('express')
const app = express()
const data = require('./mock-data.json');

//get random ad from mock data
const getRandomAd = () => {
  const ad = data[Math.floor(Math.random() * data.length)];
  return {
    ...ad,
    id: +new Date()
  }
}

//api endpoint
app.get('/ads', (req, res) => {
  res.json(getRandomAd());
})

app.listen(3000, () => {
  console.log('server open')
})
