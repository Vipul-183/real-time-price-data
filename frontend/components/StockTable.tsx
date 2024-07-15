
import React from 'react';

interface Props {
  data: any;
}

const StockTable: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price (USD)</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((symbol) => (
            <tr key={symbol}>
              <td>{symbol}</td>
              <td>{data[symbol]?.usd}</td>
              <td>{new Date(data[symbol]?.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
