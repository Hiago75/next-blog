import { Bar } from 'react-chartjs-2';
import { IChartRequest } from '../../interfaces/IChartRequest';
import { baseChart } from '../../utils/base-chart';

export const BarChart = ({ datasetLabel, labels, numbers }: IChartRequest) => {
  const { options, data } = baseChart({ datasetLabel, labels, numbers });

  return <Bar options={options} data={data}></Bar>;
};
