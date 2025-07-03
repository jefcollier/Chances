import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ProbabilityChart = ({ results, theme }) => {
  if (!results) return null;

  const textColor = theme === 'dark' ? '#f8f9fa' : '#212529';
  const gridColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)';
  const barColor = theme === 'dark' ? '#ffc107' : 'rgba(75, 192, 192, 0.6)';

  const chartData = {
    labels: Object.keys(results),
    datasets: [
      {
        label: 'Probability',
        data: Object.values(results),
        backgroundColor: barColor,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false, // Allows chart to take up full height of parent container
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
    scales: {
      x: {
        barPercentage: 0.9, // Adjusts the thickness of the bars
        categoryPercentage: 0.9, // Adjusts the spacing between categories
        ticks: {
          color: textColor,
        },
        grid: {
          color: gridColor,
        },
      },
      y: {
        ticks: {
          color: textColor,
        },
        grid: {
          color: gridColor,
        },
      },
    },
  };

  return (
    <div className="mt-4" style={{ height: '600px' }}> {/* Increased height of the chart container */}
      <h2>Probability Chart</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ProbabilityChart;
