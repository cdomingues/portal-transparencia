import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import cheerio from "cheerio";

interface Licitacao {
  modalidade: string;
  processo: string;
  objeto: string;
  dataPublicacao: string;
  dataAbertura: string;
  vencimento: string;
  meioPublicacao: string;
  situacao: string;
  edital: string;
  ata: string;
  dataResultado: string;
  itens: {
    grupo: string;
    item: string;
    qtd: string;
    valor: string;
    vencedor: string;
  }[];
  participantes: {
    fornecedor: string;
    cpfcnpj: string;
    valor: string;
    vencedor: string;
    contrato: string;
  }[];
  arquivos: {
    data: string;
    descricao: string;
    link: string;
  }[];
}

// Resto do código para extração das informações do HTML

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { url } = req.query;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = `https://licitacao-mgcon.mogidascruzes.sp.gov.br/licitacao/visualizar/${req.query.id}`;

  if (typeof url !== "string") {
    return res.status(400).json({ error: "A URL é inválida." });
  }

  try {
    const response = await axios.get(url);

    const html = response.data;
    const $ = cheerio.load(html);
    const dadosTab = $("#tabDados");

    const orgao = String(dadosTab.find("#orgao").val()).trim();
    const situacao = String(dadosTab.find("#situacaos").val()).trim();
    const tipo = String(dadosTab.find("#tipo").val()).trim();
    const numero = String(dadosTab.find("#licitacao").val()).trim();
    const dataAbertura = String(dadosTab.find("#dataabertura").val()).trim();
    const publicacaoInicio = String(
      dadosTab.find("#publicacaoinicio").val()
    ).trim();
    const publicacaoFim = String(dadosTab.find("#publicacaofim").val()).trim();
    const descricao = String(
      dadosTab.find("textarea[readonly]").eq(0).val()
    ).trim();
    const objeto = String(
      dadosTab.find("textarea[readonly]").eq(1).val()
    ).trim();
    const complemento = String(
      dadosTab.find("textarea[readonly]").eq(2).val()
    ).trim();

    const tabAnexo = $("#tabAnexo");

    const anexos: any = [];
    tabAnexo.find("tbody tr").each((_, element) => {
      const descricao = $(element).find("td.text-left").text().trim();
      const link =
        "https://licitacao-mgcon.mogidascruzes.sp.gov.br" +
          $(element).find("td.text-center a").attr("href") || "";
      anexos.push({ descricao, link });
    });

    let licitacao = {
      orgao,
      situacao,
      tipo,
      numero,
      dataAbertura,
      publicacaoInicio,
      publicacaoFim,
      descricao,
      objeto,
      complemento,
      anexos,
    };

    res.status(200).json(licitacao);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Ocorreu um erro ao processar a requisição." });
  }
}
