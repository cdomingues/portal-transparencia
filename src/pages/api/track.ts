import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(404);
  }

  const id = String(req.query.id);

  const { data } = await axios.request({
    baseURL: `https://portaldatransparencia.mogidascruzes.sp.gov.br/index.php/licitacao/details/${id}`,
  });

  return res.status(200).json(data);
}
