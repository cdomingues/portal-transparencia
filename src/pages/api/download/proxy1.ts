import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import url from 'url';

export default async function Proxy1(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { link } = req.body;

        try {
            // Use Axios para fazer uma requisição GET ao link de download
            const response = await axios.get(link, { responseType: 'stream' });

            // Analise o link para obter o nome do arquivo e a extensão
            const parsedUrl = url.parse(link, true);
            const fileName = parsedUrl.query.arquivo as string;

            // Crie um stream de escrita para o arquivo de destino
            const downloadPath = path.resolve('./data', fileName);
            const writer = fs.createWriteStream(downloadPath);

            // Pipe o stream de leitura da resposta no stream de escrita do arquivo
            response.data.pipe(writer);

            writer.on('finish', () => {
                res.json({ status: 'Download Completed' });
            });

            writer.on('error', (err) => {
                console.error(err);
                res.status(500).json({ status: 'Download Failed' });
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ status: 'Download Failed' });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
