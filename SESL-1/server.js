const express = require('express');
const sqlite3 = require('sqlite3');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Create a new database connection
const db = new sqlite3.Database(path.join(__dirname, 'clicks.db'));

// Create a new table for storing click data if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS clicks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  count INTEGER,
  longitude REAL,
  latitude REAL
)`);

// Serve static files from the public directory
app.use(express.static('public'));

// Parse JSON request bodies
app.use(express.json());

// Handle POST requests for storing click data
app.post('/clicks', (req, res) => {
  const count = req.body.count;
  const longitude = req.body.location.longitude;
  const latitude = req.body.location.latitude;

  // Insert a new row into the clicks table with the click data
  db.run(`INSERT INTO clicks (count, longitude, latitude) VALUES (?, ?, ?)`, [count, longitude, latitude], (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

// Handle GET requests for retrieving click data
app.get('/clicks', (req, res) => {
  // Retrieve all rows from the clicks table
  db.all(`SELECT count, longitude, latitude FROM clicks`, (err, rows) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.send(rows);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
