import axios from "axios";
import { baseUrl } from "../../config";

export const getPayrollData = async (Ano: number, Mes: number, Matricula: string) => {
  try {
    const response = await axios.post(`/api/despesas/folha-pagamento-detalhes`, {
      Ano, Mes, Matricula
    });

    const { rows, count } = response.data;

    return { payrollData: rows, count };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const url = error.config?.url ?? "Unknown URL";
      console.log(
        `Error on post ${url}, data: ${error.response?.data}`
      );
    }
    return { payrollData: [], count: 0 };
  }
};
