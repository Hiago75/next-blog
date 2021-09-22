export interface IChartRequest {
  datasetLabel?: string;
  labels: string[];
  numbers: number[];
}

export interface IChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderWidth: number;
    barThickness: number;
  }[];
}
