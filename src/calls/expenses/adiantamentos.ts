import axios from "axios";
import moment from "moment";
import { baseUrl } from "../../config";
import moneyFormatter from "../../utils/moneyFormatter";
import { objetos_licitacao } from "../../utils/objetos_licitacao"; 

export const getDiarias = async (years?: number) => {
  try {
    let nextPage = "http://localhost:8000/api/diarias_adiantamentos";
    let allResults: any[] = [];
    let allYears: number[] = [];

    while (nextPage) {
      const response = await axios.get(nextPage, {
        params: {
          ano: years,
        },
      });

      const { results, next, years: responseYears } = response.data;

      allResults = allResults.concat(results);
      if (responseYears) {
        allYears = allYears.concat(responseYears.map(({ ano }: { ano: number }) => ano));
      }
      nextPage = next;
    }

    const mappingRows = allResults.map((row) => {
         
           

      return {
        ...row,
        
        dataAbertura: moment(row.dataAbertura).format("DD/MM/YYYY"),
        publicacaoInicio: moment(row.publicacaoInicio).format("DD/MM/YYYY"),
publicacaoFim: moment(row.publicacaoFim).format("DD/MM/YYYY"),
       
        
        complemento: row.complemento || " não informado"};
    });

    return { contracts: mappingRows, years: [...new Set(allYears)] }; // Remove duplicatas
  } catch (error) {
    console.error("Error fetching contracts:", error);
    throw error;
  }
};
