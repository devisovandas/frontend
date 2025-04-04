// src/Dashboard.js
import React, { useEffect, useState } from 'react';
import { fetchData } from './api';
import BarChart from './BarChart';
import LineChart from './LineChart';
import './Dashboard.css';
import { Colors } from 'chart.js';
import FuelSalesChart from './FuelSalesChart';
import PeakHoursAndSalesChart from './PeakHourSalesData';

const Dashboard = () => {

  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };
    getData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <div className="chart-grid">
        <div>
          <h2 style={{color: 'black'}}>Sales Data</h2>
          <BarChart data={data} />
        </div>
        <div>
          <h2 style={{color: 'black'}}>Peak Hour Data</h2>
          {/* <LineChart data={data} /> */}
          {data &&
          <PeakHoursAndSalesChart />
}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;