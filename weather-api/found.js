
require("dotenv").config(); // Load environment variables from .env
const express = require("express"); // Import Express
const axios = require("axios"); // Import Axios for API requests

const app = express(); // Initialize Express app
const port = process.env.PORT || 3000; // Use port from .env or default to 3000

// Endpoint to fetch weather data for London
app.get("/weather/London", async (req, res) => {
    const cityCode = "London,UK"; // Explicitly set the city code for London
    const apiKey = process.env.VISUAL_CROSSING_API_KEY; // Get API key from .env
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityCode}?unitGroup=us&key=${apiKey}`;

    console.log("City Code:", cityCode);
    console.log("API Key:", apiKey);
    console.log("API URL:", apiUrl);

    try {
        const response = await axios.get(apiUrl); // Fetch data from Visual Crossing API
        console.log("API Response:", response.data); // Log the API response
        res.json(response.data); // Send the data as JSON response
    } catch (error) {
        console.error("Error fetching weather data:", error.message); // Log the error
        res.status(500).json({ error: "Failed to fetch weather data" }); // Send error response
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});