const Redis = require("ioredis");
const redis = new Redis(); // Default: localhost:6379

app.get("/weather/:cityCode", async (req, res) => {
    const cityCode = req.params.cityCode;

    try {
        // Check cache
        const cachedData = await redis.get(cityCode);
        if (cachedData) {
            return res.json(JSON.parse(cachedData));
        }

        // Fetch from API
        const apiKey = process.env.VISUAL_CROSSING_API_KEY;
        const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityCode}?key=${apiKey}`;
        const response = await axios.get(apiUrl);

        // Save to cache with 12-hour expiration
        await redis.setex(cityCode, 43200, JSON.stringify(response.data));

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
});
