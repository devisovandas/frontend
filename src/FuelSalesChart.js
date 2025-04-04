import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['07:30 - 18:30', '09:00 - 19:00'],
  datasets: [
    {
      label: 'Total Fuel Sold',
      data: [3750, 1950],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Fuel Sales During Peak Hours',
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Peak Hours',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Total Fuel Sold (Liters)',
      },
    },
  },
};

const FuelSalesChart = () => {
  return <Line data={data} options={options} />;
};

export default FuelSalesChart;