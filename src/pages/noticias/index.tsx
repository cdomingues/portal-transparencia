import { GetServerSideProps } from 'next';
import axios from 'axios';
import Screen from '../noticias/screen';

interface NewsItem {
  foto: string;
  titulo: string;
  descricao: string;
  link: string;
  data_noticia: string;
}

interface NewsProps {
  newsData: NewsItem[];
}

const NewsPage: React.FC<NewsProps> = ({ newsData }) => (
  <Screen handler={{ newsData }} />
);

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get('https://dadosabertos.mogidascruzes.sp.gov.br/api/scrapeNoticias/scrapeNoticias');
  const newsData = res.data;
  return { props: { newsData } };
};

export default NewsPage;
