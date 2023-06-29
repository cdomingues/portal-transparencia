import React, { useEffect, useState } from 'react';
import NewsCard from '../NewsCard';

interface NewsItem {
  foto: string;
  titulo: string;
  descricao: string;
  link: string;
  data_noticia: string;
}

const NewsPanel = () => {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetch('https://dadosabertos.mogidascruzes.sp.gov.br/api/scrapeNoticias/scrapeNoticias')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro HTTP: ' + response.status);
        }
        return response.json();
      })
      .then(data => {
        setNewsData(data);
      })
      .catch(error => {
        console.error('Houve um problema com a operação fetch: ', error);
      });
  }, []);

  return (
    
    <div>
      
      {newsData.map((newsItem, index) => (
       
        <NewsCard key={index} {...newsItem} />
        
      ))}
    </div>
  );
};

export default NewsPanel;
