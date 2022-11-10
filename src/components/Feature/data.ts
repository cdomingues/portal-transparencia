import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";

type Feature = {
  title: string;
  amount: string;
  percentage: string;
  indicatorType: "increase" | "decrease";
};

export const features: Array<Feature> = [
  {
    title: "Arrecadações",
    amount: "R$ 30.129.312,00",
    percentage: "23.36%",
    indicatorType: "increase",
  },
  {
    title: "Despesas",
    amount: "R$ 7.427.221,66",
    percentage: "9.05%",
    indicatorType: "decrease",
  },
  {
    title: "Gastos com Obras",
    amount: "R$ 4.790.330,00",
    percentage: "5.20%",
    indicatorType: "increase",
  },
  {
    title: "Saúde Pública",
    amount: "R$3.589.329,59",
    percentage: "12.00%",
    indicatorType: "increase",
  },
];

export const featureDescriptions = [
  {
    icon: IoAnalyticsSharp,
    color: "yellow",
    text: "Estatísticas",
  },
  {
    icon: IoLogoBitcoin,
    color: "green",
    text: "Financeiro",
  },
  {
    icon: IoSearchSharp,
    color: "purple",
    text: "Análises de dados e documentos",
  },
];
