import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import stream from 'stream';
import { promisify } from 'util';

const pipeline = promisify(stream.pipeline);

export default async function Proxy1(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { link } = req.body;
        try {
            // Use Axios para fazer uma requisição GET ao link de download
            const response = await axios.get(link, { responseType: 'stream' });

            // Crie um stream de escrita para o arquivo de destino
            const downloadPath = path.resolve('./data', path.basename(link));
            const writer = fs.createWriteStream(downloadPath);

            // Pipe o stream de leitura da resposta no stream de escrita do arquivo
            await pipeline(response.data, writer);

            res.json({ status: 'Download Completed' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ status: 'Download Failed' });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}

