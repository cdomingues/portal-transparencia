import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import cheerio from 'cheerio';

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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const url = 'https://portaldatransparencia.mogidascruzes.sp.gov.br/index.php/licitacao/details/7010';


  if (typeof url !== 'string') {
    return res.status(400).json({ error: 'A URL é inválida.' });
  }

  try {
    const response = await axios.get(url);
    console.log(response.data);
    const html = response.data;
    const $ = cheerio.load(html);

    const licitacao: Licitacao = {
      modalidade: $('.datatable tr:nth-child(1) td:nth-child(2)').text().trim(),
      processo: $('.datatable tr:nth-child(2) td:nth-child(2)').text().trim(),
      objeto: $('.datatable tr:nth-child(3) td:nth-child(2)').text().trim(),
      dataPublicacao: $('.datatable tr:nth-child(4) td:nth-child(2)').text().trim(),
      dataAbertura: $('.datatable tr:nth-child(5) td:nth-child(2)').text().trim(),
      vencimento: $('.datatable tr:nth-child(6) td:nth-child(2)').text().trim(),
      meioPublicacao: $('.datatable tr:nth-child(7) td:nth-child(2)').text().trim(),
      situacao: $('.datatable tr:nth-child(8) td:nth-child(2)').text().trim(),
      edital: $('.datatable tr:nth-child(9) td:nth-child(2)').text().trim(),
      ata: $('.datatable tr:nth-child(10) td:nth-child(2)').text().trim(),
      dataResultado: $('.datatable tr:nth-child(11) td:nth-child(2)').text().trim(),
      itens: [],
      participantes: [],
      arquivos: []
    };

    // Extrair itens da licitação
    $('.tab-content[data-tab-content="tab2"] .datatable tr:not(:first-child)').each((_, element) => {
      const grupo = $(element).find('td:nth-child(1)').text().trim();
      const item = $(element).find('td:nth-child(2)').text().trim();
      const qtd = $(element).find('td:nth-child(3)').text().trim();
      const valor = $(element).find('td:nth-child(4)').text().trim();
      const vencedor = $(element).find('td:nth-child(5)').text().trim();

      licitacao.itens.push({ grupo, item, qtd, valor, vencedor });
    });

    // Extrair participantes
    $('.tab-content[data-tab-content="tab3"] .datatable tr:not(:first-child)').each((_, element) => {
      const fornecedor = $(element).find('td:nth-child(1)').text().trim();
      const cpfcnpj = $(element).find('td:nth-child(2)').text().trim();
      const valor = $(element).find('td:nth-child(3)').text().trim();
      const vencedor = $(element).find('td:nth-child(4)').text().trim();
      const contrato = $(element).find('td:nth-child(5)').text().trim();

      licitacao.participantes.push({ fornecedor, cpfcnpj, valor, vencedor, contrato });
    });

    // Extrair arquivos
    $('.tab-content[data-tab-content="tab5"] .datatable tr:not(:first-child)').each((_, element) => {
      const data = $(element).find('td:nth-child(1)').text().trim();
      const descricao = $(element).find('td:nth-child(2)').text().trim();
      const link = $(element).find('td:nth-child(3) a').attr('href') ?? '';

      licitacao.arquivos.push({ data, descricao, link });
    });


    res.status(200).json(licitacao);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro ao processar a requisição.' });
  }
}
