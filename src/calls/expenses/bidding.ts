import axios from "axios";
import moment from "moment";
import { baseUrl } from "../../config";
import { ExpensesBiddingData } from "../../pages/api/despesas/licitacoes";

export const getBiddings = async (year?: number) => {
  const years = [
    moment().subtract(5, "years").year(),
    moment().subtract(4, "years").year(),
    moment().subtract(3, "years").year(),
    moment().subtract(2, "years").year(),
    moment().subtract(1, "years").year(),
    moment().year(),
  ];

  try {
    const response = await axios.get(
      "http://192.168.1.118/api/3/action/datastore_search?resource_id=720083c4-16fe-488e-ad8a-326e9e679d91",
      {
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJ4T2VWV29pdlZVTG9WTjJzZk1UQ0JrQmtmMjJGRVp5QWJ0bHdyajU0ZFJNIiwiaWF0IjoxNjc5Njg4ODYyfQ.N7uwCTBg9g21vHc3brf7ayK4rKK2zuUJnglptS6k__g",
        },
        params: {
          q: year,
        },
      }
    );

    const rows = response.data?.result?.records;

    const mappingRows = rows.map((row: any) => {
      return {
        id: row?.ID,
        orgao: row?.["Orgão"],
        tipo: row?.["Tipo"],
        numero: row?.["Número"],
        situacao: row?.["Situação"],
        data_abertura:
          row?.["Data de Abertura"] &&
          moment(row?.["Data de Abertura"]).format("DD/MM/YYYYY HH:mm"),
        descricao: row?.["Descrição"],
        linkdownload: row?.["URL de Download"],
        ano: row?.["Ano"],
      };
    });

    return { biddings: mappingRows, years };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const url = error.config?.url ?? "Unknown URL";
      console.log(`Error on get ${url}, data: ${error.response?.data}`);
    }
    return { biddings: [], years };
  }
};
