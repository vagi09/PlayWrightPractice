import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("Google Gemini API key is missing. Set it in the .env file.");
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export default model;
