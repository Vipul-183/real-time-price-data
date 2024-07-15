// backend/controller.ts

import axios from 'axios';
import { Request, Response } from 'express';
import StockData from './models/StockData';

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3';

export const fetchData = async (req: Request, res: Response) => {
  try {
    const { symbol } = req.query;
    const response = await axios.get(`${COINGECKO_API_URL}/simple/price`, {
      params: {
        ids: symbol,
        vs_currencies: 'usd',
      },
    });
    const { data } = response;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const saveData = async (req: Request, res: Response) => {
  try {
    const newData = req.body;
    const stockData = new StockData(newData);
    await stockData.save();
    res.status(201).json(stockData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
