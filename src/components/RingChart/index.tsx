import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

export const RingChart = () => {
  const genData = () => ({
    labels: ['TypeScript', 'Python'],
    datasets: [
      {
        label: 'Posts',
        data: [4, 3],
        backgroundColor: ['#4677d4', '#053c8c'],
        borderWidth: 0,
        barThickness: 5,
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

  return <Doughnut options={options} data={data}></Doughnut>;
};
