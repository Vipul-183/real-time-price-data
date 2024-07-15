// backend/models/StockData.ts

import mongoose, { Document } from 'mongoose';

interface IStockData extends Document {
  symbol: string;
  price: number;
  timestamp: Date;
}

const StockDataSchema = new mongoose.Schema({
  symbol: { type: String, required: true },
  price: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

const StockData = mongoose.model<IStockData>('StockData', StockDataSchema);

export default StockData;
