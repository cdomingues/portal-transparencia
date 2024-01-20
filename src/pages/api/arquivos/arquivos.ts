import type { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosResponse } from "axios";

interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: DataItem[];
}

interface DataItem {
  pk: string;
  nome: string | null;
  area: string | null;
  descricao: string | null;
  file: string | null;
  cadastro: string | null;
  ativo: boolean;
  ano: number;
  tipo: number;
}

interface GroupedData {
  [tipo: string]: {
    [ano: string]: DataItem[];
  };
}

function groupAndSortData(data: DataItem[]): [GroupedData, number[]] {
  const groupedData: GroupedData = {};
  const uniqueYears: Set<number> = new Set();
  const baseUrl = "https://dadosadm.mogidascruzes.sp.gov.br";

  data.forEach(item => {
    if (item.tipo !== 6) {
      return; // Ignora itens que não são do tipo 6
    }

    if (item.file) {
      item.file = baseUrl + item.file;
    }

    const tipoKey = String(item.tipo);
    const anoKey = String(item.ano);

    uniqueYears.add(item.ano);

    if (!groupedData[tipoKey]) {
      groupedData[tipoKey] = {};
    }

    if (!groupedData[tipoKey][anoKey]) {
      groupedData[tipoKey][anoKey] = [];
    }

    groupedData[tipoKey][anoKey].push(item);
  });

  Object.keys(groupedData).forEach(tipoKey => {
    Object.keys(groupedData[tipoKey]).forEach(anoKey => {
      groupedData[tipoKey][anoKey].sort((a, b) => a.ano - b.ano);
    });
  });

  return [groupedData, Array.from(uniqueYears).sort((a, b) => a - b)];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const baseUrl = "https://dadosadm.mogidascruzes.sp.gov.br/api/arquivos/?format=json";
  let allData: DataItem[] = [];
  let nextPageUrl: string | null = baseUrl;

  try {
    while (nextPageUrl) {
      const response: AxiosResponse<ApiResponse> = await axios.get(nextPageUrl);
      const responseData: ApiResponse = response.data;

      if (responseData.results && responseData.results.length > 0) {
        allData = allData.concat(responseData.results);
        nextPageUrl = responseData.next;
      } else {
        nextPageUrl = null;
      }
    }

    const [groupedAndSortedData, years] = groupAndSortData(allData);
    return res.status(200).json({ groupedAndSortedData, years });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
