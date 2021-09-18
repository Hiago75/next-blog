import { useState } from 'react';
import { Bar } from 'react-chartjs-2';

interface IBarChartRequest {
  datasetLabel: string;
  labels: string[];
  numbers: number[];
}

export const BarChart = ({ datasetLabel, labels, numbers }: IBarChartRequest) => {
  const sentData = {
    labels,
    datasets: [
      {
        label: datasetLabel,
        data: numbers,
        backgroundColor: ['#4677d4', '#053c8c'],
        borderWidth: 0,
        barThickness: 25,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const [data, _setData] = useState(sentData);

  return <Bar options={options} data={data}></Bar>;
};
