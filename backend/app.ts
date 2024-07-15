// backend/server.ts

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { fetchData, saveData } from './controller';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
const options = {
  // user: db.username,
  // pass: db.password,
  useNewUrlParser: true,
  readPreference: 'secondaryPreferred',
  // useMongoClient: true
};
mongoose.connect('mongodb://localhost:27017/stockData', {}, () => {
  console.log('Successfully connected schoolpat-db using Common Method')});

// Define routes
app.get('/api/data', fetchData);
app.post('/api/data', saveData);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
