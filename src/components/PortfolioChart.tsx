'use client';

import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const API_KEY = 'm/NEANa5Mb7VWFNIdAXRb7azIsS/GtH6KEUGReBWUCA=';

interface ChartData {
  data: Array<{
    timestamp: number;
    value: number;
  }>;
}

export default function PortfolioChart() {
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await fetch('https://openapiv1.coinstats.app/portfolio/chart', {
          headers: {
            'X-API-KEY': API_KEY,
            'Accept': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch chart data');
        }

        const data = await response.json();
        setChartData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load chart');
      } finally {
        setLoading(false);
      }
    };

    fetchChartData();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <div className="text-primary">Loading chart...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  if (!chartData?.data) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <div className="text-red-500">No data available</div>
      </div>
    );
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#888888'
        }
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#888888'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#00F593',
        borderWidth: 1
      }
    }
  };

  const data = {
    labels: chartData.data.map(item => 
      new Date(item.timestamp * 1000).toLocaleDateString()
    ),
    datasets: [
      {
        label: 'Portfolio Value',
        data: chartData.data.map(item => item.value),
        fill: true,
        borderColor: '#00F593',
        backgroundColor: 'rgba(0, 245, 147, 0.1)',
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: '#00F593',
        pointHoverBorderColor: '#ffffff'
      }
    ]
  };

  return (
    <div className="w-full h-64 bg-surface/20 rounded-xl p-4">
      <Line options={chartOptions} data={data} />
    </div>
  );
}
