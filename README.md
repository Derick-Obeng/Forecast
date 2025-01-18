# It's Weather TIME!



---

## Weather API with Redis Caching

This project is a simple Weather API built with **Node.js**, **Express**, and **Redis**. It fetches weather data from the **Visual Crossing Weather API** and caches the results in Redis for better performance and reduced API usage.

### Features

- Fetch real-time weather data using the Visual Crossing API.
- Cache weather data in Redis with a 12-hour expiration time.
- Rate limiting to prevent abuse of the API.
- Graceful error handling for invalid city codes or third-party API failures.

---

### Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Redis](https://redis.io/)

---

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DerrickObeng/weather-api.git
   cd weather-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add the following variables:
   ```env
   VISUAL_CROSSING_API_KEY=your_visual_crossing_api_key
   REDIS_URL=redis://localhost:6379
   ```

---

### Usage

1. Start your Redis server:
   ```bash
   redis-server
   ```

2. Run the application:
   ```bash
   node index.js
   ```

3. Access the weather API at:
   ```
   http://localhost:3000/weather/{cityCode}
   ```

---

### Endpoints

#### GET `/weather/:cityCode`

- **Description**: Fetches weather data for the specified city code. Returns cached data if available.
- **Parameters**:
  - `cityCode` (string): The city code (e.g., "New York").
- **Response**:
  - **200**: Weather data (JSON).
  - **500**: Error message if API call fails or an issue occurs.

---

### Examples

#### Request
```bash
curl http://localhost:3000/weather/NewYork
```

#### Response
```json
{
  "city": "New York",
  "temperature": "10°C",
  "conditions": "Cloudy"
}
```

---

### Built With

- [Express](https://expressjs.com/) - Web framework for Node.js.
- [Axios](https://axios-http.com/) - HTTP client for API calls.
- [ioredis](https://github.com/luin/ioredis) - Redis client for Node.js.
- [dotenv](https://github.com/motdotla/dotenv) - For managing environment variables.
- [express-rate-limit](https://github.com/nfriedly/express-rate-limit) - Rate limiting middleware.

---

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---



