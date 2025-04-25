// pages/api/despesas.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { year = "2025", page = "1" } = req.query;

  try {
    const url = `http://dadosadm.mogidascruzes.sp.gov.br/api/despesas?exercicio_empenho=${year}&page=${page}`;
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error: any) {
    res.status(500).json({
      error: "Erro ao buscar despesas",
      detail: error.message,
    });
  }
}
