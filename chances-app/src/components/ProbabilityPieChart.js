import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const ProbabilityPieChart = ({ probability, theme }) => {
  if (probability === null) return null;

  const textColor = theme === 'dark' ? '#f8f9fa' : '#212529';

  const data = {
    labels: ['Calculated Probability', 'Remaining Probability'],
    datasets: [
      {
        data: [probability, 100 - probability],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)', // Color for calculated probability
          'rgba(255, 99, 132, 0.6)', // Color for remaining probability
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: textColor,
        },
      },
      title: {
        display: true,
        text: 'Probability Distribution',
        color: textColor,
      },
    },
  };

  return (
    <div className="mt-4" style={{ height: '400px' }}>
      <h2>Probability Pie Chart</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default ProbabilityPieChart;
