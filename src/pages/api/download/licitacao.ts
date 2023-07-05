import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const Licitacao = async (req: NextApiRequest, res: NextApiResponse) => {
  const { year, type } = req.query;

  const url = `http://www.licitacao.pmmc.com.br/Transparencia/arquivos?ano=${
    year || null
  }&tipo=${type}&pagina=1&tamanho=100000`;

  try {
    const response = await axios.get(url);
    return res.json(response.data);
  } catch (error) {
    console.error("Error fetching data :", error);
    res.status(500).send("Error fetching data licitacao");
  }
};

export default Licitacao;
