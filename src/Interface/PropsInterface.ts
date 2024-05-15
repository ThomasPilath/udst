export interface PropsChartParamsInterface {
  subject: string;
  title: string;
  xAxis: string;
  xLabel: string;
  yLabel: string;
}

export interface PropsMyChartsInterface {
  chartParams: PropsChartParamsInterface;
}

export interface PropsCustomTooltipInterface {
  payload?: any[];
  label?: string;
  active?: boolean;
}

export interface PropsDisplayToggle {
  admin: boolean;
}