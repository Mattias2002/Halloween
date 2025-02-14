import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function CandyDetails({ data }) {
  const { name } = useParams();

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
  const candy = candies.find(c => c.competitorname === name);

  if (!candy) {
    return <div>Candy not found!</div>;
  }

  const chartData = {
    labels: ['Win %', 'Sugar %', 'Price %'],
    datasets: [
      {
        label: candy.competitorname,
        data: [candy.winpercent, candy.sugarpercent, candy.pricepercent],
        backgroundColor: [
          'rgba(0, 122, 255, 0.5)', // Blue
          'rgba(52, 199, 89, 0.5)',  // Green
          'rgba(255, 149, 0, 0.5)',  // Orange
        ],
        borderColor: [
          'rgba(0, 122, 255, 1)',
          'rgba(52, 199, 89, 1)',
          'rgba(255, 149, 0, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)', // Lighter grid lines
                }
            },
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'white', // Legend text color
                }
            },
            title: {
                display: false,
            }
        }
    };

  return (
    <div className="candy-details">
      <h2>{candy.competitorname}</h2>
      <p>Chocolate: {candy.chocolate === '1' ? 'Yes' : 'No'}</p>
      <p>Fruity: {candy.fruity === '1' ? 'Yes' : 'No'}</p>
      <p>Caramel: {candy.caramel === '1' ? 'Yes' : 'No'}</p>
      <p>Peanut/Almondy: {candy.peanutyalmondy === '1' ? 'Yes' : 'No'}</p>
      <p>Nougat: {candy.nougat === '1' ? 'Yes' : 'No'}</p>
      <p>Crisped Rice/Wafer: {candy.crispedricewafer === '1' ? 'Yes' : 'No'}</p>
      <p>Hard: {candy.hard === '1' ? 'Yes' : 'No'}</p>
      <p>Bar: {candy.bar === '1' ? 'Yes' : 'No'}</p>
      <p>Pluribus: {candy.pluribus === '1' ? 'Yes' : 'No'}</p>
      <p>Sugar Percent: {parseFloat(candy.sugarpercent).toFixed(2)}%</p>
      <p>Price Percent: {parseFloat(candy.pricepercent).toFixed(2)}%</p>
      <p>Win Percent: {parseFloat(candy.winpercent).toFixed(2)}%</p>

      <div className='chart-container'>
        <Bar data={chartData} options={options}/>
      </div>

      <Link to="/" className="back-button">Back to List</Link>
    </div>
  );
}

export default CandyDetails;
