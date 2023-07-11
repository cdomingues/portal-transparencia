import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import contentDisposition from "content-disposition";


export default async function Proxy1(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { link } = req.body;

        try {
            const response = await axios.get(link, { responseType: 'stream', headers: { 'Accept': 'application/pdf' } });
            const contentDispositionHeader = response.headers['content-disposition'];
            const parsed = contentDisposition.parse(contentDispositionHeader);
            const downloadPath = path.resolve('./data', parsed.parameters.filename);
            const writer = fs.createWriteStream(downloadPath);
            
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
