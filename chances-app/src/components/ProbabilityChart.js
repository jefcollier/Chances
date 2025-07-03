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

const ProbabilityChart = ({ results }) => {
  if (!results) return null;

  const chartData = {
    labels: Object.keys(results),
    datasets: [
      {
        label: 'Probability',
        data: Object.values(results),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
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
      },
      title: {
        display: true,
        text: 'Probability Distribution',
      },
    },
    scales: {
      x: {
        barPercentage: 0.9, // Adjusts the thickness of the bars
        categoryPercentage: 0.9, // Adjusts the spacing between categories
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
