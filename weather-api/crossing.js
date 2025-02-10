require("dotenv").config();
const axios = require("axios");

app.get("/weather/:cityCode", async (req, res) => {
    const cityCode = req.params.cityCode;
    const apiKey = process.env.VISUAL_CROSSING_API_KEY;
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityCode}?key=${apiKey}`;

    try {
        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
});
