import axios from "axios";
import moment from "moment";
import { baseUrl } from "../../config";
import { barChartConfig, lineChartConfig, TRequestChartData, TRequestChartYearData } from "../../config/defaultChartConfig";
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
    const response = await axios.post(`/api/despesas/folha-pagamento`, {
      ano,
      mes,
      nome,
      cargo,
      matricula,
    });
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

    const config = {
      labels: response.data.map(({ data }: TRequestChartYearData) => data),
      datasets: [
        {
          ...lineChartConfig,
          label: "Valor Acumulado",
          data: response.data.map(
            ({ valorAcumulado }: TRequestChartYearData) => valorAcumulado
          ),
          yAxisID: "y1",
        },
        {
          ...barChartConfig,
          label: "Valor",
          data: response.data.map(({ valor }: TRequestChartYearData) => valor),
          yAxisID: "y",
        },
      ],
    };

    return { chart: config };
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
      labels: response.data.map(({ ano }: TRequestChartData) => ano.toString()),
      datasets: [
        {
          ...barChartConfig,
          data: response.data.map(({ valor }: TRequestChartData) => valor),
        },
      ],
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
