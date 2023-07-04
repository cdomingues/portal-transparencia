// import axios from 'axios';
// import cheerio, { CheerioAPI } from 'cheerio';
// import fs from 'fs';
// import path from 'path';
// import cron from 'node-cron';
// import { NextApiRequest, NextApiResponse } from 'next';

// const DATA_FILE_PATH = './data/noticias.json';

// interface Noticia {
//   foto: string;
//   titulo: string;
//   descricao: string;
//   link: string;
//   data_noticia: string;
// }

// const fetchNoticias = async (): Promise<CheerioAPI | null> => {
//   try {
//     const { data } = await axios.get(
//       'https://www.mogidascruzes.sp.gov.br/noticias?palavra=&orgao=68&ordem=data_desc&data1=&data2=&page=1'
//     );
//     return cheerio.load(data);
//   } catch (error) {
//     console.log('Failed to fetch noticias:', error);
//     return null;
//   }
// };

// const fetchData = async (): Promise<void> => {
//   const $ = await fetchNoticias();
//   if (!$) return;

//   const noticias = $('#listaNoticias a.list-group-item');

//   const newsData: Noticia[] = [];

//   noticias.each((_i, noticia) => {
//     const imgElement = $(noticia).find('img');
//     if (!imgElement || !imgElement.attr('src')) {
//       return;
//     }
//     const foto = new URL(imgElement.attr('src')!, 'https://www.mogidascruzes.sp.gov.br').href;

//     const titulo = $(noticia).find('h4').text();
//     const descricao = $(noticia).find('p').text();

//     const href = $(noticia).attr('href');
//     if (!href) {
//       return;
//     }
//     const link = new URL(href, 'https://www.mogidascruzes.sp.gov.br').href;

//     const data_noticia = $(noticia).find('span').text().trim();

//     newsData.push({ foto, titulo, descricao, link, data_noticia });
//   });

//   fs.writeFile(DATA_FILE_PATH, JSON.stringify(newsData, null, 2), (err) => {
//     if (err) {
//       console.log('Error writing to json file', err);
//     } else {
//       console.log(`Saved as noticias.json successfully!`);
//     }
//   });
// };

// const updateDataIfNeeded = async (): Promise<void> => {
//   try {
//     const data = fs.readFileSync(DATA_FILE_PATH, 'utf8');
//     const savedData = JSON.parse(data) as Noticia[];

//     const $ = await fetchNoticias();
//     if (!$) return;

//     const noticias = $('#listaNoticias a.list-group-item');

//     const newsData: Noticia[] = [];

//     noticias.each((_i, noticia) => {
//       const imgElement = $(noticia).find('img');
//       if (!imgElement || !imgElement.attr('src')) {
//         return;
//       }
//       const foto = new URL(imgElement.attr('src')!, 'https://www.mogidascruzes.sp.gov.br').href;

//       const titulo = $(noticia).find('h4').text();
//       const descricao = $(noticia).find('p').text();

//       const href = $(noticia).attr('href');
//       if (!href) {
//         return;
//       }
//       const link = new URL(href, 'https://www.mogidascruzes.sp.gov.br').href;

//       const data_noticia = $(noticia).find('span').text().trim();

//       newsData.push({ foto, titulo, descricao, link, data_noticia });
//     });

//     if (JSON.stringify(newsData) !== JSON.stringify(savedData)) {
//       fs.writeFile(DATA_FILE_PATH, JSON.stringify(newsData, null, 2), (err) => {
//         if (err) {
//           console.log('Error writing to json file', err);
//         } else {
//           console.log(`Updated noticias.json successfully!`);
//         }
//       });
//     }
//   } catch (error) {
//     console.error('Error updating data:', error);
//   }
// };

// cron.schedule('0 23 * * *', fetchData);

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'GET') {
//     try {
//       const data = fs.readFileSync(DATA_FILE_PATH, 'utf8');
//       const noticias = JSON.parse(data) as Noticia[];
//       res.status(200).json(noticias);
//     } catch (error) {
//       console.error('Error reading data from file:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }

// // Chame a função updateDataIfNeeded imediatamente ao iniciar o servidor
// updateDataIfNeeded();

// // Agende a função updateDataIfNeeded para ser executada a cada 12 horas
// cron.schedule('0 */12 * * *', updateDataIfNeeded);


// import axios from 'axios';
// import cheerio from 'cheerio';
// import fs from 'fs';
// import path from 'path';
// import cron from 'node-cron';

// const url = "https://www.mogidascruzes.sp.gov.br/noticias?palavra=&orgao=68&ordem=data_desc&data1=&data2=&page=1";

// interface Noticia {
//   foto: string;
//   titulo: string;
//   descricao: string;
//   link: string;
//   data_noticia: string;
// }

// const fetchNoticias = async () => {
//   try {
//     const { data } = await axios.get(url);
//     return cheerio.load(data);
//   } catch (error) {
//     console.log("Failed to fetch noticias: ", error);
//     return null;
//   }
// };

// const fetchData = async () => {
//   const $ = await fetchNoticias();
//   if (!$) return;

//   const noticias = $("#listaNoticias a.list-group-item");

//   const newsData: Noticia[] = [];

//   noticias.each((i, noticia) => {
//     const imgElement = $(noticia).find("img");
//     if (!imgElement || !imgElement.attr("src")) {
//       return;
//     }
//     const foto = new URL(imgElement.attr("src")!, url).href;

//     const titulo = $(noticia).find("h4").text();
//     const descricao = $(noticia).find("p").text();

//     const href = $(noticia).attr("href");
//     if (!href) {
//       return;
//     }
//     const link = new URL(href, url).href;

//     const data_noticia = $(noticia).find("span").text().trim();

//     newsData.push({ foto, titulo, descricao, link, data_noticia });
//   });

//   // Define o caminho do arquivo
//   const filePath = path.resolve('./data/', 'noticias.json');

//   // Verifica se o diretório existe, se não, cria.
//   if (!fs.existsSync(path.dirname(filePath))) {
//     fs.mkdirSync(path.dirname(filePath), { recursive: true });
//   }

//   fs.writeFile(filePath, JSON.stringify(newsData, null, 2), (err) => {
//     if (err) {
//       console.log('Error writing to json file', err);
//     } else {
//       console.log(`saved as noticias.json successfully!`);
//     }
//   });
// };

// // Agenda a tarefa para ser executada todos os dias às 11 PM
// cron.schedule('0 23 * * *', fetchData);

// // Chame a função fetchData imediatamente ao iniciar o servidor
// fetchData();

// console.log("Início da execução do código");

// import axios from 'axios';
// import cheerio from 'cheerio';
// import fs from 'fs';
// import path from 'path';
// import cron from 'node-cron';

// const url = "https://www.mogidascruzes.sp.gov.br/noticias?palavra=&orgao=68&ordem=data_desc&data1=&data2=&page=1";

// interface Noticia {
//   id: string;
//   foto: string;
//   titulo: string;
//   descricao: string;
//   link: string;
//   data_noticia: string;
// }

// const fetchNoticias = async () => {
//   try {
//     const { data } = await axios.get(url);
//     return cheerio.load(data);
//   } catch (error) {
//     console.log("Failed to fetch noticias: ", error);
//     return null;
//   }
// };

// const fetchData = async () => {
//   const $ = await fetchNoticias();
//   if (!$) return;

//   const noticias = $("#listaNoticias a.list-group-item");

//   const newsData: Noticia[] = [];

//   noticias.each((i, noticia) => {
//     const imgElement = $(noticia).find("img");
//     if (!imgElement || !imgElement.attr("src")) {
//       return;
//     }
//     const foto = new URL(imgElement.attr("src")!, url).href;

//     const titulo = $(noticia).find("h4").text();
//     const descricao = $(noticia).find("p").text();

//     const href = $(noticia).attr("href");
//     if (!href) {
//       return;
//     }
//     const link = new URL(href, url).href;

//     const data_noticia = $(noticia).find("span").text().trim();

//     newsData.push({ id: '', foto, titulo, descricao, link, data_noticia });
//   });

//   // Define o caminho do arquivo
//   const filePath = path.resolve('.public/noticias/', 'noticias.json');

//   // Verifica se o arquivo JSON já existe
//   let jsonData: Noticia[] = [];
//   if (fs.existsSync(filePath)) {
//     const existingData = fs.readFileSync(filePath, 'utf-8');
//     jsonData = JSON.parse(existingData);
//   }

//   // Define o próximo ID
//   let nextId = 1;
//   if (jsonData.length > 0) {
//     const lastId = jsonData[jsonData.length - 1].id;
//     nextId = parseInt(lastId) + 1;
//   }

//   // Preenche o ID para cada notícia e adiciona ao array de dados
//   const newsDataWithId = newsData.map((news, index) => ({
//     ...news,
//     id: (nextId + index).toString().padStart(3, '0'),
//   }));
 
//   // Combina os dados existentes com as novas notícias
//   const combinedData = [...jsonData, ...newsDataWithId];

//   fs.writeFile(filePath, JSON.stringify(combinedData, null, 2), (err) => {
//     if (err) {
//       console.log('Error writing to json file', err);
//     } else {
//       console.log(`Saved as noticias.json successfully!`);
//     }
//   });
// };

// // Agenda a tarefa para ser executada todos os dias às 11 PM
// cron.schedule('0 23 * * *', fetchData);

// // Chame a função fetchData imediatamente ao iniciar o servidor
// fetchData();


import axios from 'axios';
import cheerio, { CheerioAPI } from 'cheerio';
import fs from 'fs';
import path from 'path';
import cron from 'node-cron';
import { NextApiRequest, NextApiResponse } from 'next';

const DATA_FILE_PATH = './data/noticias.json';

interface Noticia {
  foto: string;
  titulo: string;
  descricao: string;
  link: string;
  data_noticia: string;
}

const fetchNoticias = async (): Promise<CheerioAPI | null> => {
  try {
    const { data } = await axios.get(
      'https://www.mogidascruzes.sp.gov.br/noticias?palavra=&orgao=68&ordem=data_desc&data1=&data2=&page=1'
    );
    return cheerio.load(data);
  } catch (error) {
    console.log('Failed to fetch noticias:', error);
    return null;
  }
};

const fetchData = async (): Promise<void> => {
  const $ = await fetchNoticias();
  if (!$) return;

  const noticias = $('#listaNoticias a.list-group-item');

  const newsData: Noticia[] = [];

  noticias.each((_i, noticia) => {
    const imgElement = $(noticia).find('img');
    if (!imgElement || !imgElement.attr('src')) {
      return;
    }
    let foto = new URL(imgElement.attr('src')!, 'https://www.mogidascruzes.sp.gov.br').href;

    // Alteração na URL da imagem
    foto = foto.replace('/imagens/1/', '/imagens/5/');

    const titulo = $(noticia).find('h4').text();
    const descricao = $(noticia).find('p').text();

    const href = $(noticia).attr('href');
    if (!href) {
      return;
    }
    const link = new URL(href, 'https://www.mogidascruzes.sp.gov.br').href;

    const data_noticia = $(noticia).find('span').text().trim();

    newsData.push({ foto, titulo, descricao, link, data_noticia });
  });

  fs.writeFile(DATA_FILE_PATH, JSON.stringify(newsData, null, 2), (err) => {
    if (err) {
      console.log('Error writing to json file', err);
    } else {
      console.log(`Saved as noticias.json successfully!`);
    }
  });
};

const updateDataIfNeeded = async (): Promise<void> => {
  try {
    const data = fs.readFileSync(DATA_FILE_PATH, 'utf8');
    const savedData = JSON.parse(data) as Noticia[];

    const $ = await fetchNoticias();
    if (!$) return;

    const noticias = $('#listaNoticias a.list-group-item');

    const newsData: Noticia[] = [];

    noticias.each((_i, noticia) => {
      const imgElement = $(noticia).find('img');
      if (!imgElement || !imgElement.attr('src')) {
        return;
      }
      let foto = new URL(imgElement.attr('src')!, 'https://www.mogidascruzes.sp.gov.br').href;

      // Alteração na URL da imagem
      foto = foto.replace('/imagens/1/', '/imagens/5/');

      const titulo = $(noticia).find('h4').text();
      const descricao = $(noticia).find('p').text();

      const href = $(noticia).attr('href');
      if (!href) {
        return;
      }
      const link = new URL(href, 'https://www.mogidascruzes.sp.gov.br').href;

      const data_noticia = $(noticia).find('span').text().trim();

      newsData.push({ foto, titulo, descricao, link, data_noticia });
    });

    if (JSON.stringify(newsData) !== JSON.stringify(savedData)) {
      fs.writeFile(DATA_FILE_PATH, JSON.stringify(newsData, null, 2), (err) => {
        if (err) {
          console.log('Error writing to json file', err);
        } else {
          console.log(`Updated noticias.json successfully!`);
        }
      });
    }
  } catch (error) {
    console.error('Error updating data:', error);
  }
};

cron.schedule('0 23 * * *', fetchData);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const data = fs.readFileSync(DATA_FILE_PATH, 'utf8');
      const noticias = JSON.parse(data) as Noticia[];
      res.status(200).json(noticias);
    } catch (error) {
      console.error('Error reading data from file:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

// Chame a função updateDataIfNeeded imediatamente ao iniciar o servidor
updateDataIfNeeded();

// Agende a função updateDataIfNeeded para ser executada a cada 12 horas
cron.schedule('0 */12 * * *', updateDataIfNeeded);
