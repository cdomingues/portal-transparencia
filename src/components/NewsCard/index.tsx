import React from 'react';
import { Button, Image } from '@chakra-ui/react';
import colors from '../../styles/colors';
import styled from 'styled-components';
import * as Text from "../../styles/text";
import { isMobile } from 'react-device-detect';

interface NewsItem {
  foto: string;
  titulo: string;
  descricao: string;
  link: string;
  data_noticia: string;
}

const Card = styled.div`
  background-color: white;
  padding: 20px;
  margin: 0px; 
  width: 950px;
  display: flex;
  flex-direction: row;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
  &:hover {
    border-top: 3px solid red;
  }
`;

const NewsCard: React.FC<NewsItem> = ({ foto, titulo, descricao, link, data_noticia }) => (
  <Card style={{alignItems: isMobile ? 'center' : 'flex-start' }}>
    <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
      <div>
        <Text.Heading3Bold marginBottom={7} color={colors.grayDark70p}>{titulo}</Text.Heading3Bold>
        {data_noticia}
      </div>
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', marginTop: '10px'}}>
        <div style={{alignItems: 'center'}}>
        <Image src={foto} alt={titulo} style={{justifyContent: 'center', alignItems: 'center', maxWidth: '200px'}} />
        </div>
        <div style={{display: 'flex', flexDirection: 'column', marginLeft: '15px'}}>
          <div style={{ padding: '5px', marginLeft: '10px'}}>
          <p>{descricao}</p>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', marginLeft: '15px'}}>
          <div style={{ justifyContent: 'center', alignItems: 'center', padding: '5px', marginTop: '15px'}}>
            <Button as="a" href={link} target="_blank" rel="noopener noreferrer" style={{ justifyContent: 'right', alignItems: 'right'}}>Leia mais</Button >
          </div>
        </div>
      </div>
    </div>
  </Card>
);
export default NewsCard;
