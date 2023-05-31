// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Button } from '@chakra-ui/react'; // Substitua pelo seu componente de botão

// const DownloadOff = () => {
//   const url = 'http://licitacao-mgcon.mogidascruzes.sp.gov.br/arquivo/download/62593';
//   const [fileName, setFileName] = useState('');

//   useEffect(() => {
//     setFileName(`${url.slice(-5)}.txt`);
//   }, []);

//   const handleDownload = () => {
//     axios.get(url, { responseType: 'blob' })
//       .then(response => {
//         const url = window.URL.createObjectURL(new Blob([response.data]));
//         const link = document.createElement('a');
//         link.href = url;
//         link.setAttribute('download', fileName);
//         document.body.appendChild(link);
//         link.click();
//       })
//       .catch(error => {
//         console.error('Error downloading file:', error);
//       });
//   };

//   return (
//     <div>
//       <Button onClick={handleDownload}>DownloadOff</Button>
//     </div>
//   );
// };


// import axios from 'axios';
// import { Button } from '@chakra-ui/react';
// import React, { useState } from 'react';






// const DownloadOff = () => {
//   const [inputValue, setInputValue] = useState('');
//   const url = 'http://licitacao-mgcon.mogidascruzes.sp.gov.br/arquivo/download/62532';
//   const fileName = url.slice(-5);


//   const handleDownload = () => {
//     axios.get(`/api/download/${inputValue}`) // aqui está a mudança
//       .then(response => {
//         alert('Arquivo baixado com sucesso!');
//       })
//       .catch(error => {
//         console.error("Download Error", error);
//         alert('Erro ao baixar o arquivo. Por favor, tente novamente mais tarde.');
//       });
//   };
  


//   return (
//     <div>
//       <input 
//         type="number" 
//         value={inputValue} 
//         onChange={(e) => setInputValue(e.target.value)} 
//       />
//       <Button onClick={handleDownload}>DownloadOff</Button>
//     </div>
//   );
// };

// export default DownloadOff;
// import axios from 'axios';
// import { Button } from '@chakra-ui/react';
// import React, { useState } from 'react';

// const DownloadOff = () => {
//   const [inputValue, setInputValue] = useState('');

//   const captureUrl = `http://licitacao-mgcon.mogidascruzes.sp.gov.br/arquivo/capture/${inputValue}`;
//   const downloadUrl = `http://licitacao-mgcon.mogidascruzes.sp.gov.br/arquivo/download/${inputValue}`;

//   const handleDownload = () => {
//     axios.get(downloadUrl)
//       .then(response => {
//         alert('Arquivo baixado com sucesso!');
//       })
//       .catch(error => {
//         console.error("Download Error", error);
//         alert('Erro ao baixar o arquivo. Por favor, tente novamente mais tarde.');
//       });
//   };

//   return (
//     <div>
//       <input 
//         type="text" 
//         value={inputValue} 
//         onChange={(e) => setInputValue(e.target.value)} 
//       />
//       <Button onClick={handleDownload}>DownloadOff</Button>
//     </div>
//   );
// };

// export default DownloadOff;

import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '@chakra-ui/react';

const DownloadOff = () => {
  const [inputValue, setInputValue] = useState('');

  const handleDownload = () => {
    axios.get(`/api/download/${inputValue}`)
      .then(response => {
        alert('Arquivo baixado com sucesso!');
      })
      .catch(error => {
        console.error("Download Error", error);
        alert('Erro ao baixar o arquivo. Por favor, tente novamente mais tarde.');
      });
  };

  return (
    <div>
      <input 
        type="number" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <Button onClick={handleDownload}>DownloadOff</Button>
    </div>
  );
};

export default DownloadOff;

