/* eslint-disable react-hooks/rules-of-hooks */
import LayoutConstructions from "../../../components/LayoutConstructions";
import * as Text from "../../../styles/text";
import * as Style from "../../../styles/components/pesquisar-obras/styles";
import { parseMoney } from "../../../utils/mask";
import colors from "../../../styles/colors";
import Carousel from "../../../components/Swiper";
import { Box, Img, Input, Link, Select, useColorModeValue } from "@chakra-ui/react";
import { JSXElementConstructor, Key, ReactElement, ReactFragment, useState } from "react";
import router from "next/router";
import { formatString } from "../../../utils/stringUtils";
import ContainerBasic from "../../../components/Container/Basic";
import { isMobile } from "react-device-detect";
import wall from "../../../assets/images/logoportal_simbolo_portalobras.png";
import wallNegative from "../../../assets/images/logoportal_simbolo_portalobras_negativo.png";
import vagalumeMobi from "../../../assets/images/Portal-de-Obras_fototopo_homemobi.png";
import vagalumeDesk from "../../../assets/images/Portal-de-Obras_fototopo_homedesk.png";
import pesquisaDesk from "../../../assets/images/Portal-de-Obras_fototopo_pesquisedesk.png";
import pesquisaMobi from "../../../assets/images/Portal-de-Obras_fototopo_pesquisemobi.png";
import { IoAddCircleOutline } from "react-icons/io5";
import seta from "../../../assets/images/icones/Icones_Home Portal Transparencia__botao abre.svg";
import hBottom from "../../../assets/images/Icones_Home_Portal_Transparencia__botao_circulo.svg";
import build from "next/dist/build";
import DadosAbertos from "../../../components/DadosAbertos";
import ConstructionScreen from "../construcao/screen";
import ConstructionStatusChecker from "../../../components/ConstructionChecker";

interface PropsPagination {
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}
type PropsInput = {
  handler?: {
    data?: Array<any>;
    loading?: boolean;
    showAsideByDefault?: boolean; // Nova propriedade
    showToggleButton?: boolean; // Isso irá omitir o botão
    showFirstBox?: boolean; // Isso irá omitir o botão
  };
};

export const ppas = [
  
  {
      "id": "e6c84d7c-5ac3-42eb-87cf-19375f4d83d9",
      "programa": "1000 - EDUCA MOGI"
  },
  {
      "id": "2db3ac4b-97c1-4342-a59b-8283f227524b",
      "programa": "1001 - PRIMEIROS PASSOS"
  },
  {
      "id": "5365203c-6e94-42b9-b0de-e04ce713c742",
      "programa": "2000 - MOGI EFICIENTE"
  },
  {
      "id": "78c05dc2-73dc-4d92-b5f5-e7fdd330bd6c",
      "programa": "2001 - CIDADE INTELIGENTE"
  },
  {
      "id": "bd0471d2-138c-40c0-bac5-8b3512606518",
      "programa": "2002 - APRIMORAMENTO DA GESTÃO PÚBLICA "
  },
  {
      "id": "f2e2bc6d-9e12-4766-9864-ad30b7ad7e24",
      "programa": "2003 - HABITAÇÃO"
  },
  {
      "id": "f30943c4-fbef-4f0f-9343-17315b896058",
      "programa": "2004 - INFRAESTRUTURA"
  },
  {
      "id": "7b2469ef-bf09-44a0-bf71-4a31428eb743",
      "programa": "2005 - NOSSA TERRA"
  },
  {
      "id": "07706189-eb23-4195-8051-60350e124bd7",
      "programa": "2006 - SANEAMENTO AMBIENTAL"
  },
  {
      "id": "22b5289e-990e-4e13-8ec4-9c479461eb3d",
      "programa": "2007 - MOBILIDADE URBANA"
  },
  {
      "id": "ecdc4609-00dd-4409-b7c5-6a5a8a7af6eb",
      "programa": "3000 - REDUÇÃO DA POBREZA "
  },
  {
      "id": "ed9dc9d6-e623-4ccc-8072-482db26aea6a",
      "programa": "3001 - MOGI ACOLHEDORA "
  },
  {
      "id": "05d2694e-4527-4bb6-ae77-c7e2bbf6ef35",
      "programa": "3002 - CULTURA "
  },
  {
      "id": "f8d4a8b6-389e-4ce4-96ac-79ae9079f4ad",
      "programa": "3003 - ESPORTE "
  },
  {
      "id": "2afecc1c-084f-4c05-824c-e4b58071c8a1",
      "programa": "3004 - SEGURANÇA"
  },
  {
      "id": "e2951a19-2fe6-414d-bdb6-03cb038a2f60",
      "programa": "3100 - SAÚDE"
  },
  {
      "id": "9567184c-8b80-439a-aa17-641332a287ef",
      "programa": "4000 - EMPREGO E RENDA"
  },
  {
      "id": "ecc8a622-77ec-4edd-9444-fba1a44e4b93",
      "programa": "6000 - PODER LEGISLATIVO"
  },
  {
      "id": "d73a116b-8d76-488e-a610-e8d18a8e6123",
      "programa": "9999 - RESERVA DE CONTINGÊNCIA"
  }
]

export const bairros = [
  {"id":"8122a817-373a-4efc-89af-0e58bd81321a","nome":"ALTO DO IPIRANGA"},
  {"id":"a95380f5-0bc6-42db-8a5c-d740788ad48d","nome":"CAPUTERA"},
  {"id":"995b2236-3266-421f-8547-b1006d3bb068","nome":"CENTRO"},
  {"id":"98cd2ce1-a299-4d01-9df5-13af4c94d925","nome":"JARDIM ARACY"},
  {"id":"0bcc2507-ba6f-405f-8527-fea41e734b02","nome":"JARDIM CAMILA"},
  {"id":"bd82ec64-7c46-4fd4-8c4d-83f6d09c3d79","nome":"JARDIM IVETE"},
  {"id":"ac13eff1-cb96-4618-a23b-3b4290c9203f","nome":"JARDIM RUBI"},
  {"id":"bbb9955e-2f76-4495-ad54-5cbd6f785895","nome":"MOGILAR"},
  {"id":"b0fed68c-42fb-459a-87ff-28fa6e027f81","nome":"MOGI MODERNO"},
  {"id":"624517b1-32d9-4086-bfb2-77cab7afdc12","nome":"NOVA BERTIOGA"},
  {"id":"23a635b0-1aa6-4395-85fe-8cdc19db2edf","nome":"NOVA MOGILAR"},
  {"id":"ec1a51fc-eaa5-45cf-92a9-2a9b9991fd13","nome":"PARQUE MORUMBI"},
  {"id":"76192f1f-c1ee-488a-884f-730764fc78bf","nome":"PARQUE SANTANA"},
  {"id":"c48a6de9-3358-45be-9d78-50dc64de3791","nome":"PONTE GRANDE"},
  {"id":"4567d23a-42a7-48c4-a7f8-a3a9edafd951","nome":"REAL PARK"},
  {"id":"ab55591d-8599-4188-8ec9-67c63b57230d","nome":"RIO ABAIXO"},
  {"id":"b71acb9d-36a6-43c7-b6df-062f64304669","nome":"RODEIO"},
  {"id":"01bee2fe-8456-401c-99b5-8ff1e3eee577","nome":"SERRA DO ITAPETI"},
  {"id":"21944e58-765c-4c39-a6ab-7c9e9c2c10e1","nome":"SOCORRO"},
  {"id":"fe889a3f-eeda-4c48-81de-47eaa2c37cbc","nome":"TOYAMA"},
  {"id":"195905b8-0737-464f-bc25-27929cfd495b","nome":"VILA DA PRATA"},
  {"id":"6f867d59-5e36-4109-a3af-3d0d31758d81","nome":"VILA CINTRA"},
  {"id":"91bb3b93-8f8f-4b74-af32-eb035543fafd","nome":"VILA DAS ORQUÍDEAS"},
  {"id":"170e20d6-9385-4a66-9b77-02152bbbc77a","nome":"VILA JUNDIAÍ"},
  {"id":"c3c3007c-14a6-4d14-a48e-ed547f305947","nome":"VILA SÃO FRANCISCO"},
  {"id":"dbc332da-c565-4c2e-83bf-3c0f5eab7f9e","nome":"JARDIM ESPERANÇA"},
  {"id":"2d26c786-b69c-4bbd-a780-c367c7f1e645","nome":"JARDIM SANTA TEREZ"},
  {"id":"1d20557b-d314-4c0f-bff2-dcd34459cb1a","nome":"JARDIM DOS AMARAI"},
  {"id":"fa8258e6-07b0-4603-b23a-bc1e011baf62","nome":"PARQUE OLÍMPICO"},
  {"id":"eeb75b2e-4372-4c4c-a1df-75f790bb6422","nome":"BELLA CITTÀ"},
  {"id":"3c87261c-6ed3-4ed1-bf4b-68ea6d8f3482","nome":"JARDIM MARICÁ"},
  {"id":"20b36924-d76c-4adb-9045-6f6fc04cb032","nome":"CENTRO CÍVICO"},
  {"id":"a666f677-63ab-4dc6-a43b-64d107cec127","nome":"SÃO JOÃO"},
  {"id":"e1b6a52e-eb84-40fa-803d-fc9cc843348a","nome":"PARQUE MONTE LÍBANO"},
  {"id":"e13f1365-3697-4bd1-813d-bb517df8bbca","nome":"RESIDENCIAL COCUERA"},
  {"id":"f4c943c6-c6cf-4b57-8c22-cccc68e48daa","nome":"VILA NOVA UNIÃO"},
  {"id":"f25a2fec-f442-46a7-bdf6-09780f609de1","nome":"CONJUNTO SÃO SEBASTIÃO"},
  {"id":"da21b670-a73d-420b-9c81-13824f9943f6","nome":"VILA LAVÍNIA"},
  {"id":"3ffd2ca2-5384-40ad-8d6b-c73db9d568b1","nome":"VILA SÃO SEBASTIÃO"},
  {"id":"e7c650f6-09ee-4fee-95af-2127dce240e2","nome":"PARQUE RESIDENCIAL ITAPETI"},
  {"id":"7e9415e5-6a15-4f31-9d85-dc9c12635546","nome":"VILA MORAES"},
  {"id":"55dc65f3-4adb-47cc-8f56-68a1eca4c5b0","nome":"VILA NATAL"},
  {"id":"d3e304e6-a965-43d2-9e8b-947a3cda6e9a","nome":"VILA OLIVEIRA"},
  {"id":"4b8aa4e9-3b3e-4b5a-a1a6-7ff98832c124","nome":"VILA RUBENS"},
  {"id":"32f2e755-82dc-44c4-a75b-55c598dcb470","nome":"BRAZ CUBAS"},
  {"id":"d966996d-3aa7-4acc-a2f4-eb8217cc0cc7","nome":"CONJUNTO DO BOSQUE"},
  {"id":"20ac467b-c3bf-4301-b807-df3b8ebc4d5c","nome":"JARDIM AEROPORTO"},
  {"id":"c6a822e8-862c-407f-9330-8de5b94082a0","nome":"JARDIM LAYR"},
  {"id":"9e34d62e-5221-4270-b876-331b71a31100","nome":"JARDIM PLANALTO"},
  {"id":"b6d61894-95f9-46aa-9a19-3d7e97a44c7e","nome":"JARDIM SANTOS DUMONT"},
  {"id":"61cef7a3-87e9-48bc-b889-9d470e9f96da","nome":"JARDIM UNIVERSO"},
  {"id":"d3225741-c67c-424e-bb2b-87d2eae0adff","nome":"PORTEIRA PRETA"},
  {"id":"e6fe168b-3fc5-4819-8f7d-7fc40f08e2e4","nome":"VILA BRASILEIRA"},
  {"id":"f7e699b4-4360-4499-a361-018121f5ea2b","nome":"VILA MUNICIPAL"},
  {"id":"6edd6667-e39e-4b3b-bbb5-579bc3b7f56f","nome":"VILA PAULISTA"},
  {"id":"070c3f10-61fa-497d-9ca6-52576b9553dd","nome":"PARQUE SÃO MARTINHO"},
  {"id":"33065c91-9723-4bed-b59e-dea40252b2a8","nome":"REAL PARK TIETÊ"},
  {"id":"3029f962-87c1-476c-95b9-cbb6188ccb56","nome":"CHÁCARA SANTO ÂNGELO"},
  {"id":"eb42fe1b-9ecb-4271-aa6e-3d347ceb4968","nome":"CONJUNTO SANTO ÂNGELO"},
  {"id":"4bb9ef34-d33d-4307-a4e1-7a7243f32791","nome":"SANTO ÂNGELO"},
  {"id":"4f93e557-7f9c-4714-8d45-812ede143a90","nome":"BEIJA FLOR"},
  {"id":"e64b88e8-293d-43ff-9773-9d6fed3353bc","nome":"COLÔNIA AGRÍCOLA ITAPETI"},
  {"id":"6adde830-6a9a-4dba-9de5-59cbed461e6d","nome":"SÃO BENTO DO PARATEÍ"},
  {"id":"6ad7ce50-fe4e-437a-a558-c1af5dc69363","nome":"CHÁCARA ITAPETI"},
  {"id":"9a952a76-c41c-4c32-be26-df14a24a2c37","nome":"CHÁCARA SÃO JOAQUIM"},
  {"id":"ad147031-bb23-4f47-8ac1-442f63255c2f","nome":"COLINAS DO PARATEHY"},
  {"id":"e7685030-6ddd-4d27-bd07-be438aa81370","nome":"PIUM"},
  {"id":"0c7cd02c-bbd5-454e-9360-747b42003a43","nome":"TABOR"},
  {"id":"bced0064-c628-42af-8371-593a2ab7abab","nome":"RESIDENCIAL NOVO HORIZONTE"},
  {"id":"7a80cf65-d11f-4821-95d3-ba8f23f6ce85","nome":"CONJUNTO JEFFERSON DA SILVA"},
  {"id":"ce8bb404-7ae3-47b3-b280-0904e1a893f0","nome":"JARDIM SÃO PEDRO"},
  {"id":"9771b4e0-f030-418c-89ae-a40ec893cc97","nome":"VILA SUÍSSA"},
  {"id":"21fa0ab8-d099-495d-9fac-e2cca33e623d","nome":"CAPIXINGA"},
  {"id":"3db63e8b-0c7b-4c68-b432-d6a7d6166a8c","nome":"BOTUQUARA"},
  {"id":"ef99eb6e-e4ac-4877-a7f8-cc01991e22e4","nome":"SABAÚNA"},
  {"id":"d9af6c9b-c4b7-4b32-b44d-07602cbfadef","nome":"TAQUARUÇU"},
  {"id":"b18e726d-7633-4228-b4b3-e1baf022d743","nome":"PEDRA BRANCA"},
  {"id":"3f7988ef-1db3-49e6-b704-cf2a9fefe1c4","nome":"VARGEM GRANDE"},
  {"id":"34250850-092c-4fc6-b261-bd6adbb4ff37","nome":"CAPELA"},
  {"id":"5bf7abb5-b609-4e78-ab9f-1a7f0c05c783","nome":"MANOEL FERREIRA"},
  {"id":"ad4946bd-87db-4089-9aad-f730793980b6","nome":"CHÁCARA GUANABARA"},
  {"id":"73692280-4a46-450a-a90f-57c1e5bcdd79","nome":"ITAPETY"},
  {"id":"6f885546-4535-47ce-bd28-a8846abacc69","nome":"TABOÃO"},
  {"id":"a298d76a-7b47-4957-9b75-b3e098b1ee62","nome":"ARUÃ"},
  {"id":"b23a25ad-afdd-4f2d-ac01-83ff20fd2793","nome":"FAZENDA CAPELINHA"},
  {"id":"fe19ff8f-e84d-493f-b6f6-35a79206d8c9","nome":"JARDIM MARGARIDA"},
  {"id":"2961408d-ae46-4878-b616-70b6cc2d3b10","nome":"JARDIM PIATÃ"},
  {"id":"ffd93e48-c8c8-479d-b1c7-2935ce9b11c5","nome":"VILA AUGUSTA"},
  {"id":"4d61f064-0a98-4f59-b608-e0f84c41977f","nome":"VILA INDUSTRIAL"},
  {"id":"fd839de5-d31f-4e1b-9195-11a7fb6243bf","nome":"JARDIM NOVE DE JULHO"},
  {"id":"c559a272-8c0c-4461-804f-1479f55afde7","nome":"JUNDIAPEBA"},
  {"id":"72b613c6-986c-4f5e-8f14-cca8964d7cd5","nome":"NOVA JUNDIAPEBA"},
  {"id":"1a2a227e-c190-4126-9acc-5db17fe6f95b","nome":"PARQUE DAS VARINHAS"},
  {"id":"36d44a34-b8bf-4c83-93b6-a65c20ec003d","nome":"BOTUJURU"},
  {"id":"127a096a-e34a-4dd5-a503-fd2c28c37c4c","nome":"CEZAR DE SOUZA"},
  {"id":"bd90e9c8-2c59-4b6a-8c8b-85bcab100ec6","nome":"FAZENDA RODEIO"},
  {"id":"bd3a2a48-fce2-4234-a765-169ae8e85de9","nome":"GRANJA ANITA"},
  {"id":"d5bae834-fe72-47aa-bf84-5ff82025c179","nome":"JARDIM DAS BANDEIRAS"},
  {"id":"1ff1112d-b287-4317-8888-eb0c654c1e51","nome":"RIO ACIMA"},
  {"id":"ee4d1a27-9e65-4617-82a6-1ab070b5adc0","nome":"VILA NOVA APARECIDA"},
  {"id":"910285d9-0a6b-4a09-8318-053de90a73b2","nome":"COCUERA"},
  {"id":"4cb8ac6e-c5b2-4751-bdec-96d788b3152b","nome":"BARROSO"},
  {"id":"ea7fe9b6-15ca-4c53-95eb-1a0b7f55d1df","nome":"PINDORAMA"},
  {"id":"4c073f8c-e656-4ac2-8b7e-72b55ebddc76","nome":"QUATINGA"},
  {"id":"635f96ff-46d8-4f8e-bddd-bda107885b24","nome":"TAIAÇUPEBA"},
  {"id":"eee9b43f-3a16-489f-96be-799875a5af0c","nome":"BIRITIBA USSÚ"},
  {"id":"8e0989b2-c3b0-4d7a-be04-2896f403ede6","nome":"BOA VISTA"}]
  

export const contentSearchConstructions = {
  titlePage: "Pesquise sobre as Obras",
  description: "Conheça todas as informações sobre as obras da Prefeitura",
};

function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const SearchBuildingsScreen = ({ handlers }: any) => {

  const date = new Date();
const dia = String(date.getDate()).padStart(2, '0');
const mes = String(date.getMonth() + 1).padStart(2, '0');
const ano = date.getFullYear();



const dataFormatada = `${dia}/${mes}/${ano}`;
  
  const {
    arrayBuildings,
    setNameBuilding,
    setCompanyName,
    handleChangeSelectNeighborhood,
    neighborhood,
    handleChangeSelectBuildingStep,
    buildingStep,
    handleChangeSelectBuildingType,
    handleChangeSelectBuildingStatus,
    buildingStatus,
    buildingType,
    handleFilterBuildings,
    page,
    rowsPerPage,
    numberOfPages,
    handleChangePage,
    handleClearFilters
  } = handlers;

  const tiposUnicos = new Set(
    arrayBuildings
        ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .filter((item: any) => item.tipo === "Tipo:OBRA" && item.status !== "07 - OBRA RESCINDIDA")
        .map((item: any) => item.id)
);

  function Pagination({ totalPages, onPageChange }: PropsPagination) {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers?.push(i);
    }

    
    return (
      <div>
        <div className="pagination">
          {pageNumbers?.map((number) => (
            <div key={number} className="page-item">
              <a className="page-link" onClick={() => onPageChange(number)}>
                {number}
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
   const existeParalisado = Array.isArray(arrayBuildings) && arrayBuildings.some(building => building.status === "99 - PARALISADO");

  return (
    
    <ContainerBasic
      title={contentSearchConstructions.titlePage}
      description={contentSearchConstructions.description}
      showAsideByDefault={false}
      showToggleButton={false}
      showFirstBox={false}
    >
      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        roundedTop={"md"}
        overflow="hidden"
        maxWidth="100%"
        marginBottom={"20px"}
      >
        {isMobile ? (
          <div
            style={{
              width: "100%",

              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "flex-start", // Alinha o conteúdo à esquerda
                  alignItems: "center", // Mantém o alinhamento vertical centralizado
                  paddingLeft: "15px",
                  minWidth: "100%",
                  paddingTop: "20px",
                }}
              >
                <Img
                  src={useColorModeValue(wall.src, wallNegative.src)}
                  alt=""
                  style={{
                    maxHeight: "50px",
                  }}
                />
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "flex-start", // Alinha o conteúdo à esquerda
                  alignItems: "center", // Mantém o alinhamento vertical centralizado
                  minWidth: "100%",
                  fontSize: "45px",
                  fontFamily: "raleway extra bold",
                  color: useColorModeValue("#6697D1", "white"),
                  paddingTop: "10px",
                  paddingLeft: "15px",
                  lineHeight: "1",
                }}
              >
                Portal de Obras <br />
                Mogi das Cruzes
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "flex-start", // Alinha o conteúdo à esquerda
                  alignItems: "center", // Mantém o alinhamento vertical centralizado
                  minWidth: "100%",
                  fontFamily: "Open Sans Medium",
                  fontSize: "25px",
                  paddingLeft: "15px",
                  color: useColorModeValue("#14204E", "white"),
                  paddingBottom: "10px",
                  paddingTop: "20px",
                  lineHeight: "1",
                }}
              >
                Conheça as obras que estão transformando a nossa cidade.
              </div>
            </div>

            <div
              style={{
                position: "relative", // Posição relativa para a div pai
                height: "400px",
                backgroundImage: `url(${pesquisaMobi.src})`,
                backgroundSize: "cover", // Garante que a imagem de fundo cubra toda a div
                backgroundPosition: "center", // Centraliza a imagem de fundo
              }}
            >
              {/* Primeira div sobreposta */}
              <a href="../../controle-de-obras/inicio">
                <div
                  style={{
                    position: "absolute",
                    top: "20%", // Posicionamento vertical
                    left: "10px", // Alinhamento à esquerda
                    width: "40%", // Ocupa 1/3 da largura
                    height: "20%", // Altura arbitrária, pode ser ajustada
                    backgroundColor: useColorModeValue(
                      "rgba(255, 255, 255, 0.8)",
                      "gray"
                    ), // Cor de fundo semi-transparente
                    borderRadius: "15px",
                  }}
                >
                  <div
                    style={{
                      paddingTop: "15px",
                      paddingLeft: "15px",
                      paddingBottom: "10px",
                    }}
                  >
                    <Img
                      src={hBottom.src}
                      alt=""
                      style={{
                        maxHeight: "15px",
                      }}
                    />
                  </div>

                  <div>
                    <text
                      style={{
                        fontSize: "0.8rem",
                        padding: "10px",
                        color: useColorModeValue("black", "white"),
                      }}
                    >
                      Portal de Obras
                    </text>
                  </div>
                  {/* Conteúdo da primeira div */}
                </div>
              </a>

              {/* Segunda div sobreposta */}
              <a href="../../controle-de-obras/pesquisar-obras">
                <div
                  style={{
                    position: "absolute",
                    top: "50%", // Posicionamento vertical
                    left: "10px", // Alinhamento à esquerda
                    width: "40%", // Ocupa 1/3 da largura
                    height: "20%", // Altura arbitrária, pode ser ajustada
                    backgroundColor: useColorModeValue(
                      "rgba(255, 255, 255, 0.8)",
                      "gray"
                    ),
                    borderRadius: "15px",
                  }}
                >
                  <div
                    style={{
                      paddingTop: "15px",
                      paddingLeft: "15px",
                      paddingBottom: "10px",
                    }}
                  >
                    <Img
                      src={hBottom.src}
                      alt=""
                      style={{
                        maxHeight: "15px",
                      }}
                    />
                  </div>
                  <div>
                    <text
                      style={{
                        fontSize: "0.8rem",
                        padding: "10px",
                        color: useColorModeValue("black", "white"),
                      }}
                    >
                      Pesquisa Obras
                    </text>
                  </div>
                </div>
              </a>
            </div>
          </div>
        ) : (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                width: "40%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {" "}
              {/* green 1 */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "50%",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "flex-start", // Alinha o conteúdo à esquerda
                    alignItems: "center", // Mantém o alinhamento vertical centralizado
                    paddingLeft: "15px",
                    minWidth: "100%",
                    paddingTop: "30px",
                  }}
                >
                  <Img
                    src={useColorModeValue(wall.src, wallNegative.src)}
                    alt=""
                    style={{
                      maxHeight: "50px",
                    }}
                  />
                </div>
                {/* <div
                  style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "flex-start", // Alinha o conteúdo à esquerda
                    alignItems: "center", // Mantém o alinhamento vertical centralizado
                    minWidth: "100%",
                    fontSize: "2rem",
                    fontFamily: "Roboto",
                    color: useColorModeValue("blue", "white"),
                    paddingTop: "10px",
                    paddingLeft: "15px",
                  }}
                >
                  Portal de Obras
                </div> */}
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "flex-start", // Alinha o conteúdo à esquerda
                    alignItems: "center", // Mantém o alinhamento vertical centralizado
                    minWidth: "100%",
                    fontSize: "45px",
                    fontFamily: "raleway extra bold",
                    color: useColorModeValue("#6697D1", "white"),
                    paddingLeft: "15px",
                    lineHeight: "1",
                    paddingTop: "10px",
                  }}
                >
                  Portal de Obras <br />
                  Mogi das Cruzes
                </div>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "flex-start", // Alinha o conteúdo à esquerda
                    alignItems: "center", // Mantém o alinhamento vertical centralizado
                    minWidth: "100%",
                    fontFamily: "Open Sans Medium",
                    fontSize: "25px",
                    paddingLeft: "15px",
                    color: useColorModeValue("#14204E", "white"),
                    paddingBottom: "10px",
                    paddingTop: "20px",
                    lineHeight: "1",
                  }}
                >
                  Conheça as obras que estão transformando a nossa cidade.
                </div>
                <div
                  style={{
                    height: "30%",
                  }}
                ></div>
              </div>
              {/* blue 2 */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "50%",
                }}
              >
                <div
                  style={{
                    height: "30%",
                    flex: 1,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* Primeira div sobreposta */}
                  <a href="../../controle-de-obras/inicio">
                    <div
                      style={{
                        border: "1px solid red",
                        width: "140px",
                        height: "140px",
                        // position: "absolute",
                        // top: "20%", // Posicionamento vertical
                        // left: "10px", // Alinhamento à esquerda
                        // width: "40%", // Ocupa 1/3 da largura
                        // height: "10%", // Altura arbitrária, pode ser ajustada
                        backgroundColor: useColorModeValue(
                          "rgba(255, 255, 255, 0.8)",
                          "gray"
                        ), // Cor de fundo semi-transparente
                        borderRadius: "15px",
                        margin: "15px",
                      }}
                    >
                      <div style={{ padding: "20px" }}>
                        <Img
                          src={hBottom.src}
                          alt=""
                          style={{
                            maxHeight: "15px",
                          }}
                        />
                      </div>
                      <div>
                        <text
                          style={{
                            fontSize: "1rem",
                            padding: "10px",
                            color: useColorModeValue("black", "white"),
                          }}
                        >
                          Portal de Obras
                        </text>
                      </div>
                      {/* Conteúdo da primeira div */}
                    </div>
                  </a>
                  {/* Segunda div sobreposta */}
                  <a href="../../controle-de-obras/pesquisar-obras">
                    <div
                      style={{
                        border: "1px solid red",
                        width: "140px",
                        height: "140px",
                        // position: "absolute",
                        // top: "20%", // Posicionamento vertical
                        // left: "10px", // Alinhamento à esquerda
                        // width: "40%", // Ocupa 1/3 da largura
                        // height: "10%", // Altura arbitrária, pode ser ajustada
                        backgroundColor: useColorModeValue(
                          "rgba(255, 255, 255, 0.8)",
                          "gray"
                        ), // Cor de fundo semi-transparente
                        borderRadius: "15px",
                        margin: "15px",
                      }}
                    >
                      <div style={{ padding: "20px" }}>
                        <Img
                          src={hBottom.src}
                          alt=""
                          style={{
                            maxHeight: "15px",
                          }}
                        />
                      </div>
                      <div>
                        <text
                          style={{
                            fontSize: "1rem",
                            padding: "10px",
                            color: useColorModeValue("black", "white"),
                          }}
                        >
                          Pesquisa Obras
                        </text>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* imagem vagalum */}
            <div
              style={{
                position: "relative", // Posição relativa para a div pai
                height: "450px",
                backgroundImage: `url(${pesquisaDesk.src})`,
                backgroundSize: "cover", // Garante que a imagem de fundo cubra toda a div
                backgroundPosition: "center", // Centraliza a imagem de fundo
                width: "60%",
              }}
            ></div>
          </div>
        )}
      </Box>
      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        roundedTop={"md"}
        overflow="hidden"
        maxWidth="100%"
        marginTop={"20px"}
      >
        <Style.Description>
          <Style.SearchBar>
            <Input
              variant="outline"
              placeholder="Nome ou descrição da obra"
              onChange={(event) => setNameBuilding(event.target.value)}
              style={{ backgroundColor: colors.white }}
            />

            <Input
              variant="outline"
              placeholder="Empresa"
              onChange={(event) => setCompanyName(event.target.value)}
              style={{ backgroundColor: colors.white }}
            />

            <Select
              placeholder="Bairro"
              onChange={handleChangeSelectNeighborhood}
              style={{ backgroundColor: colors.white }}
            >
             
              {
    arrayBuildings && Array.isArray(arrayBuildings) && arrayBuildings.length > 0 && 
    Array.from(new Set(arrayBuildings.map(building => building.bairro)))
    .sort()
    .map((neighborhood: string, index: number) => {
        const bairroNome = bairros.find(row => row.id === neighborhood)?.nome;
        return (
            <option key={index} value={neighborhood}>
                {bairroNome || neighborhood}
            </option>
        );
    })
}
            </Select>

            <Select
              placeholder="Tipo"
              onChange={handleChangeSelectBuildingType}
              style={{ backgroundColor: colors.white }}
            >
                            
              {
    arrayBuildings && Array.isArray(arrayBuildings) && arrayBuildings.length > 0 && 
    Array.from(new Set(arrayBuildings.map(building => building.categoria)))
            .map((program: string, index: number) => {
        const programaNome = ppas.find(row => row.id === program)?.programa || program;
        return (
            <option key={index} value={program}>
                {programaNome.split(":")[1]}
            </option>
        );
    })
}
    
            </Select>

           

            <button className="buttons" onClick={() => handleFilterBuildings()}>
              <Text.Heading5Medium
                color={colors.white}
                style={{ textTransform: "none" }}
              >
                Pesquisar
              </Text.Heading5Medium>
            </button>

            <button className="buttons" onClick={handleClearFilters}>
        <Text.Heading5Medium color={colors.white} style={{ textTransform: "none" }}>
          Limpar 
        </Text.Heading5Medium>
      </button>
          </Style.SearchBar>
          <Box>
          <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        roundedTop={"md"}
        overflow="hidden"
        maxWidth="100%"
        marginTop={"20px"}
      >
        <DadosAbertos 
    data={
        arrayBuildings?.filter((item: { tipo: string; status: string; nome_da_obra: string }) => 
            item.tipo === "Tipo:OBRA" && item.status !== "07 - OBRA RESCINDIDA"
        )
        .map(({  id, situacao, status, tipo, categoria, nome_da_obra, secretaria_responsavel, orgao_responsavel, responsavel_fiscalizacao, valoraditamento_set, valor_total_medicao, valor_total_aditamento, valor_total_aditamento_reajuste_contrato, numero_contrato, titulo, descricao_da_obra, localizacao, data_etapa, percentual_etapa, etapas, cnpj, razao_social_contratada, numero_processo, conclusao_ate, aditivo_prazo, justificativa_aditivo, valor_contrato, ano_licitacao  }: 
          {  id: string; 
            situacao: string; 
            status: string; 
            tipo: string; 
            categoria: string; 
            nome_da_obra: string; 
            secretaria_responsavel: string; 
            orgao_responsavel: string; 
            responsavel_fiscalizacao: string; 
            valoraditamento_set: any[]; 
            valor_total_medicao: number; 
            valor_total_aditamento: number; 
            valor_total_aditamento_reajuste_contrato: number; 
            numero_contrato: string; 
            titulo: string; 
            descricao_da_obra: string; 
            localizacao: string; 
            data_etapa: string; 
            percentual_etapa: string; 
            etapas: string; 
            cnpj: string; 
            razao_social_contratada: string; 
            numero_processo: string; 
            conclusao_ate: string; 
            aditivo_prazo: string; 
            justificativa_aditivo: string; 
            valor_contrato: string; 
            ano_licitacao: number;  }) => 
            ({ id, situacao, status, tipo, categoria, nome_da_obra, secretaria_responsavel, orgao_responsavel, responsavel_fiscalizacao, valoraditamento_set, valor_total_medicao, valor_total_aditamento, valor_total_aditamento_reajuste_contrato, numero_contrato, titulo, descricao_da_obra, localizacao, data_etapa, percentual_etapa, etapas, cnpj, razao_social_contratada, numero_processo, conclusao_ate, aditivo_prazo, justificativa_aditivo, valor_contrato, ano_licitacao })
        )
    } 
/>
<Box>
     <ConstructionStatusChecker />
    </Box>

 </Box></Box>

          {arrayBuildings
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .filter((item: any) => tiposUnicos.has(item.id))
              .map((item: any, index: number) => {
              let arrayImages = [];
              arrayImages.push(
                item?.imagen_1 ||
                  "https://www.stant.com.br/wp-content/uploads/2020/09/pexels-pixabay-159306_Easy-Resize.com_-1024x682.jpg"
              );
              item?.imagen_2 && arrayImages.push(item?.imagen_2);
              item?.imagen_3 && arrayImages.push(item?.imagen_3);
              item?.imagen_4 && arrayImages.push(item?.imagen_4);

              const program = item?.categoria;

              const programConfigTranslator: any = {
                "	Categoria: ÁGUA/ESGOTO": {
                  backgroundColor: "#87C13F",
                  imageBackgroundColor: "#7DA83C",
                  imageName: "saneamento",
                },
                "Categoria: VIAS E LOGRADOUROS": {
                  backgroundColor: "#7F3F93",
                  imageBackgroundColor: "#713A80",
                  imageName: "infraestrutura",
                },
                "5365203c-6e94-42b9-b0de-e04ce713c742": {
                  backgroundColor: "#FF588A",
                  imageBackgroundColor: "#CD507D",
                  imageName: "mogi-eficiente",
                },
                "Categoria: UNIDADES DE EDUCAÇÃO": {
                  backgroundColor: "#008C57",
                  imageBackgroundColor: "#087D4D",
                  imageName: "educa-mogi",
                },
                "2db3ac4b-97c1-4342-a59b-8283f227524b": {
                  backgroundColor: "#F8C336",
                  imageBackgroundColor: "#DBAE2F",
                  imageName: "primeiros-passos",
                },
                "	Categoria: PARQUES E PRAÇAS": {
                  backgroundColor: "#22BFBD",
                  imageBackgroundColor: "#31A4A4",
                  imageName: "cidade-inteligente",
                },
                "2afecc1c-084f-4c05-824c-e4b58071c8a1": {
                  backgroundColor: "#1C3C6E",
                  imageBackgroundColor: "#183560",
                  imageName: "seguranca",
                },
                "Categoria: MOBILIDADE URBANA": {
                  backgroundColor: "#F88B2A",
                  imageBackgroundColor: "#D67B28",
                  imageName: "mobilidade-urbana",
                },
                "f8d4a8b6-389e-4ce4-96ac-79ae9079f4ad": {
                  backgroundColor: "#DD4134",
                  imageBackgroundColor: "#DD4134",
                  imageName: "esporte",
                },
                "Categoria: UNIDADE DE SAÚDE": {
                  backgroundColor: "#0093D3",
                  imageBackgroundColor: "#0E83BB",
                  imageName: "saude",
                },
              };

              const programConfig = programConfigTranslator[program] || {
                backgroundColor: "#7F3F93",
                imageBackgroundColor: "#713A80",
                imageName: "not-found"
              };

              return (
                //<a href= {`/controle-de-obras/construcao?${item?._id}`}>
                <Style.Card
                  key={index}
                  onClick={() =>
                    router.push(`/controle-de-obras/construcao?${item?.id}`)
                  }
                  style={{ cursor: "pointer" }}
                >
                  <div className="left">
                    <Img
                      src={`/icons/${programConfig.imageName}.svg`}
                      width="50%"
                      alt="Meu Ícone"
                    />
                  </div>

                  <div className="right">
                    <div className="row">
                      <div className="item">
                        <Text.Heading4Bold color={colors.black}>
                          Contrato:
                        </Text.Heading4Bold>
                        <Text.Heading5Regular color={colors.black}>
                          {formatString(item?.numero_contrato)}
                        </Text.Heading5Regular>
                      </div>
                      <div className="item">
                        <Text.Heading4Bold color={colors.black}>
                          Empresa:
                        </Text.Heading4Bold>
                        <Text.Heading5Regular color={colors.black}>
                          {formatString(item?.razao_social_contratada)} {item?.tipo}
                        </Text.Heading5Regular>
                      </div>
                      <div className="item">
                        <Text.Heading4Bold color={colors.black}>
                          Montante:
                        </Text.Heading4Bold>
                        <Text.Heading5Regular color={colors.black}>
                          {parseMoney(item?.valor_total_aditamento_reajuste_contrato)}
                        </Text.Heading5Regular>
                      </div>
                    </div>

                    <div style={{ marginTop: 20 }}>
                      <Text.Heading4Bold color={colors.black}>
                        Descrição:
                      </Text.Heading4Bold>
                      <Text.Heading5Regular color={colors.black}>
                        {formatString(item?.descricao_da_obra)}
                      </Text.Heading5Regular>
                    </div>

                    <div className="row" style={{ marginTop: 20 }}>
                      {/* <div className="item">
                      <Text.Heading4Bold color={colors.black}>
                        Programa:
                      </Text.Heading4Bold>
                      <Text.Heading5Regular color={colors.black}>
                        {item?.programa_ppa}
                      </Text.Heading5Regular>
                    </div> */}
                      <div className="item">
                        <Text.Heading4Bold color={colors.black}>
                          Categoria:
                        </Text.Heading4Bold>
                        <Text.Heading5Regular color={colors.black}>
                       
                        {item?.categoria ? item?.categoria.split(':')[1]  : 'null'}
                        </Text.Heading5Regular>
                      </div>
                      <div className="item">
                        <Text.Heading4Bold color={colors.black}>
                          Bairro:
                        </Text.Heading4Bold>
                        <Text.Heading5Regular color={colors.black}>
                          {bairros.map(row =>{
                            if(row.id === item?.bairro){
                              return row.nome
                            }
                          })}
                        </Text.Heading5Regular>
                      </div>
                      <div className="item">
                        <Text.Heading4Bold color={colors.black}>
                          Etapa:
                        </Text.Heading4Bold>
                        <Text.Heading5Regular color={colors.black}>
                          {formatString(item?.situacao)}
                        </Text.Heading5Regular>
                      </div>
                      <div className="item">
                        <Text.Heading4Bold color={colors.black}>
                          Status:
                        </Text.Heading4Bold>
                        <Text.Heading5Regular color={colors.black}>
                          {formatString(item?.status).split('-')[1]}
                        </Text.Heading5Regular>
                      </div>
                    </div>
                  </div>
                  <div
                    className="program"
                    style={{ backgroundColor: programConfig.backgroundColor }}
                  >
                    <div className="program-top">
                      <p className="vertical-text">
                      {capitalizeFirstLetter(
                        String(
                          item?.categoria?.split(":")?.[1]?.replace(" ", "")
                        ).toLowerCase()
                      ) || ""}
                      </p>
                    </div>
                    <div
                      className="program-bottom"
                      style={{
                        backgroundColor: programConfig.imageBackgroundColor,
                      }}
                    >
                      {programConfig.imageName && (
                        <Img
                          src={`/icons/${programConfig.imageName}.svg`}
                          width={25}
                          alt="Meu Ícone"
                        />
                      )}
                    </div>
                  </div>
                </Style.Card>
              );
            })}
          <div className="bottom">
            <Pagination
              totalPages={numberOfPages}
              onPageChange={handleChangePage}
            />
          </div>
        </Style.Description>
      </Box>
    </ContainerBasic>
  );
};

export default SearchBuildingsScreen;
