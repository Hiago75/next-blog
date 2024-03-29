import randomColor from 'randomcolor';

export const baseChart = (labels: string[], numbers: number[], datasetLabel?: string) => {
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

  return { data };
};
