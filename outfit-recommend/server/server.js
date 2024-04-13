// Import required modules
const express = require('express');
const fs = require('fs');
const path = require('path');

// Create an Express.js app
const app = express();
const port = process.env.PORT || 5000; // Use port 5000

// Define route to serve preferences.json
app.get('/preferences', (req, res) => {
    // Read the preferences.json file
    fs.readFile(path.resolve(__dirname, 'preferences.json'), 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading preferences.json:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        // Parse the JSON data and send it back to the client
        const preferences = JSON.parse(data);
        res.json(preferences);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Express.js server is running on port ${port}`);
});
