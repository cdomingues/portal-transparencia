import React, { useState, useEffect } from "react";
import { getFile } from "../services/cloudStorage";
import HomeScreen from "./screen";
import { News, Totalizer } from "../types";
import axios, { AxiosError } from "axios";
import { TotalizerRevenueData } from "./api/totalizador/receitas";
import { TotalizerExpenseData } from "./api/totalizador/despesas";
import moneyFormatter from "../utils/moneyFormatter";
import { PublicPolicyData } from "./api/totalizador/politicas-publicas";
import { GraphExpenseRevenueData } from "./api/graficos/receitas-despesas";
import moment from "moment";

function Home() {
  const [totalizers, setTotalizers] = useState<Array<Totalizer>>([]);
  const [news, setNews] = useState<Array<News>>([]);
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [expenseProvided, setExpenseProvided] = useState(1929001392.93);
  const [expensePercentageReached, setExpensePercentageReached] = useState(0);
  const [revenueAmount, setRevenueAmount] = useState(0);
  const [revenueProvided, setRevenueProvided] = useState(1768622393.28);
  const [revenuePercentageReached, setRevenuePercentageReached] = useState(0);
  const [expenseLoanding, setExpenseLoading] = useState(true);
  const [revenueLoading, setRevenueLoading] = useState(true);
  const [publicPolicies, setPublicPolicies] = useState<PublicPolicyData[]>([]);
  const [graphConfig, setGraphConfig] = useState<any>({});
  const [publicPoliciesLoading, setPublicPoliciesLoanding] = useState(false);
  const [chartLoading, setChartLoading] = useState(false);

  const getTotalizers = async () => {
    getRevenueTotalizer();
    getExpenseTotalizer();
  };

  const getRevenueTotalizer = async () => {
    try {
      setRevenueLoading(true);
      const response = await axios.get("/api/totalizador/receitas");
      setRevenueLoading(false);

      const data: TotalizerRevenueData = response.data;
      const amount = data.valor;
      const percentageReached = (amount * 100) / data.valorPrevisto;

      setRevenueAmount(amount);
      setRevenueProvided(data.valorPrevisto);
      setRevenuePercentageReached(Number(percentageReached.toFixed(2)));
    } catch (error) {
      setRevenueLoading(false);
      if (axios.isAxiosError(error)) {
        console.log(
          `Error on get ${error.config.url}, data: ${error.response?.data}`
        );
      }
    }
  };

  const getExpenseTotalizer = async () => {
    try {
      setExpenseLoading(true);
      const response = await axios.get("/api/totalizador/despesas");
      setExpenseLoading(false);

      const data: TotalizerExpenseData = response.data;
      const amount = data.valor;
      const percentageReached = (amount * 100) / data.valorPrevisto;

      setExpenseProvided(data.valorPrevisto);
      setExpensePercentageReached(Number(percentageReached.toFixed(2)));
      setExpenseAmount(Number(amount.toFixed(2)));
    } catch (error) {
      setExpenseLoading(false);
      if (axios.isAxiosError(error)) {
        console.log(
          `Error on get ${error.config.url}, data: ${error.response?.data}`
        );
      }
    }
  };

  const getPublicPolicies = async () => {
    try {
      setPublicPoliciesLoanding(true);
      const response = await axios.get("/api/totalizador/politicas-publicas");
      setPublicPoliciesLoanding(false);

      const data = response.data as PublicPolicyData[];
      setPublicPolicies(data);
    } catch (error) {
      setPublicPoliciesLoanding(false);
      if (axios.isAxiosError(error)) {
        console.log(
          `Error on get ${error.config.url}, data: ${error.response?.data}`
        );
      }
    }
  };

  const getNews = async () => {
    const response = await getFile("noticias.json");
    if (response.error) {
      return;
    }
    setNews(response.data);
  };

  const getGraphRevenueExpense = async () => {
    try {
      setChartLoading(true);
      const response = await axios.get("/api/graficos/receitas-despesas");
      setChartLoading(false);

      const data: Array<GraphExpenseRevenueData> = response.data;
      const lines = data.map((item) => {
        if (item.name === `Arrecadações - ${moment().year()}`) {
          return {
            ...item,
            name: "Arrecadações Acumuladas",
          };
        }
        return {
          ...item,
          name: "Despesas Acumuladas",
        };
      });
      const config = {
        data: [data, lines],
        xField: "data",
        yField: ["valor", "valorAcumulado"],
        geometryOptions: [
          {
            geometry: "column",
            isGroup: true,
            seriesField: "name",
            columnWidthRatio: 0.4,
          },
          {
            geometry: "line",
            seriesField: "name",
            lineStyle: ({ name }: { name: string }) => {
              return {
                opacity: 0.5,
              };
            },
          },
        ],
      };

      setGraphConfig(config);
    } catch (error) {
      setChartLoading(false);
      if (axios.isAxiosError(error)) {
        console.log(
          `Error on get ${error.config.url}, data: ${error.response?.data}`
        );
      }
    }
  };

  useEffect(() => {
    getTotalizers();
    getNews();
    getPublicPolicies();
    getGraphRevenueExpense();
  }, []);

  const handler = {
    totalizers,
    news,
    expenseAmount,
    expensePercentageReached,
    expenseProvided,
    revenueAmount,
    revenuePercentageReached,
    revenueProvided,
    expenseLoanding,
    revenueLoading,
    publicPolicies,
    graphConfig,
    publicPoliciesLoading,
    chartLoading,
  };
  return <HomeScreen handler={handler} />;
}

export default Home;
