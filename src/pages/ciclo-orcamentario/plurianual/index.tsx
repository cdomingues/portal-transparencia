// import moment from "moment";
// import React, { useEffect, useState } from "react";
// import Screen from "./screen";
// import axios from "axios";

// export type Laws = Array<{ name: string; link: string; year: number }>;
// function Controller() {
//   const [selectValue, setSelectValue] = useState(moment().year());
//   const [selectOptions, setSelectOptions] = useState<Array<string | number>>(
//     []
//   );
//   const [data, setData] = useState<Laws | []>([]);

//   useEffect(() => {
//     makeRequestFile();
//   }, []);

//   const makeRequestFile = async () => {
//     const response = await axios.get(
//       "https://dadosabertos.mogidascruzes.sp.gov.br/api/download/proxy",
//       {
//         params: {
//           url: `http://www.licitacao.pmmc.com.br/Transparencia/arquivos?ano=&tipo=1&pagina=1&tamanho=100000`,
//         },
//       }
//     );

//     if (!response.data) {
//       return;
//     }

//     console.log(response)

//     setData(
//       response.data.arquivos.map((item: any) => {
//         return {
//           name: item.titulo,
//           link: item.url,
//         };
//       })
//     );

//     const years = response.data.anos.sort(function (a: number, b: number) {
//       return Number(b) - Number(a);
//     });
//     setSelectOptions(years);
//   };

//   const handleSelectValue = async (value: number) => {
//     setSelectValue(value);
//     const response = await axios.get(
//       "https://dadosabertos.mogidascruzes.sp.gov.br/api/download/proxy",
//       {
//         params: {
//           url: `http://www.licitacao.pmmc.com.br/Transparencia/arquivos?ano=${value}&tipo=1&pagina=1&tamanho=100000`,
//         },
//       }
//     );

//     setData(
//       response.data.arquivos.map((item: any) => {
//         return {
//           name: item.titulo,
//           link: item.url,
//         };
//       })
//     );
//   };

//   const handler = {
//     laws: data,
//     handleSelectValue,
//     selectOptions,
//     selectValue,
//   };
//   return <Screen handler={handler} />;
// }

// export default Controller;

import moment from "moment";
import React, { useEffect, useState } from "react";
import Screen from "./screen";
import axios from "axios";

export type Laws = Array<{ name: string; link: string; year: number }>;

function Controller() {
  const [selectValue, setSelectValue] = useState(moment().year());
  const [selectOptions, setSelectOptions] = useState<Array<string | number>>([]);
  const [data, setData] = useState<Laws | []>([]);

  useEffect(() => {
    makeRequestFile();
  }, []);

  const makeRequestFile = async () => {
    const response = await axios.get(
      "https://dadosabertos.mogidascruzes.sp.gov.br/api/download/proxy",
      {
        params: {
          url: `http://www.licitacao.pmmc.com.br/Transparencia/arquivos?ano=&tipo=1&pagina=1&tamanho=100000`,
        },
      }
    );

    if (!response.data) {
      return;
    }

    setData(
      response.data.arquivos.map((item: any) => {
        return {
          name: item.titulo,
          link: item.url,
        };
      })
    );

    const years = response.data.anos.sort(function (a: number, b: number) {
      return Number(b) - Number(a);
    });
    setSelectOptions(years);
  };

  const handleSelectValue = async (value: number) => {
    setSelectValue(value);
    const response = await axios.get(
      "https://dadosabertos.mogidascruzes.sp.gov.br/api/download/proxy",
      {
        params: {
          url: `http://www.licitacao.pmmc.com.br/Transparencia/arquivos?ano=${value}&tipo=1&pagina=1&tamanho=100000`,
        },
      }
    );

    const lawsData = response.data.arquivos.map((item: any) => {
      return {
        name: item.titulo,
        link: item.url,
      };
    });

    setData(lawsData);
  };

  const handler = {
    laws: data,
    handleSelectValue,
    selectOptions,
    selectValue,
  };
  return <Screen handler={handler} />;
}

export default Controller;
