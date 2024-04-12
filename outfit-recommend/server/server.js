const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

// Parse JSON bodies
app.use(bodyParser.json());

// API endpoint to receive input from React.js frontend
app.post('/user-input', (req, res) => {
    const { weather, occasion, gender } = req.body;
    // You can process the input here or pass it directly to your Python server
    // For simplicity, we'll pass it to the Python server in the next API endpoint
    res.sendStatus(200);
});

// API endpoint to communicate with Python server and retrieve recommendations
app.get('/recommendations', async (req, res) => {
    try {
        // Make HTTP request to Python server
        const response = await axios.get('http://localhost:5000/recommendations');
        const recommendations = response.data;
        res.send(recommendations);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Express server listening at http://localhost:${port}`);
});
