import axios from 'axios';
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import cron from 'node-cron';

const url = "https://www.mogidascruzes.sp.gov.br/noticias?palavra=&orgao=68&ordem=data_desc&data1=&data2=&page=1";

interface Noticia {
  foto: string;
  titulo: string;
  descricao: string;
  link: string;
  data_noticia: string;
}

const fetchNoticias = async () => {
  try {
    const { data } = await axios.get(url);
    return cheerio.load(data);
  } catch (error) {
    console.log("Failed to fetch noticias: ", error);
    return null;
  }
};

const fetchData = async () => {
  const $ = await fetchNoticias();
  if (!$) return;

  const noticias = $("#listaNoticias a.list-group-item");

  const newsData: Noticia[] = [];

  noticias.each((i, noticia) => {
    const imgElement = $(noticia).find("img");
    if (!imgElement || !imgElement.attr("src")) {
      return;
    }
    const foto = new URL(imgElement.attr("src")!, url).href;

    const titulo = $(noticia).find("h4").text();
    const descricao = $(noticia).find("p").text();

    const href = $(noticia).attr("href");
    if (!href) {
      return;
    }
    const link = new URL(href, url).href;

    const data_noticia = $(noticia).find("span").text().trim();

    newsData.push({ foto, titulo, descricao, link, data_noticia });
  });

  // Define o caminho do arquivo
  const filePath = path.resolve('./public/noticias', 'noticias.json');

  // Verifica se o diretório existe, se não, cria.
  if (!fs.existsSync(path.dirname(filePath))) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
  }

  fs.writeFile(filePath, JSON.stringify(newsData, null, 2), (err) => {
    if (err) {
      console.log('Error writing to json file', err);
    } else {
      console.log(`saved as noticias.json successfully!`);
    }
  });
};

// Agenda a tarefa para ser executada todos os dias às 11 PM
cron.schedule('0 23 * * *', fetchData);

// Chame a função fetchData imediatamente ao iniciar o servidor
fetchData();
