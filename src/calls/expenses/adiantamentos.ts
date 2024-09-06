import axios from "axios";
import moment from "moment";
import { baseUrl } from "../../config";
import moneyFormatter from "../../utils/moneyFormatter";
import { objetos_licitacao } from "../../utils/objetos_licitacao"; 

export const getDiarias = async (years?: number) => {
  try {
    let nextPage = "https://dadosadm.mogidascruzes.sp.gov.br/api/diarias_adiantamentos";
    let allResults: any[] = [];
    let allYears: number[] = [];

    while (nextPage) {
      const response = await axios.get(nextPage, {
       
      });

      const { results, next} = response.data;

      allResults = allResults.concat(results);
      
      nextPage = next;
    }

    const mappingRows = allResults.map((row) => {
         
           

      return {
        ...row,
        
        data_movto: moment(row.data_movto).format("DD/MM/YYYY"),
        vlr_empenho : moneyFormatter(Number(row.vlr_empenho)),
       
        
        complemento: row.complemento || " não informado"};
    });

    return { contracts: mappingRows }; // Remove duplicatas
  } catch (error) {
    console.error("Error fetching contracts:", error);
    throw error;
  }
};
