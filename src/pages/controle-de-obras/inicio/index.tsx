/* eslint-disable react-hooks/rules-of-hooks */
import React, { use, useState } from "react";
import * as Style from "../../../styles/components/controle-de-obras-inicio/styles";
import { TableColumns } from "../../../components/Table";
import LayoutConstructions from "../../../components/LayoutConstructions";
import colors from "../../../styles/colors";
import { useRouter } from "next/router";
import {
  AiFillIeSquare,
  AiFillInfoCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import { IoIosConstruct } from "react-icons/io";
import { TbUsers, TbBus, TbRibbonHealth } from "react-icons/tb";
import { BsTree } from "react-icons/bs";
import { AiFillAlipaySquare } from "react-icons/ai";
import { FaRegBuilding } from "react-icons/fa";
//import CardTotal from "../../../components/CardTotal";
import MapOfConstructions from "../../../components/MapOfConstructions";
import CardBigTransformation from "../../../components/CardBigTransformation";
import CardTransformation from "../../../components/CardTransformation";
import {
  Alert,
  Box,
  Heading,
  Img,
  Input,
  Text,
  background,
  useColorModeValue,
} from "@chakra-ui/react";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import obras_espaco_publico from "../../../assets/images/icones/Portal de Obras_TOPO_espaco publico.svg";
import obras_saneamento from "../../../assets/images/icones/Portal de Obras_TOPO_saneamento.svg";
import obras_mobilidade from "../../../assets/images/icones/Portal de Obras_TOPO_mobilidade.svg";
import obras_saude from "../../../assets/images/icones/Portal de Obras_TOPO_saude.svg";
import CardObras from "../../../components/CardObras";
import imgBigTransformations from "../../../assets/images/big_transformations.png";
import wall from "../../../assets/images/logoportal_simbolo_portalobras.png";
import wallNegative from "../../../assets/images/logoportal_simbolo_portalobras_negativo.png";
import vagalumeMobi from "../../../assets/images/Portal-de-Obras_fototopo_homemobi.png";
import vagalumeDesk from "../../../assets/images/Portal-de-Obras_fototopo_homedesk.png";
import ContainerBasic from "../../../components/Container/Basic";
import Icon from "react-icons-kit";
import { find } from "lodash";
import { IoAddCircleOutline, IoChevronBack } from "react-icons/io5";
import { is } from "cheerio/lib/api/traversing";
import { isMobile } from "react-device-detect";

type PropsInput = {
  handler?: {
    columns?: TableColumns;
    data?: Array<any>;
    loading?: boolean;
    showAsideByDefault?: boolean; // Nova propriedade
    showToggleButton?: boolean; // Isso irá omitir o botão
    showFirstBox?: boolean; // Isso irá omitir o botão
  };
};

export const contentConstructionsControl = {
  titlePage: "Balanços Anuais",
  description: "O Balanço Anual mostra as principais ..",
};

function Screen({ handler }: PropsInput) {
  const router = useRouter();
  const accessibility = useFontSizeAccessibilityContext();

  const title = contentConstructionsControl?.titlePage;
  const description = contentConstructionsControl?.description;

  return (
    <ContainerBasic
      title={title}
      description={description}
      showAsideByDefault={false}
      showToggleButton={false}
      showFirstBox={false}
    >
      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="2xl"
        rounded="md"
        overflow="hidden"
        maxWidth="100%"
        marginBottom="15px"
      >
        {isMobile ? (
          <div
            style={{
              width: "100%",

              display: "flex",
              flexDirection: "column",
              backgroundColor: "red",
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
                  fontSize: "2rem",
                  fontFamily: "Roboto",
                  color: useColorModeValue("blue", "white"),
                  paddingTop: "10px",
                  paddingLeft: "15px",
                }}
              >
                Portal de Obras
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "flex-start", // Alinha o conteúdo à esquerda
                  alignItems: "center", // Mantém o alinhamento vertical centralizado
                  minWidth: "100%",
                  fontSize: "2rem",
                  fontFamily: "Roboto",
                  paddingLeft: "15px",
                  color: useColorModeValue("blue", "white"),
                }}
              >
                Mogi das Cruzes
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "flex-start", // Alinha o conteúdo à esquerda
                  alignItems: "center", // Mantém o alinhamento vertical centralizado
                  minWidth: "100%",
                  fontSize: "1.2rem",
                  paddingLeft: "15px",
                  color: useColorModeValue("black", "white"),
                  paddingBottom: "20px",
                }}
              >
                Conheça as obras que estão transformando a nossa cidade.
              </div>
            </div>

            <div
              style={{
                position: "relative", // Posição relativa para a div pai
                height: "400px",
                backgroundImage: `url(${vagalumeDesk.src})`,
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
                    fontSize: "2rem",
                    fontFamily: "Roboto",
                    color: useColorModeValue("blue", "white"),
                    paddingTop: "10px",
                    paddingLeft: "15px",
                  }}
                >
                  Portal de Obras
                </div>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "flex-start", // Alinha o conteúdo à esquerda
                    alignItems: "center", // Mantém o alinhamento vertical centralizado
                    minWidth: "100%",
                    fontSize: "2rem",
                    fontFamily: "Roboto",
                    paddingLeft: "15px",
                    color: useColorModeValue("blue", "white"),
                  }}
                >
                  Mogi das Cruzes
                </div>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "flex-start", // Alinha o conteúdo à esquerda
                    alignItems: "center", // Mantém o alinhamento vertical centralizado
                    minWidth: "100%",
                    fontSize: "1.2rem",
                    paddingLeft: "15px",
                    color: useColorModeValue("black", "white"),
                    paddingBottom: "20px",
                  }}
                >
                  Conheça as obras que estão transformando a nossa cidade.
                </div>
                <div
                  style={{
                    height: "30%",
                    backgroundColor: "red",
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
                      width: "150px",
                      height: "150px",
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
                      margin: "20px",
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
                      width: "150px",
                      height: "150px",
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
                      margin: "20px",
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
                height: "500px",
                backgroundImage: `url(${vagalumeMobi.src})`,
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
        boxShadow="2xl"
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        maxWidth="100%"
        marginBottom="15px"
      >
        <MapOfConstructions />
      </Box>
      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="2xl"
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        maxWidth="100%"
        marginBottom="15px"
      >
        <Style.ContainerBigTransformations>
          <Style.Heading>Grandes transformações da cidade</Style.Heading>
          <div>
            <a
              href="https://www.mogidascruzes.sp.gov.br/noticia/prefeitura-inaugura-o-vagalume-saude-infantil-neste-sabado-as-10-horas"
              target="_blank"
            >
              <Img src={imgBigTransformations.src} alt="" />{" "}
              <label>Inauguraçao Hospital Vagalume</label>
            </a>
          </div>
        </Style.ContainerBigTransformations>
      </Box>

      <Box
        m={0}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="2xl"
        padding={"15px"}
        rounded="md"
        overflow="hidden"
        maxWidth="100%"
        marginBottom="15px"
      >
        <Style.ContainerCardsTransformations>
          <Style.Heading>Conheça nossas obras em destaque</Style.Heading>

          <div className="align-cards">
            <CardTransformation
              title="Grandes transformações da cidade"
              description="Temos um plano para continuar melhorando a qualidade de vida dos moradores da cidade."
              backgroundImageSrc="https://dados.mogidascruzes.sp.gov.br/dataset/8e668745-1f91-4e64-a541-4f4a81898cac/resource/5c7bcad9-6a64-4fcf-8a83-89a617371b49/download/obras-01.png"
              onClick={() =>
                router.push(
                  "/controle-de-obras/grandes-transformacoes-da-cidade"
                )
              }
            />
            <CardTransformation
              title="Transformações em Mogi das Cruzes"
              description="Explore os bairros da cidade para descobrir o que estamos fazendo em cada um."
              backgroundImageSrc="https://dados.mogidascruzes.sp.gov.br/dataset/8e668745-1f91-4e64-a541-4f4a81898cac/resource/23585d54-3214-4c8b-8474-97dc80ada803/download/obras-02.png"
              onClick={() => router.push("/controle-de-obras/bairros")}
            />
            <CardTransformation
              title="Espaço público de qualidade"
              description="Trabalhamos por uma cidade com mais e melhor espaço público e áreas verdes, agradáveis, seguras e próximas aos moradores."
              backgroundImageSrc="https://dados.mogidascruzes.sp.gov.br/dataset/8e668745-1f91-4e64-a541-4f4a81898cac/resource/4be78cfe-7506-4aeb-afb2-5be46d0d86fd/download/obras-03.png"
              onClick={() => router.push("/controle-de-obras/espaco-publico")}
            />
          </div>
        </Style.ContainerCardsTransformations>
      </Box>
    </ContainerBasic>
  );
}

export default Screen;
