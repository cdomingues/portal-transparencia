import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const filePath = path.resolve('./data/pageViews.json');

interface UpdateCountRequest {
  path: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { path: pagePath } = req.body as UpdateCountRequest;

    if (!pagePath) {
      return res.status(400).json({ message: 'Path is required' });
    }

    // Ler arquivo atual ou criar novo
    let pageViews: Record<string, number> = {};

    if (fs.existsSync(filePath)) {
      const rawData = fs.readFileSync(filePath, 'utf8');
      pageViews = JSON.parse(rawData);
    }

    // Incrementar contador
    pageViews[pagePath] = (pageViews[pagePath] || 0) + 1;

    // Salvar arquivo atualizado
    fs.writeFileSync(filePath, JSON.stringify(pageViews, null, 2));

    // Retornar contador atualizado
    res.status(200).json({ count: pageViews[pagePath] });
  } catch (error) {
    console.error('Erro ao atualizar contador:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
