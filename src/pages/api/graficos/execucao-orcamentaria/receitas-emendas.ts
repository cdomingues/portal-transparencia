import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../../../database";

type Data = {
  name: string;
  ano: number;
  valor: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  if (req.method !== "GET") {
    return res.status(404);
  }

  const graphs = [];
  const years = [
    moment().subtract(5, "years").year(),
    moment().subtract(4, "years").year(),
    moment().subtract(3, "years").year(),
    moment().subtract(2, "years").year(),
    moment().subtract(1, "years").year(),
    moment().year(),
  ];

  const filter = [
    "1.7.1.3.99.0.1.02 - PORT 3968/2021-EP 81000792-PROP 423056/21",
    "1.7.1.3.99.0.1.06 - PORT. 4182/21 PROP 425389/21-EP 81000794 REL GERAL",
    "1.7.1.3.99.0.1.08 - EP 90600002 DEP GUILHERME DERRITE PORT 828/22",
    "1.7.1.3.99.0.1.09 - EP 39080002 DEP ALEXANDRE PADILHA PORT 828/22",
    "1.7.1.3.99.0.1.10 - EP 15810008 DEP JEFFERSON CAMPOS PORT 731/22",
    "1.7.1.3.99.0.1.11 - EP 41260001 DEP KATIA SASTRE PORT 731/22",
    "1.7.1.3.99.0.1.12 - EP 25320004 DEP PAULO P. DA SILVA PORT 731/22",
    "1.7.1.3.99.0.1.13 - EP 37170019 DEP MARCIO ALVINO PORT 731/22",
    "1.7.1.3.99.0.1.14 - EP 81000312–REL. GERAL–PROP.457259-22 PORT 1482/22",
    "1.7.1.3.99.0.1.15 - EP 81000312–REL. GERAL–PROP.470300-22–PORT.1827/22",
    "1.7.1.3.99.0.1.16 - EP 81000311-REL. GERAL-PROP.457261-22-PORT.1452/22",
    "1.7.1.7.52.0.1.01 - TRANSF EP 35306072020002-B.ROSSI - ESTR.REDE SU",
    "1.7.1.7.52.0.1.02 - EP 37350003/2021- SCFV -AMDEM - DEP.NILTO TATTO",
    "1.7.1.7.52.0.1.03 - EP 37300004 MIGUEL LOMBARDI-C.S.VICENTE PAULO-PSE",
    "1.7.1.7.52.0.1.04 - TRANSF. ESTRUT. REDE SUAS-APAE EP KATIA SASTRE",
    "1.7.1.7.52.0.1.05 - ESTRUT. REDE DE SERV. DO SUAS - PO COVID",
    "1.7.2.3.50.0.1.04 - RESOL. SS 11/22 - E.P. 202106133768 - CUSTEIO",
    "1.7.2.3.50.0.1.05 - RESOLUÇÃO SS 54/2022-Emenda 2022.010.37901-CUSTEIO",
    "1.7.2.3.50.0.1.06 - RESOLUÇÃO 76/2022 EP 2022.099.44271",
    "1.7.2.3.50.0.1.07 - RESOLUÇÃO 76/2022 EP 2022.253.42843",
    "1.7.2.3.50.0.1.08 - RESOLUÇÃO 76/2022 EP 2022.125.41934",
    "1.7.2.3.50.0.1.09 - RESOLUÇÃO 76/2022 EP 2022.253.43483",
    "1.7.2.3.50.0.1.10 - RESOLUÇÃO 76/2022 EP 2022.253.42307",
    "1.7.2.3.50.0.1.12 - RESOLUÇÃO SS 83/2022-Emenda 71250001-MAC-Sta Casa",
    "1.7.2.3.50.0.1.13 - RESOLUÇÃO SS 85/2022-Emenda 2022.040.38312-Custeio",
    "1.7.2.9.52.0.1.01 - EP2022.043.38558-ESTEVAM GALVÃO OSC MADRE ESPERANÇ",
    "1.7.2.9.99.0.1.02 - TRANSF. EM. PARL. JANAINA PASCHOAL AQ. VEÍCULO",
    "1.7.2.9.99.0.1.04 - EP - Revitalização de Bairros - Amaral - Custeio",
    "2.4.1.1.99.0.1.02 - PORT 1153/2022 EMENDA 41350004 DEP VINICIUS POIT",
    "2.4.1.1.99.0.1.03 - PORT 1159/2022 EMENDA 39280006 DEP CARLA ZAMBELLI",
    "2.4.1.1.99.0.1.04 - PORT 1184/2022 EMENDA 32280009 DEP IVAN VALENTE",
    "2.4.1.1.99.0.1.05 - PORT 1159/2022 EMENDA 32280009 DEP IVAN VALENTE",
    "2.4.1.1.99.0.1.06 - PORT 1159/2022 EMENDA 32280009 DEP IVAN VALENTE",
    "2.4.1.1.99.0.1.07 - PORT 1184/2022 EMENDA 39050002 DEP ALENCAR S.BRAGA",
    "2.4.1.4.99.0.1.13 - ESTRUT. REDE SUAS/SMAS EP.GILBERTO NASCIMENTO",
    "2.4.1.9.99.0.1.31 - EP DEP TABATA AMARAL - INVESTIMENTO",
    "2.4.1.9.99.0.1.32 - EP Dep Joyce Hasselmann Aq Eq CEU das Artes Cesar",
    "2.4.1.9.99.0.1.33 - EP Dep Pol Katia Sastre Aq Equip Segurança Publica",
    "2.4.2.2.99.0.1.13 - S. Agricult - Aceler. Compostagem",
    "2.4.2.2.99.0.1.19 - EP 2021.063.31179-Dep. Marcos Damásio-CASTRA MÓVEL",
    "2.4.2.2.99.0.1.20 - COMPRA EQUIP CCZ MOGI",
    "2.4.2.2.99.0.1.21 - AQUIS. EQUIP. SEGURANÇA PÚBLICA",
    "2.4.2.9.99.0.1.02 - EP MARINA HELOU IMPL ESPAÇO LAZER NOVO HORIZONTE",
    "2.4.2.9.99.0.1.03 - EP SERGIO VICTOR MOBILIARIOS PARA HUB",
    "2.4.2.9.99.0.1.04 - EP HENI OZI CUKIER AQ EQUIP SEGURANÇA PUBLICA",
  ];

  for (const year of years) {
    const revenue = await database()
      .sum("valor as valor")
      .from("RECEITAS_ORC")
      .whereIn("receita", filter)
      .where("ano", year);

    graphs.push({
      name: "Receitas Emendas Parlamentares",
      ano: year,
      valor: Number(revenue[0].valor || 0),
    });
  }

  return res.status(200).json(graphs);
}
