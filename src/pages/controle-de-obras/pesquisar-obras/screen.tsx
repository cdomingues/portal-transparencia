/* eslint-disable react-hooks/rules-of-hooks */
import LayoutConstructions from "../../../components/LayoutConstructions";
import * as Text from "../../../styles/text";
import * as Style from "../../../styles/components/pesquisar-obras/styles";
import { parseMoney } from "../../../utils/mask";
import colors from "../../../styles/colors";
import Carousel from "../../../components/Swiper";
import { Box, Img, Input, Select, useColorModeValue } from "@chakra-ui/react";
import Vlibras from "vlibras-nextjs";
import { useState } from "react";
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

export const contentSearchConstructions = {
  titlePage: "Pesquise sobre as Obras",
  description: "Conheça todas as informações sobre as obras da Prefeitura",
};

function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const SearchBuildingsScreen = ({ handlers }: any) => {
  const {
    arrayBuildings,
    setNameBuilding,
    setCompanyName,
    handleChangeSelectNeighborhood,
    neighborhood,
    handleChangeSelectBuildingStep,
    buildingStep,
    handleChangeSelectBuildingType,
    buildingType,
    handleFilterBuildings,
    page,
    rowsPerPage,
    numberOfPages,
    handleChangePage,
  } = handlers;

  function Pagination({ totalPages, onPageChange }: PropsPagination) {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers?.push(i);
    }

    return (
      <div>
        <Vlibras />
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
                <div style={{ padding: "10px" }}>
                  <IoAddCircleOutline />
                </div>
                <div>
                  <text
                    style={{
                      fontSize: "1rem",
                      padding: "10px",
                      color: useColorModeValue("black", "white"),
                    }}
                  >
                    Sobre Obras
                  </text>
                </div>
                {/* Conteúdo da primeira div */}
              </div>

              {/* Segunda div sobreposta */}
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
                <div style={{ padding: "10px" }}>
                  <IoAddCircleOutline />
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
                    <div style={{ padding: "10px" }}>
                      <IoAddCircleOutline />
                    </div>
                    <div>
                      <text
                        style={{
                          fontSize: "1rem",
                          padding: "10px",
                          color: useColorModeValue("black", "white"),
                        }}
                      >
                        Sobre Obras
                      </text>
                    </div>
                    {/* Conteúdo da primeira div */}
                  </div>

                  {/* Segunda div sobreposta */}
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
                    <div style={{ padding: "10px" }}>
                      <IoAddCircleOutline />
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
            <option value="">Todos</option>

            <option value="BOTUJURU">Bojuturu</option>
            <option value="BRAZ CUBAS">Braz Cubas</option>
            <option value="CENTRO">Centro</option>
            <option value="CEZAR DE SOUZA">Cezar De Souza</option>
            <option value="CHÁCARA GUANABARA">Chácara Guanabara</option>
            <option value="CONJUNTO SANTO ÂNGELO">Conjunto Santo Ângelo</option>

            <option value="FAZENDA RODEIO">Fazenda Rodeio</option>
            <option value="JARDIM AEROPORTO">Jardim Aeroporto</option>
            <option value="JARDIM ARACY">Jardim Aracy</option>
            <option value="JARDIM MARICÁ">Jardim Maricá</option>
            <option value="JARDIM SANTA TEREZA">Jardim Santa Tereza</option>
            <option value="JUNDIAPEBA">Jundiapeba</option>
            <option value="MOGI MODERNO">Mogi Moderno</option>
            <option value="NOVA MOGILAR">Nova Mogilar</option>

            <option value="NOVA JUNDIAPEBA">Nova Jundiapeba</option>
            <option value="PARQUE MORUMBI">Parque Morumbi</option>
            <option value="PARQUE OLÍMPICO">Parque Olímpico</option>
            <option value="RESIDENCIAL NOVO HORIZONTE">
              Residencial Novo Horizonte{" "}
            </option>
            <option value="SOCORRO">Socorro</option>
            <option value="SANTO ÂNGELO">Santo Ângelo</option>
            <option value="TABOÃO">Taboão</option>
            <option value="TAIAÇUPEBA">Taiaçupeba</option>
            <option value="VILA CINTRA">Vila Cintra</option>
            <option value="VILA LAVÍNIA">Vila Lavínia</option>
            <option value="VILA NATAL">Vila Natal</option>
          </Select>

          <Select
            placeholder="Etapa"
            onChange={handleChangeSelectBuildingStep}
            style={{ backgroundColor: colors.white }}
          >
            <option value="">Todos</option>
            <option value="INICIADO">Iniciado</option>
            <option value="CONCLUÍDO">Concluído</option>
            <option value="RESCINDIDO">Rescindido</option>
          </Select>

          <Select
            placeholder="Tipo"
            onChange={handleChangeSelectBuildingType}
            style={{ backgroundColor: colors.white }}
          >
            <option value="">Todos</option>
            <option value="1000 - EDUCA MOGI">1000 - EDUCA MOGI</option>
            <option value="1001 - PRIMEIROS PASSOS">
              1001 - PRIMEIROS PASSOS
            </option>
            <option value="2000 - MOGI EFICIENTE">2000 - MOGI EFICIENTE</option>
            <option value="2001 - CIDADE INTELIGENTE">
              2001 - CIDADE INTELIGENTE
            </option>
            <option value="2004 - INFRAESTRUTURA">2004 - INFRAESTRUTURA</option>
            <option value="2006 - SANEAMENTO AMBIENTAL">
              2006 - SANEAMENTO AMBIENTAL
            </option>

            <option value="2007 - MOBILIDADE URBANA">
              2007 - MOBILIDADE URBANA
            </option>

            <option value="3003 - ESPORTE">3003 - ESPORTE</option>

            <option value="3004 - SEGURANÇA">3004 - SEGURANÇA</option>
            <option value="3100 - SAÚDE">3100 - SAÚDE</option>
          </Select>

          <button className="buttons" onClick={() => handleFilterBuildings()}>
            <Text.Heading5Medium
              color={colors.white}
              style={{ textTransform: "none" }}
            >
              Pesquisar
            </Text.Heading5Medium>
          </button>
        </Style.SearchBar>

        {arrayBuildings
          ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((item: any, index: number) => {
            let arrayImages = [];
            arrayImages.push(
              item?.imagen_1 ||
                "https://www.stant.com.br/wp-content/uploads/2020/09/pexels-pixabay-159306_Easy-Resize.com_-1024x682.jpg"
            );
            item?.imagen_2 && arrayImages.push(item?.imagen_2);
            item?.imagen_3 && arrayImages.push(item?.imagen_3);
            item?.imagen_4 && arrayImages.push(item?.imagen_4);

            const program = item?.programa_ppa;

            const programConfigTranslator: any = {
              "2006 - SANEAMENTO AMBIENTAL": {
                backgroundColor: "#87C13F",
                imageBackgroundColor: "#7DA83C",
                imageName: "saneamento",
              },
              "2004 - INFRAESTRUTURA": {
                backgroundColor: "#7F3F93",
                imageBackgroundColor: "#713A80",
                imageName: "infraestrutura",
              },
              "2000 - MOGI EFICIENTE": {
                backgroundColor: "#FF588A",
                imageBackgroundColor: "#CD507D",
                imageName: "mogi-eficiente",
              },
              "1000 - EDUCA MOGI": {
                backgroundColor: "#008C57",
                imageBackgroundColor: "#087D4D",
                imageName: "educa-mogi",
              },
              "1001 - PRIMEIROS PASSOS": {
                backgroundColor: "#F8C336",
                imageBackgroundColor: "#DBAE2F",
                imageName: "primeiros-passos",
              },
              "2001 - CIDADE INTELIGENTE": {
                backgroundColor: "#22BFBD",
                imageBackgroundColor: "#31A4A4",
                imageName: "cidade-inteligente",
              },
              "3004 - SEGURANÇA": {
                backgroundColor: "#1C3C6E",
                imageBackgroundColor: "#183560",
                imageName: "seguranca",
              },
              "2007 - MOBILIDADE URBANA": {
                backgroundColor: "#F88B2A",
                imageBackgroundColor: "#D67B28",
                imageName: "mobilidade-urbana",
              },
              "3003 - ESPORTE": {
                backgroundColor: "#DD4134",
                imageBackgroundColor: "#DD4134",
                imageName: "esporte",
              },
              "3100 - SAÚDE": {
                backgroundColor: "#0093D3",
                imageBackgroundColor: "#0E83BB",
                imageName: "saude",
              },
            };

            const programConfig = programConfigTranslator[program] || {
              backgroundColor: "#7F3F93",
              imageBackgroundColor: "#713A80",
            };

            return (
              //<a href= {`/controle-de-obras/construcao?${item?._id}`}>
              <Style.Card
                key={index}
                onClick={() =>
                  router.push(`/controle-de-obras/construcao?${item?._id}`)
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
                        Obra:
                      </Text.Heading4Bold>
                      <Text.Heading5Regular color={colors.black}>
                        {formatString(item?.nome_da_obra)}
                      </Text.Heading5Regular>
                    </div>
                    <div className="item">
                      <Text.Heading4Bold color={colors.black}>
                        Empresa:
                      </Text.Heading4Bold>
                      <Text.Heading5Regular color={colors.black}>
                        {formatString(item?.razao_social_contratada)}
                      </Text.Heading5Regular>
                    </div>
                    <div className="item">
                      <Text.Heading4Bold color={colors.black}>
                        Montante:
                      </Text.Heading4Bold>
                      <Text.Heading5Regular color={colors.black}>
                        {parseMoney(item?.valor_contrato)}
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
                        Programa:
                      </Text.Heading4Bold>
                      <Text.Heading5Regular color={colors.black}>
                        {formatString(item?.programa_ppa)}
                      </Text.Heading5Regular>
                    </div>
                    <div className="item">
                      <Text.Heading4Bold color={colors.black}>
                        Bairro:
                      </Text.Heading4Bold>
                      <Text.Heading5Regular color={colors.black}>
                        {formatString(item?.bairro_desc)}
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
                          item?.programa_ppa?.split("-")?.[1]?.replace(" ", "")
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
