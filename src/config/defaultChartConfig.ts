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
  borderWidth: 2,
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
  borderWidth: 2,
};


const ranges = [
  { divider: 1e12 , suffix: 'T' },
  { divider: 1e9 , suffix: 'B' },
  { divider: 1e6 , suffix: 'M' },
  { divider: 1e3 , suffix: 'k' }
];

export function formatNumber(n: number) {
  for (let i = 0; i < ranges.length; i++) {
    if (n >= ranges[i].divider) {
      return `R$ ${(n / ranges[i].divider).toString() + ranges[i].suffix}`;
    }
  }

  return `R$ ${n.toString()}`;
}
