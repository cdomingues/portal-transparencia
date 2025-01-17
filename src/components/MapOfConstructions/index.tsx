/* eslint-disable react-hooks/rules-of-hooks */
import * as Style from "./styles";
import * as Text from "../../styles/text";
import { RiMapPin2Fill } from "react-icons/ri";
import { BsPieChartFill, BsGrid1X2Fill } from "react-icons/bs";
import { IoStatsChartSharp, IoStar } from "react-icons/io5";
import dynamic from "next/dynamic";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdPark } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/router";
import colors from "../../styles/colors";
import { Input, Select, useColorModeValue } from "@chakra-ui/react";
import { formatString } from "../../utils/stringUtils";
import { isMobile } from "react-device-detect";
import { ppas } from "../../pages/controle-de-obras/pesquisar-obras/screen";
import { bairros } from "../../pages/controle-de-obras/pesquisar-obras/screen";
import React from "react";
const MapWithNoSSR = dynamic(() => import("../../components/Map"), {
  ssr: false,
});

const MapAllMarkersComponent: any = dynamic(
  () => import("./mapAllMarkes") as any,
  { ssr: false }
);

const MapOneMarkerComponent: any = dynamic(
  () => import("./mapOneMarker") as any,
  { ssr: false }
);

const BubbleGroupComponent: any = dynamic(
  () => import("./bubbleGroups") as any,
  { ssr: false }
);

const MapOfConstructions = () => {
  const [nameOrDescriptionConstruction, setNameOrDescriptionConstruction] =
    useState("");
  const [directionConstruction, setDirectionConstruction] = useState("");
  const [constructionSelected, setConstructionSelected] = useState<any>(null);
  const [value, setValue] = useState("");
  const [program, setProgram] = useState("");
  const [step, setStep] = useState("");
  // const [viewOption, setViewOption] = useState("map");
  const router = useRouter();

  const geoSplited = constructionSelected?.latitude_longitude?.split(",");

  const translatorSituationColor: any = {
    INICIADO: colors.primaryDefault,
    CONCLUÍDO: colors.green,
    RESCINDIDO: colors.red,
    "Categoria: UNIDADES DE EDUCAÇÃO": colors.programColors.blue,
    "Categoria: VIAS E LOGRADOUROS": colors.programColors.purple,
    "2000 - MOGI EFICIENTE": colors.programColors.pink,
    "Categoria: PARQUES E PRAÇAS": colors.programColors.pink,
    "3003 - ESPORTE": colors.programColors.red,
    "Categoria: MOBILIDADE URBANA": colors.programColors.orange,
    "Categoria: UNIDADE DE SAÚDE": colors.programColors.blueLight,
    "Categoria: ÁGUA/ESGOTO": colors.programColors.green,
    "1001 - PRIMEIROS PASSOS": colors.programColors.yellow,
    "1000 - EDUCA MOGI": colors.randomColors.blue,
  };

  return ( isMobile ? (
    <Style.Container>
      

    

      <MapAllMarkersComponent
        nameOrDescriptionConstruction={nameOrDescriptionConstruction}
        directionConstruction={directionConstruction}
        setConstructionSelected={setConstructionSelected}
        value={value}
        step={step}
        program={program}
      />

<Style.Search>
        <Text.Heading4Bold color={colors.black}>
          Buscar de obras por bairro
        </Text.Heading4Bold>
        <Text.Heading4Medium
          color={colors.black}
          marginTop={5}
          marginBottom={7}
        >
          Filtrar por
        </Text.Heading4Medium>
        <Input
          placeholder="Nome ou descrição da obra"
          onChange={(event) =>
            setNameOrDescriptionConstruction(event.target.value)
          }
        />
        <Text.Heading4Medium
          color={colors.black}
          marginTop={5}
          marginBottom={7}
        >
          Buscar por
        </Text.Heading4Medium>
        <Input
          placeholder="Endereço"
          onChange={(event) => setDirectionConstruction(event.target.value)}
          color={useColorModeValue("black", "white")}
        />

        <Text.Heading4Medium
          color={colors.black}
          marginTop={5}
          marginBottom={7}
        >
          Categoria
        </Text.Heading4Medium>
        <Select
          placeholder="Selecionar programa"
          onChange={(event) => setProgram(event.target.value)}
        >
         
          <option value="Categoria: UNIDADE DE SAÚDE">UNIDADE DE SAÚDE</option>
          <option value="Categoria: MOBILIDADE URBANA">MOBILIDADE URBANA</option>
          <option value="Categoria: PARQUES E PRAÇAS">PARQUES E PRAÇAS</option>
          <option value="Categoria: UNIDADES DE EDUCAÇÃO">UNIDADES DE EDUCAÇÃO</option>
          <option value="Categoria: VIAS E LOGRADOUROS">VIAS E LOGRADOUROS</option>
          <option value="Categoria: ÁGUA/ESGOTO">ÁGUA/ESGOTO</option>
          {/* <option value="2001 - CIDADE INTELIGENTE">Cidade Inteligente</option>
          <option value="1001 - PRIMEIROS PASSOS">Primeiros Passos</option>
          <option value="1000 - EDUCA MOGI">Educa Mogi</option> */}
          <option value="">Todos</option>
        </Select>
        <Text.Heading4Medium
          color={colors.black}
          marginTop={5}
          marginBottom={7}
        >
          Valor
        </Text.Heading4Medium>
        <Select
          placeholder="Selecionar valor"
          onChange={(event) => setValue(event.target.value)}
        >
          <option value={"up_500000"}>Até R$ 500.000,00</option>
          <option value={"up_1000000"}>Até R$ 1.000.000,00</option>
          <option value={"up_10000000"}>Até R$ 10.000.000,00</option>
          <option value={"above_10000000"}>Acima de R$ 10.000.000,00</option>
          <option value="">Todos</option>
        </Select>
        <Text.Heading4Medium
          color={colors.black}
          marginTop={5}
          marginBottom={7}
        >
          Etapa
        </Text.Heading4Medium>
        <Select
          placeholder="Selecionar etapa"
          onChange={(event) => setStep(event.target.value)}
        >
          <option value="INICIADO">Iniciado</option>
          <option value="CONCLUÍDO">Concluído</option>
          
          <option value="">Todos</option>
        </Select>
      </Style.Search>

      {constructionSelected && (
        <Style.ConstructionSelected
          style={{
            position: "fixed",
            top: "50%",

            transform: "translate(-5%, -50%)",
          }}
        >
          <div
            className="top"
            style={{
              backgroundImage: `url(${
                constructionSelected?.imagen_1 ||
                "https://www.stant.com.br/wp-content/uploads/2020/09/pexels-pixabay-159306_Easy-Resize.com_-1024x682.jpg"
              })`,
            }}
          >
            <a
              onClick={() => setConstructionSelected(null)}
              style={{ cursor: "pointer" }}
            >
              <AiOutlineCloseCircle fontSize={35} color={colors.white} />
            </a>
          </div>

          <div className="content">
            <div className="title-and-icon">
              <div style={{ width: 30 }}>
                <MdPark fontSize={25} color={colors.black} />
              </div>
              <div>
                <Text.Heading4Bold lineHeight={100}>
                  {formatString(constructionSelected?.nome_da_obra)}
                </Text.Heading4Bold>
                <Text.Heading5Regular marginTop={5}>
                  Bairro: 
                  {bairros.find(bairro => bairro.id === constructionSelected?.bairro)?.nome || ""}
                </Text.Heading5Regular>
              </div>
            </div>

            <div
              className="status"
              style={{
                backgroundColor:
                  translatorSituationColor[constructionSelected?.situacao] ||
                  colors.grayDark,
              }}
            >
              <Text.Heading5Bold color={colors.white}>
                {formatString(constructionSelected?.situacao)}{" "}
                {/* {Number(constructionSelected?.situacao)}% */}
              </Text.Heading5Bold>
            </div>

            <div
              className="status"
              style={{
                backgroundColor:
                  translatorSituationColor[
                    constructionSelected?.categoria
                  ] || colors.grayDark,
              }}
            >
              <Text.Heading5Bold color={colors.white}>
                {constructionSelected?.categoria.split(':')[1]}{" "}
                {/* {Number(constructionSelected?.situacao)}% */}
              </Text.Heading5Bold>
            </div>

            <Text.Heading5Regular marginTop={5} marginBottom={5}>
              Secretaria Responsável:{" "}
              {constructionSelected?.secretaria_responsavel.replace(
                "SecretariaResponsavel: ",
                ""
              )}
            </Text.Heading5Regular>

            <MapOneMarkerComponent
              lat={geoSplited?.[0]}
              long={geoSplited?.[1]}
            />

            <Text.Heading5Bold lineHeight={100} marginTop={2}>
              Contratada:{" "}
              {formatString(constructionSelected?.razao_social_contratada)}
            </Text.Heading5Bold>

            <Text.Heading5Regular marginTop={5} marginBottom={10}>
              Categoria:{" "}
              {formatString(
                constructionSelected?.categoria?.replace("Categoria: ", "")
              )}
            </Text.Heading5Regular>

            <button
              className="buttons"
              style={{ borderRadius: 10 }}
              onClick={() =>
                router.push(
                  `/controle-de-obras/construcao?${constructionSelected?._id}`
                )
              }
            >
              <Text.Heading5Medium
                color={colors.white}
                style={{ textTransform: "none" }}
              >
                Conhecer mais
              </Text.Heading5Medium>
            </button>
          </div>
        </Style.ConstructionSelected>
      )}
    </Style.Container>
  ) : (
  <Style.Container>
      

  <div style={{
    width: "270px",
    height: "auto",
    position: "relative",
    zIndex: 1000,
    marginBottom: "-448px",
    marginLeft: "55px",
    borderRadius: "20px",
    padding: "20px",
    backgroundColor: useColorModeValue(colors.white, "#1a202c"),


  

  }}>
    <Text.Heading4Bold color={useColorModeValue("black", "white")}>
      Buscar de obras por bairro
    </Text.Heading4Bold>
    <Text.Heading4Medium
     color={useColorModeValue("black", "white")}
      marginTop={5}
      marginBottom={7}
    >
      Filtrar por
    </Text.Heading4Medium>
    <Input
      color={useColorModeValue("black", "white")}
      placeholder="Nome ou descrição da obra"
      onChange={(event) =>
        setNameOrDescriptionConstruction(event.target.value)
      }
    />
    <Text.Heading4Medium
       color={useColorModeValue("black", "white")}
      marginTop={5}
      marginBottom={7}
    >
      Buscar por
    </Text.Heading4Medium>
    <Input
      placeholder="Endereço"
      onChange={(event) => setDirectionConstruction(event.target.value)}
    />

    <Text.Heading4Medium
        color={useColorModeValue("black", "white")}
      marginTop={5}
      marginBottom={7}
    >
      Categoria
    </Text.Heading4Medium>
    <Select
      placeholder="Selecionar programa"
      onChange={(event) => setProgram(event.target.value)}
    >
        <option value="Categoria: UNIDADE DE SAÚDE">UNIDADE DE SAÚDE</option>
          <option value="Categoria: MOBILIDADE URBANA">MOBILIDADE URBANA</option>
          <option value="Categoria: PARQUES E PRAÇAS">PARQUES E PRAÇAS</option>
          <option value="Categoria: UNIDADES DE EDUCAÇÃO">UNIDADES DE EDUCAÇÃO</option>
          <option value="Categoria: VIAS E LOGRADOUROS">VIAS E LOGRADOUROS</option>
          <option value="Categoria: ÁGUA/ESGOTO">ÁGUA/ESGOTO</option>
      <option value="">Todos</option>
    </Select>
    <Text.Heading4Medium
        color={useColorModeValue("black", "white")}
      marginTop={5}
      marginBottom={7}
    >
      Valor
    </Text.Heading4Medium>
    <Select
      placeholder="Selecionar valor"
      onChange={(event) => setValue(event.target.value)}
    >
      <option value={"up_500000"}>Até R$ 500.000,00</option>
      <option value={"up_1000000"}>Até R$ 1.000.000,00</option>
      <option value={"up_10000000"}>Até R$ 10.000.000,00</option>
      <option value={"above_10000000"}>Acima de R$ 10.000.000,00</option>
      <option value="">Todos</option>
    </Select>
    <Text.Heading4Medium
        color={useColorModeValue("black", "white")}
      marginTop={5}
      marginBottom={7}
    >
      Etapa
    </Text.Heading4Medium>
    <Select
      placeholder="Selecionar etapa"
      onChange={(event) => setStep(event.target.value)}
    >
      <option value="INICIADO">Iniciado</option>
      <option value="CONCLUÍDO">Concluído</option>
      
      <option value="">Todos</option>
    </Select>
  </div>

  <MapAllMarkersComponent
    nameOrDescriptionConstruction={nameOrDescriptionConstruction}
    directionConstruction={directionConstruction}
    setConstructionSelected={setConstructionSelected}
    value={value}
    step={step}
    program={program}
  />

  {constructionSelected && (
    <Style.ConstructionSelected
      style={{
        position: "absolute",
        top: "50%",

        transform: "translate(-5%, -50%)",
      }}
    >
      <div
        className="top"
        style={{
          backgroundImage: `url(${
            constructionSelected?.imagen_1 ||
            "https://www.stant.com.br/wp-content/uploads/2020/09/pexels-pixabay-159306_Easy-Resize.com_-1024x682.jpg"
          })`,
        }}
      >
        <a
          onClick={() => setConstructionSelected(null)}
          style={{ cursor: "pointer" }}
        >
          <AiOutlineCloseCircle fontSize={35} color={colors.white} />
        </a>
      </div>

      <div className="content">
        <div className="title-and-icon">
          <div style={{ width: 30 }}>
            <MdPark fontSize={25} color={colors.black} />
          </div>
          <div>
            <Text.Heading4Bold lineHeight={100}>
              {formatString(constructionSelected?.nome_da_obra)}
            </Text.Heading4Bold>
            <Text.Heading5Regular marginTop={5}>
              
              Bairro: {formatString( bairros.find(bairro => bairro.id === constructionSelected?.bairro)?.nome || "")}
             
            </Text.Heading5Regular>
          </div>
        </div>

       

        <div
          className="status"
          style={{
            backgroundColor:
              translatorSituationColor[constructionSelected?.status] ||
              colors.grayDark,
          }}
        >
          <Text.Heading5Bold color={colors.white}>
            {formatString(constructionSelected?.situacao)}{" "}
            {/* {Number(constructionSelected?.situacao)}% */}
          </Text.Heading5Bold>
        </div>

        <div
          className="status"
          style={{
            backgroundColor:
              translatorSituationColor[constructionSelected?.situacao] ||
              colors.grayDark,
          }}
        >
          <Text.Heading5Bold color={colors.white}>
            {formatString(constructionSelected?.status).split("-")?.[1]}{" "}
            {/* {Number(constructionSelected?.situacao)}% */}
          </Text.Heading5Bold>
        </div>

        <div
          className="status"
          style={{
            backgroundColor:
              translatorSituationColor[
                constructionSelected?.categoria
              ] || colors.grayDark,
          }}
        >
          <Text.Heading5Bold color={colors.white}>
          
            
            { constructionSelected?.categoria 
                  ? constructionSelected.categoria.split(':')[1] 
                  : null}
            {/* {Number(constructionSelected?.situacao)}% */}
          </Text.Heading5Bold>
        </div>

        

        <Text.Heading5Regular marginTop={5} marginBottom={5}>
          Secretaria Responsável:{" "}
          {constructionSelected?.secretaria_responsavel.replace(
            "SecretariaResponsavel: ",
            ""
          )}
        </Text.Heading5Regular>

        <MapOneMarkerComponent
          lat={geoSplited?.[0]}
          long={geoSplited?.[1]}
        />

        <Text.Heading5Bold lineHeight={100} marginTop={2}>
          Contratada:{" "}
          {formatString(constructionSelected?.razao_social_contratada)}
        </Text.Heading5Bold>

        <Text.Heading5Regular marginTop={5} marginBottom={10}>
          Categoria:{" "}
          {formatString(
            constructionSelected?.categoria?.replace("Categoria: ", "")
          )}
        </Text.Heading5Regular>

        <button
          className="buttons"
          style={{ borderRadius: 10 }}
          onClick={() =>
            router.push(
              `/controle-de-obras/construcao?${constructionSelected?.id}`
            )
          }
        >
          <Text.Heading5Medium
            color={colors.white}
            style={{ textTransform: "none" }}
          >
            Conhecer mais
          </Text.Heading5Medium>
        </button>
      </div>
    </Style.ConstructionSelected>
  )}
</Style.Container>
  ));
};

export default MapOfConstructions;
