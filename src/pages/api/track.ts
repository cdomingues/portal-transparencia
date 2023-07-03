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

  const type = String(req.query.type);

  if (!id || !type) {
    return res.status(409);
  }

  if (type === "licitacoes") {
    const { data } = await axios.request({
      baseURL: `https://portaldatransparencia.mogidascruzes.sp.gov.br/index.php/licitacao/details/${id}`,
      method: "GET",
    });

    return res.status(200).json(data);
  }

  if (type === "folha_pagamento") {
    const { data } = await axios.request({
      baseURL: `https://portaldatransparencia.mogidascruzes.sp.gov.br/index.php/rh_verbas/details/${id}`,
      method: "GET",
    });

    return res.status(200).json(data);
  }

  return res.status(500);
}
