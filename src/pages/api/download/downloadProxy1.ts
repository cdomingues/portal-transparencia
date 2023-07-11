// pages/api/downloadPdf.ts

import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const file = req.query.file;

    // Verifica se 'file' é uma string
    if (typeof file !== 'string') {
      res.status(400).send('Bad Request');
      return;
    }

    // Define o caminho completo do arquivo
    const filePath = path.resolve('./data', file);
    const stat = fs.statSync(filePath);

    // Define o cabeçalho da resposta para indicar que é um arquivo pdf
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Disposition', `attachment; filename=${file}`);

    // Cria um stream de leitura e envia o arquivo para o cliente
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  } else {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method Not Allowed');
  }
}

