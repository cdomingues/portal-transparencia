import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../../database2";

export type Row = {
  id: number;
  titulo: string;
  status: string;
  data: string;
  link_inscricao: string;
  tipo: string;
};

export type ConcursoData = {
  rows: Row[];
  
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ConcursoData>
) {
  //TODO: AVERIGUAR RETORNO
  if (req.method !== "GET") {
    return res.status(404);
  }

  const year = req.query.ano;

  const concursos = await database
    .select( "*" )
    .from("transparencia")
    .orderBy("id", "desc");


  

  const years = await database.raw(
    "SELECT DISTINCT data FROM transparencia order by data desc"
  );

  return res.status(200).json({
    
    rows: concursos,
   // years: years.map(({ ano }: { ano: number }) => ano),
  });
}
