import randomColor from 'randomcolor';
import { IChartRequest } from '../interfaces/IChartRequest';

export const baseChart = ({ datasetLabel, labels, numbers }: IChartRequest) => {
  const backgroundColors = randomColor({
    count: labels.length,
    hue: 'blue',
    luminosity: 'bright',
  });

  const data = {
    labels,
    datasets: [
      {
        label: datasetLabel,
        data: numbers,
        backgroundColor: backgroundColors,
        borderWidth: 0,
        barThickness: 25,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
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

  return { data, options };
};
