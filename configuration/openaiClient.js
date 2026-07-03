const { OpenAI} = require('openai');



// Load environment variables
require('dotenv').config();

// Set up the configuration
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Use the API key from .env
  });

  
  


module.exports = client;
