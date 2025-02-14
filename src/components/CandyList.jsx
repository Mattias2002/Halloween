import React from 'react';
import { Link } from 'react-router-dom';

function CandyList({ data }) {
  const parseData = (csvData) => {
    const lines = csvData.trim().split('\n');
    const headers = lines[0].split(',');
    return lines.slice(1).map(line => {
      const values = line.split(',');
      return headers.reduce((obj, header, index) => {
        obj[header] = values[index];
        return obj;
      }, {});
    });
  };

  const candies = parseData(data);

  return (
    <div className="candy-list">
      {candies.map(candy => (
        <div key={candy.competitorname} className="candy-card">
          <h2><Link to={`/candy/${candy.competitorname}`}>{candy.competitorname}</Link></h2>
          <p>Chocolate: {candy.chocolate === '1' ? 'Yes' : 'No'}</p>
          <p>Fruity: {candy.fruity === '1' ? 'Yes' : 'No'}</p>
          <p className="win-percent">Win Percent: {parseFloat(candy.winpercent).toFixed(2)}%</p>
        </div>
      ))}
    </div>
  );
}

export default CandyList;
