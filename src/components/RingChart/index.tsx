import { Doughnut } from 'react-chartjs-2';
import { IChartRequest } from '../../interfaces/IChartRequest';
import { baseChart } from '../../utils/base-chart';

export const RingChart = ({ datasetLabel, labels, numbers }: IChartRequest) => {
  const { options, data } = baseChart({ datasetLabel, labels, numbers });

  return <Doughnut options={options} data={data}></Doughnut>;
};
