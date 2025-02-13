const express = require("express");
const app = express();

app.get("/weather/:London", (req, res) => {
    const cityCode = req.params.cityCode;
    res.json({
        city: cityCode,
        temperature: "10°C",
        message: "This is a hardcoded response.",
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
