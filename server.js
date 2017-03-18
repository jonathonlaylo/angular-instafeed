/*jshint esversion: 6 */
const https = require('https');
const express = require('express');
const app = express();
const env = require('dotenv').config();

const USER_ID = process.env.USER_ID;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

let target_url = `https://api.instagram.com/v1/users/${USER_ID}/media/recent/?access_token=${ACCESS_TOKEN}`;
console.log(USER_ID);

app.get('/api/instafeed', (req, res) =>{
  getPhotos(target_url)
    .then((images) => {
      // console.log(images);
      res.json(JSON.parse(images));
    })
    .catch((err) =>{
      res.send(err);
    });
});

function getPhotos(endpoint){
  return new Promise((resolve, reject) =>{
    https.get(endpoint, res => {
      let rawData = '';
      res.on('data', chunk => rawData += chunk);
      res.on('end', () => {
        resolve(rawData);
              console.log('rawData', rawData);

      });
    }).on('error', err => reject(err));
  });
}

app.listen(9000, (req, res) => {
  console.log('server started');
});
