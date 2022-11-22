import axios from "axios";
import moment from "moment";
import { baseUrl } from "../../config";
import { ExpensesPayrollData } from "../../pages/api/despesas/folha-pagamento";
import moneyFormatter from "../../utils/moneyFormatter";

type PayrollPayload = {
  ano?: number;
  mes?: number;
  nome?: string;
  cargo?: string;
  matricula?: string;
};

export const getPayroll = async ({
  ano,
  mes,
  nome,
  cargo,
  matricula,
}: PayrollPayload) => {
  try {
    const response = await axios.post(
      `${baseUrl}/api/despesas/folha-pagamento`,
      { ano, mes, nome, cargo, matricula }
    );
    const { rows }: ExpensesPayrollData = response.data;

    const mappingRows = rows.map((row) => {
      return {
        ...row,
        salariobase: moneyFormatter(Number(row.salariobase || 0)),
        bruto: moneyFormatter(Number(row.bruto || 0)),
        liquido: moneyFormatter(Number(row.liquido) || 0),
        desconto: moneyFormatter(Number(row.desconto || 0)),
        dataadmissao: row.dataadmissao
          ? moment(row.dataadmissao).format("DD/MM/YYYY hh:mm")
          : "",
        dataexoneracao: row.dataexoneracao
          ? moment(row.dataexoneracao).format("DD/MM/YYYY hh:mm")
          : "",
      };
    });

    return { payroll: mappingRows };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(
        `Error on get ${error.config.url}, data: ${error.response?.data}`
      );
    }
    return { payroll: [] };
  }
};

export const getChart = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/graficos/despesas/folha-pagamento`
    );
    const columnLine = {
      data: [response.data, response.data],
      xField: "data",
      yField: ["valor", "valorAcumulado"],
      geometryOptions: [
        {
          geometry: "column",
          pattern: {
            type: "line",
          },
        },
        {
          geometry: "line",
          lineStyle: {
            lineWidth: 2,
          },
        },
      ],
    };
    return { chart: columnLine };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(
        `Error on get ${error.config.url}, data: ${error.response?.data}`
      );
    }
    return { chart: { data: [] } };
  }
};

export const getChartYear = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/graficos/despesas/folha-pagamento-anos`
    );
    const config = {
      data: response.data,
      xField: "ano",
      yField: "valor",
      seriesField: "",
      legend: false,
      xAxis: {
        label: {
          autoHide: true,
          autoRotate: false,
        },
      },
      maxColumnWidth: 35,
    };
    return { chartYear: config };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(
        `Error on get ${error.config.url}, data: ${error.response?.data}`
      );
    }
    return { chartYear: { data: [] } };
  }
};
