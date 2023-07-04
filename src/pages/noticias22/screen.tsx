import React from 'react';
import ContainerBasic from '../../components/Container/Basic';
import { Stack, Text } from '@chakra-ui/react';
import NewsCard from '../../components/NewsCard';

interface NewsItem {
  foto: string;
  titulo: string;
  descricao: string;
  link: string;
  data_noticia: string;
}

interface PropsInput {
  handler: {
    newsData: NewsItem[];
  };
}

const NewsScreen: React.FC<PropsInput> = ({ handler: { newsData } }) => (
  <ContainerBasic title="Notícias" description="Notícias recentes">
    <Stack display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
      {newsData.map((newsItem, index) => (
        <NewsCard key={index} {...newsItem} />
      ))}
    </Stack>
  </ContainerBasic>
);

export default NewsScreen;
