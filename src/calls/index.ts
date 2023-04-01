import axios from "axios";
import moment from "moment";
import { baseUrl } from "../config";
import { GraphExpenseRevenueData } from "../pages/api/graficos/receitas-despesas";
import { TotalizerExpenseData } from "../pages/api/totalizador/despesas";
import { PublicPolicyData } from "../pages/api/totalizador/politicas-publicas";
import { TotalizerRevenueData } from "../pages/api/totalizador/receitas";

export const getRevenueTotalizer = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/totalizador/receitas`);

    const data: TotalizerRevenueData = response.data;
    const amount = data.valor;
    const percentageReached = (amount * 100) / data.valorPrevisto;

    return {
      amountRevenue: amount,
      amountRevenueProvided: data.valorPrevisto,
      percentageRevenueReached: Number(percentageReached.toFixed(2)),
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(
        `Error on get ${error.config.url}, data: ${error.response?.data}`
      );
    }
    return {
      amountRevenue: 0,
      amountRevenueProvided: 0,
      percentageRevenueReached: 0,
    };
  }
};

export const getExpenseTotalizer = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/totalizador/despesas`);

    const data: TotalizerExpenseData = response.data;
    const amount = data.valor;
    const percentageReached = (amount * 100) / data.valorPrevisto;

    return {
      amountExpense: Number(amount.toFixed(2)),
      amountExpenseProvided: data.valorPrevisto,
      percentageExpenseReached: Number(percentageReached.toFixed(2)),
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(
        `Error on get ${error.config.url}, data: ${error.response?.data}`
      );
    }
    return {
      amountExpense: 0,
      amountExpenseProvided: 0,
      percentageExpenseReached: 0,
    };
  }
};

export const getPublicPolicies = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/totalizador/politicas-publicas`
    );

    const data = response.data as PublicPolicyData[];
    return { publicPolicies: data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(
        `Error on get ${error.config.url}, data: ${error.response?.data}`
      );
    }
    return { publicPolicies: [] as PublicPolicyData[] };
  }
};

export const getGraphRevenueExpense = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/graficos/receitas-despesas`
    );

    const data: Array<GraphExpenseRevenueData> = response.data;

    const labels = data
      .map((item) => item.data)
      .filter((item, index, array) => array.indexOf(item) !== index);

    const datasets = [
      data.filter(({name}) => name.includes('Arrecadações')).map((item) => item.valorAcumulado),
      data.filter(({name}) => name.includes('Despesas e Investimentos')).map((item) => item.valorAcumulado),
      data.filter(({name}) => name.includes('Arrecadações')).map((item) => item.valor),
      data.filter(({name}) => name.includes('Despesas e Investimentos')).map((item) => item.valor),
    ];

    return {
      labels,
      datasets,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(
        `Error on get ${error.config.url}, data: ${error.response?.data}`
      );
    }
    return undefined;
  }
};
