
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Input, VStack } from '@chakra-ui/react';
import { baseUrl } from '../../config';

const DownloadOff = () => {
  const [inputValue, setInputValue] = useState('');
  const [isInputVisible, setInputVisible] = useState(false);

  const handleButtonClick = () => {
    setInputVisible(true);
  };

  const handleDownload = () => {
    axios.get(`/api/download/${inputValue}`)
      .then(response => {
        const caminhoArquivo = `/api/download/${inputValue}`;
        const mensagem = `Arquivo baixado com sucesso!\nCaminho do arquivo: ${baseUrl}${caminhoArquivo}`;
        alert(mensagem);
      })
      .catch(error => {
        console.error("Download Error", error);
        alert('Erro ao baixar o arquivo. Por favor, tente novamente mais tarde.');
      });
  };
  

  return (
    <VStack spacing={4}>
      <Button onClick={handleButtonClick}>Mostrar Campo</Button>
      {isInputVisible && (
        <div>
          <Input 
            type="number" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
          />
          <Button onClick={handleDownload}>DownloadOff</Button>
        </div>
      )}
    </VStack>
  );
};

export default DownloadOff;
