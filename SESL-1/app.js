const express = require('express');
const app = express();
const cors = require('cors');

// Enable CORS
app.use(cors());

// Define the button and count elements
const button = document.getElementById('button');
const count = document.getElementById('count');

// Get the previous count from the server
fetch('/clicks')
  .then(response => response.json())
  .then(data => {
    const totalClicks = data.reduce((total, item) => total + item.count, 0);
    count.textContent = totalClicks;
  });

// Add a click event listener to the button
button.addEventListener('click', () => {
  // Get the user's location based on their IP address
  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      // Send the location data along with the click count to the server
      fetch('/clicks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ count: 1, location: data })
      });
    });

  // Increment the click count and update the display
  const currentClicks = parseInt(count.textContent);
  count.textContent = currentClicks + 1;
});
