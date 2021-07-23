import { useState } from 'react';
import { Bar } from 'react-chartjs-2';

export const BarChart = () => {
  const genData = () => ({
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [
      {
        label: 'Posts',
        data: [4, 3, 19, 28, 19, 31, 32],
        backgroundColor: ['#4677d4', '#053c8c'],
        borderWidth: 0,
        barThickness: 25,
      },
    ],
  });

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

  //TODO: Add dynamic data
  const [data, _setData] = useState(genData());

  return <Bar options={options} data={data}></Bar>;
};
