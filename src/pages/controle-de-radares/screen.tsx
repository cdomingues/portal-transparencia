import { Divider, Box, useColorModeValue, Heading } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import ContainerBasic from "../../components/Container/Basic";
import TableComponent, { TableColumns } from "../../components/Table";
import { useFontSizeAccessibilityContext } from "../../context/fontSizeAccessibility";

type PropsInput = {
  handler: {
    columns: TableColumns;
    data: Array<any>;
    loading: boolean;
    radarCollectionColumns: TableColumns;
    radarCollection: Array<any>;
    radarInfractionColumns: TableColumns;
    radarInfractions: Array<any>;
  };
};

export const contentRadarsControl = {
  titlePage: "Controle de Radares",
  description:
    "Agora você tem um ambiente onde pode conferir, de forma oficial, as principais informações sobre os equipamentos de fiscalização de trânsito em Mogi das Cruzes. Acompanhe um mapa interativo com a localização de cada radar, tenha acesso ao tipo de equipamento, à velocidade máxima permitida e ao status de operação deles.",
};

const markerChildren = (data: any) => {
  return (
    <>
      <p>
        <b>Tipo:</b> {data?.Tipo}
      </p>
      <p>
        <b>Velocidade (km/h):</b> {data?.Velocidade}
      </p>
      <p>
        <b>Bairro:</b> {data?.Bairro}
      </p>
      <p>
        <b>Logradouro:</b> {data?.Logradouro}
      </p>
      <p>
        <b>Sentido:</b> {data?.Sentido}
      </p>
      <p>
        <b>Faixas:</b> {data?.Faixas}
      </p>
      <p>
        <b>Status:</b> {data?.Status}
      </p>
    </>
  );
};

const MapWithNoSSR = dynamic(() => import("../../components/Map"), {
  ssr: false,
});

function Screen({
  handler: {
    columns,
    data,
    loading,
    radarCollection,
    radarCollectionColumns,
    radarInfractionColumns,
    radarInfractions,
  },
}: PropsInput) {
  const title = contentRadarsControl?.titlePage;
  const description = contentRadarsControl?.description;
  const accessibility = useFontSizeAccessibilityContext();

  return (
    <ContainerBasic title={title} description={description}>
      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="2xl"
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        width="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
        <div style={{ height: "500px", width: "100%" }}>
          <MapWithNoSSR
            coords={[-23.528986, -46.192973]}
            markers={data.map((item) => {
              const latitude = Number(
                item?.Localizacao?.split(",")?.[0]?.replace(" ", "") || 0
              );
              const longitude = Number(
                item?.Localizacao?.split(",")?.[1]?.replace(" ", "") || 0
              );

              return {
                lat: latitude,
                lng: longitude,
                children: markerChildren(item),
              };
            })}
          />
        </div>
      </Box>

      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="2xl"
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        width="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
        <Heading
          mb={2}
          fontSize={accessibility?.fonts?.ultraLarge}
          color="text.dark"
        >
          Localização dos radares
        </Heading>
        <TableComponent columns={columns} loading={loading} data={data} />
      </Box>

      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="2xl"
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        width="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
        <Heading
          mb={2}
          fontSize={accessibility?.fonts?.ultraLarge}
          color="text.dark"
        >
          Receita por radar
        </Heading>
        <TableComponent
          columns={radarCollectionColumns}
          loading={loading}
          data={radarCollection}
        />
      </Box>

      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="2xl"
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        width="100%"
        borderRadius="18px"
        marginBottom="15px"
      >
        <Heading
          mb={2}
          fontSize={accessibility?.fonts?.ultraLarge}
          color="text.dark"
        >
          Quantidade de infrações por radar
        </Heading>
        <TableComponent
          columns={radarInfractionColumns}
          loading={loading}
          data={radarInfractions}
        />
      </Box>
    </ContainerBasic>
  );
}

export default Screen;

// import { Divider, Box, useColorModeValue } from "@chakra-ui/react";
// import dynamic from "next/dynamic";
// import React from "react";
// import ContainerBasic from "../../components/Container/Basic";
// import TableComponent, { TableColumns } from "../../components/Table";

// type PropsInput = {
//   handler: {
//     columns: TableColumns;
//     data: Array<any>;
//     loading: boolean;
//   };
// };

// export const contentRadarsControl = {
//   titlePage: "Controle de Radares",
//   description: "Agora você tem um ambiente onde pode conferir, de forma oficial, as principais informações sobre os equipamentos de fiscalização de trânsito em Mogi das Cruzes. Acompanhe um mapa interativo com a localização de cada radar, tenha acesso ao tipo de equipamento, à velocidade máxima permitida e ao status de operação deles.",
// }

// const markerChildren = (data: any) => {
//   return (
//     <>
//       <p><b>Programa:</b> {data?.tipo}</p>
//       <p><b>Velocidade (km/h):</b> {data?.velocidade}</p>
//       <p><b>Bairro:</b> {data?.bairro}</p>
//       <p><b>Logradouro:</b> {data?.logradouro}</p>
//       <p><b>Sentido:</b> {data?.sentido}</p>
//       <p><b>Faixas:</b> {data?.faixas}</p>
//       <p><b>Status:</b> {data?.status}</p>
//     </>
//   );
// };

// const dataRadarJson = [
//   {
//     "Lon": -46.172711,
//     "Lat": -23.508056,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radaravanco.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radaravanco.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Francisco Rodrigues Filho (Parque Centen\u00E1rio) ",
//         "sentido": "Bairro-Centro e Centro-Bairro",
//         "job": "AVAN\u00C7O DE SEM\u00C1FORO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.206026,
//     "Lat": -23.546117,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radaravanco.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radaravanco.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Henrique Peres X Av. Dom Luiz de Souza ",
//         "sentido": "Bairro-Centro e Centro-Bairro",
//         "job": "AVAN\u00C7O DE SEM\u00C1FORO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.169386,
//     "Lat": -23.515637,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radaravanco.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radaravanco.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Jo\u00E3o XXIII x Av. J\u00FAlio Perotti ",
//         "sentido": "Bairro-Centro e Centro-Bairro",
//         "job": "AVAN\u00C7O DE SEM\u00C1FORO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.18594,
//     "Lat": -23.52042,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radaravanco.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radaravanco.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Rua Dr. Ricardo Vilela X Rua Dom Ant\u00F4nio Candido Alvarenga ",
//         "sentido": "Bairro-Centro",
//         "job": "AVAN\u00C7O DE SEM\u00C1FORO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.196599,
//     "Lat": -23.555434,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Dr. \u00C1lvaro de Campos Carneiro 1155",
//         "sentido": "Bairro-Centro",
//         "job": "FIXO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.201685,
//     "Lat": -23.55152,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Dr. \u00C1lvaro de Campos Carneiro 450",
//         "sentido": "Centro-Bairro",
//         "job": "FIXO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.241881,
//     "Lat": -23.542278,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Francisco Ferreira Lopes 4410 + 40m",
//         "sentido": "Centro-Bairro",
//         "job": "FIXO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.219185,
//     "Lat": -23.537036,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Henrique Peres 190",
//         "sentido": "Centro-Bairro",
//         "job": "FIXO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.221594,
//     "Lat": -23.5768,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Jap\u00E3o 7200",
//         "sentido": "Bairro-Centro e Centro-Bairro",
//         "job": "FIXO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.207671,
//     "Lat": -23.556983,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Julio Sim\u00F5es 2751",
//         "sentido": "Bairro-Centro",
//         "job": "FIXO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.20664,
//     "Lat": -23.557907,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Julio Sim\u00F5es oposto 2905",
//         "sentido": "Centro-Bairro",
//         "job": "FIXO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.268609,
//     "Lat": -23.541762,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Louren\u00E7o de Souza Franco 2442",
//         "sentido": "Bairro-Centro e Centro-Bairro",
//         "job": "FIXO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.253476,
//     "Lat": -23.54468,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Louren\u00E7o de Souza Franco 1231",
//         "sentido": "Bairro-Centro e Centro-Bairro",
//         "job": "FIXO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.183097,
//     "Lat": -23.542077,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Prefeito Carlos Alberto Lopes 635",
//         "sentido": "Bairro-Centro e Centro-Bairro",
//         "job": "FIXO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.187818,
//     "Lat": -23.563713,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Pref. Francisco Ribeiro Nogueira oposto 5001",
//         "sentido": "Centro-Bairro",
//         "job": "FIXO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.226991,
//     "Lat": -23.551289,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Shozo Sakai 1081",
//         "sentido": "Bairro-Centro e Centro-Bairro",
//         "job": "FIXO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.214586,
//     "Lat": -23.526382,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Ten. Onofre Rodrigues de Aguiar 901",
//         "sentido": "Bairro-Centro e Centro-Bairro",
//         "job": "FIXO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.221675,
//     "Lat": -23.528575,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Valentina Mello Freire Borenstein Parque Leon Feffer",
//         "sentido": "Bairro-Centro e Centro-Bairro",
//         "job": "FIXO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.193645,
//     "Lat": -23.531213,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarfixo.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Rua Dr. Deodato Wertheimer 2351 e 2362",
//         "sentido": "Bairro-Centro e Centro-Bairro",
//         "job": "FIXO"
//       }
//     ]
//   },
//   {
//     "Lon": -46.181309,
//     "Lat": -23.503111,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Antonio de Almeida 1111  -180m",
//         "sentido": "Centro-Bairro",
//         "job": "REDUTOR DE VELOCIDADE"
//       }
//     ]
//   },
//   {
//     "Lon": -46.191597,
//     "Lat": -23.560408,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Dr. \u00C1lvaro de Campos Carneiro 443 + 500m",
//         "sentido": "Centro-Bairro",
//         "job": "REDUTOR DE VELOCIDADE"
//       }
//     ]
//   },
//   {
//     "Lon": -46.270343,
//     "Lat": -23.540459,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "AVENIDA GUILHERME GEORGE 2336",
//         "sentido": "Bairro-Centro e Centro-Bairro",
//         "job": "REDUTOR DE VELOCIDADE"
//       }
//     ]
//   },
//   {
//     "Lon": -46.203577,
//     "Lat": -23.537181,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "AVENIDA JAP\u00C3O 961",
//         "sentido": "Bairro-Centro e Centro-Bairro",
//         "job": "REDUTOR DE VELOCIDADE"
//       }
//     ]
//   },
//   {
//     "Lon": -46.209744,
//     "Lat": -23.533149,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Francisco Ferreira Lopes 101",
//         "sentido": "Bairro-Centro",
//         "job": "REDUTOR DE VELOCIDADE"
//       }
//     ]
//   },
//   {
//     "Lon": -46.21482,
//     "Lat": -23.568048,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Jap\u00E3o 3978 + 850m",
//         "sentido": "Centro-Bairro",
//         "job": "REDUTOR DE VELOCIDADE"
//       }
//     ]
//   },
//   {
//     "Lon": -46.21392,
//     "Lat": -23.514086,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Joaquim Pereira de Carvalho 518",
//         "sentido": "Centro-Bairro e Bairro-Centro",
//         "job": "REDUTOR DE VELOCIDADE"
//       }
//     ]
//   },
//   {
//     "Lon": -46.216021,
//     "Lat": -23.57395,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Kaoru Hiramatsu 2390",
//         "sentido": "Centro-Bairro",
//         "job": "REDUTOR DE VELOCIDADE"
//       }
//     ]
//   },
//   {
//     "Lon": -46.195268,
//     "Lat": -23.504187,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Av. Lothar Waldemar Hoehne 1747",
//         "sentido": "Bairro-Centro",
//         "job": "REDUTOR DE VELOCIDADE"
//       }
//     ]
//   },
//   {
//     "Lon": -46.217628,
//     "Lat": -23.505716,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Estrada do Evangelho Pleno x Rodovia Pedro Eroles 1887",
//         "sentido": "Bairro-Centro",
//         "job": "REDUTOR DE VELOCIDADE"
//       }
//     ]
//   },
//   {
//     "Lon": -46.214201,
//     "Lat": -23.506079,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Rodovia Pedro Eroles 1060",
//         "sentido": "Bairro-Centro e Centro-Bairro",
//         "job": "REDUTOR DE VELOCIDADE"
//       }
//     ]
//   },
//   {
//     "Lon": -46.203451,
//     "Lat": -23.514668,
//     "Icon": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//     "Desc": [
//       {
//         "img": "https://mobilidade.mogidascruzes.sp.gov.br/arquivos/imagens/radarlombada.png",
//         "link": "https://mobilidade.mogidascruzes.sp.gov.br/public/radar_listagem",
//         "name": "Rua Cabo Diogo Oliver 1077",
//         "sentido": "Bairro-Centro e Centro-Bairro",
//         "job": "REDUTOR DE VELOCIDADE"
//       }
//     ]
//   }
// ]

// const MapWithNoSSR = dynamic(() => import("../../components/Map"), {
//   ssr: false,
// });

// function Screen({ handler: { columns, data, loading } }: PropsInput) {
//   const title = contentRadarsControl?.titlePage;
//   const description = contentRadarsControl?.description;

//   return (
//     <ContainerBasic title={title} description={description}>
//       <Box m={0} bg={useColorModeValue("white", "gray.800")} boxShadow="2xl" padding={"15px"} rounded="md" overflow="hidden" width="100%" borderRadius="18px" marginBottom="15px">
//         <div style={{ height: "500px", width: "100%" }}>
//           <MapWithNoSSR
//             coords={[-23.528986, -46.192973]}
//             markers={dataRadarJson.map((item) => {
//               return {
//                 lat: item?.Lat,
//                 lng: item?.Lon,
//                 children: markerChildren(item.Desc[0]),
//               };
//             })}
//           />
//         </div>
//       </Box>

//       <Box m={0} bg={useColorModeValue("white", "gray.800")} boxShadow="2xl" padding={"15px"} rounded="md" overflow="hidden" width="100%" borderRadius="18px" marginBottom="15px">
//         <TableComponent columns={columns} loading={loading} data={dataRadarJson} />
//       </Box>
//     </ContainerBasic>
//   );
// }

// export default Screen;
