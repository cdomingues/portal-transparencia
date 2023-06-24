import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import fs from 'fs';
import { promisify } from 'util';

const DATA_FILE_PATH = './data/radar_listagem.json';
const SCRAPE_INTERVAL = 12 * 60 * 60 * 1000; // 12 horas em milissegundos

interface RadarData {
  Lon: number;
  Lat: number;
  Icon: string;
  Desc: {
    img: string;
    link: string;
    name: string;
    sentido: string;
    job: string;
  }[];
}

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const fetchDataFromURL = async (): Promise<RadarData[]> => {
  try {
    const response = await axios.get('https://mobilidade.mogidascruzes.sp.gov.br/public/radar');
    const html = response.data;

    const dataRadar: RadarData[] = [];

    const regex = /{\s*"Lon":\s*(-?\d+\.\d+),\s*"Lat":\s*(-?\d+\.\d+),\s*"Icon":\s*"([^"]+)",\s*"Desc":\s*\[\s*{\s*"img":\s*"([^"]+)",\s*"link":\s*"([^"]+)",\s*"name":\s*"([^"]+)",\s*"sentido":\s*"([^"]+)",\s*"job":\s*"([^"]+)"\s*}\s*]\s*}/g;
    let match;
    while ((match = regex.exec(html)) !== null) {
      const [, Lon, Lat, Icon, img, link, name, sentido, job] = match;
      const data = {
        Lon: parseFloat(Lon),
        Lat: parseFloat(Lat),
        Icon,
        Desc: [{
          img,
          link,
          name,
          sentido,
          job
        }]
      };
      dataRadar.push(data);
    }

    return dataRadar;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const saveDataToFile = async (data: RadarData[]): Promise<void> => {
  await writeFileAsync(DATA_FILE_PATH, JSON.stringify(data, null, 2));
  console.log('Data saved to file:', DATA_FILE_PATH);
};

const fetchDataFromFile = async (): Promise<RadarData[] | null> => {
  try {
    const data = await readFileAsync(DATA_FILE_PATH, 'utf8');
    return JSON.parse(data) as RadarData[];
  } catch (error) {
    console.error('Error reading data from file:', error);
    return null;
  }
};

const updateDataIfNeeded = async (): Promise<void> => {
  try {
    const scrapedData = await fetchDataFromURL();
    const savedData = await fetchDataFromFile();

    if (JSON.stringify(scrapedData) !== JSON.stringify(savedData)) {
      await saveDataToFile(scrapedData);
    }
  } catch (error) {
    console.error('Error updating data:', error);
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const dataRadar = await fetchDataFromFile();
      if (dataRadar) {
        res.status(200).json(dataRadar);
      } else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } catch (error) {
      console.error('Error fetching data from file:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

// Verificar e atualizar os dados iniciais
updateDataIfNeeded();

// Iniciar a atualização periódica dos dados
setInterval(updateDataIfNeeded, SCRAPE_INTERVAL);
