import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const filePath = path.resolve('./data/pageViews.json');

const getPageViews = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      // Ler o arquivo JSON existente
      const rawData = fs.readFileSync(filePath, 'utf8');
      const pageViews = JSON.parse(rawData);

      // Retornar os dados como resposta JSON
      res.status(200).json(pageViews);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao ler o arquivo de dados.' });
    }
  } else {
    res.status(405).end();  // Método não permitido
  }
};

export default getPageViews;
