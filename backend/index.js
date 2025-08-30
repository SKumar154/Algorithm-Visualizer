// Import the required modules
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(cors());               // Enable Cross-Origin Resource Sharing
app.use(express.json());        // Parse incoming JSON requests

// Test route
app.get('/', (req, res) => {
  res.send('Hello, Express Server is running!');
});

// Server listening on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
