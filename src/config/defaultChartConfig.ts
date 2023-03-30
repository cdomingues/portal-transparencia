type TGenericChartConfig = {
  type: "line" | "bar";
  backgroundColor: string;
  borderColor: string;
  borderWidth?: number;
};

export type TRequestChartData = {
  name: string;
  ano: number;
  valor: number;
};

export type TRequestChartYearData = {
  name: string;
  ano: number;
  mes: number;
  valor: number;
  data: string;
  valorAcumulado: number;
};

export const barChartConfig: TGenericChartConfig = {
  type: "bar",
  backgroundColor: "#1E90FFA0",
  borderColor: "#1E90FF",
  borderWidth: 2,
};

export const lineChartConfig: TGenericChartConfig = {
  type: "line",
  backgroundColor: "#fac534",
  borderColor: "#fac534A0",
};

export const barChartConfig2: TGenericChartConfig = {
  type: "bar",
  backgroundColor: "#FF6347A0",
  borderColor: "#FF6347",
  borderWidth: 2,
};

export const lineChartConfig2: TGenericChartConfig = {
  type: "line",
  backgroundColor: "#fa6328",
  borderColor: "#fa6328A0",
};
