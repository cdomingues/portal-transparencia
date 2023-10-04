import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const filePath = path.resolve('./data/pageViews.json');

const getCurrentDate = () => {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
};

const updateCount = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { path: reqPath } = req.body;
    const currentDate = getCurrentDate();

    // Ler o arquivo JSON existente
    const rawData = fs.readFileSync(filePath, 'utf8');
    const pageViews = JSON.parse(rawData);

    // Verificar e inicializar contadores, se necessário
    if (!pageViews[currentDate]) {
      pageViews[currentDate] = {};
    }
    if (!pageViews[currentDate][reqPath]) {
      pageViews[currentDate][reqPath] = 0;
    }
    if (!pageViews['total']) {
      pageViews['total'] = 0;
    }

    // Atualizar os contadores
    pageViews[currentDate][reqPath]++;
    pageViews['total']++;

    // Salvar de volta no arquivo JSON
    fs.writeFileSync(filePath, JSON.stringify(pageViews));

    res.status(200).json({
      dailyCount: pageViews[currentDate][reqPath],
      totalCount: pageViews['total']
    });
  } else {
    res.status(405).end();  // Método não permitido
  }
};

export default updateCount;
