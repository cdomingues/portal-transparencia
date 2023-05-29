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
import { Input } from "@chakra-ui/react";

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
  const [viewOption, setViewOption] = useState("map");
  const router = useRouter();

  const geoSplited = constructionSelected?.latitude_longitude?.split(",");

  const translatorSituationColor: any = {
    INICIADO: colors.primaryDefault,
    CONCLUÍDO: colors.green,
    RESCINDIDO: colors.red,
  };
  return (
    <Style.Container>
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
        />
      </Style.Search>

      <Style.Options>
        <Text.Heading3Bold marginBottom={7} color={colors.black}>
          Opções de visualização
        </Text.Heading3Bold>

        <div className="buttons">
          <Style.RoundedButton
            onClick={() => setViewOption("map")}
            color={colors.randomColors.red}
          >
            <RiMapPin2Fill fontSize={20} color={colors.white} />

            <Text.SmallerBold
              className="button-text"
              style={{ color: colors.white }}
            >
              Mapa
            </Text.SmallerBold>
          </Style.RoundedButton>

          <Style.RoundedButton
            onClick={() => setViewOption("neighborhood")}
            color={colors.randomColors.orange}
          >
            <BsGrid1X2Fill fontSize={20} color={colors.white} />

            <Text.SmallerBold
              className="button-text"
              style={{ color: colors.white }}
            >
              Bairros
            </Text.SmallerBold>
          </Style.RoundedButton>

          <Style.RoundedButton
            onClick={() => setViewOption("values")}
            color={colors.black}
          >
            <BsPieChartFill fontSize={20} color={colors.white} />

            <Text.SmallerBold
              className="button-text"
              style={{ color: colors.white }}
            >
              Valores
            </Text.SmallerBold>
          </Style.RoundedButton>

          <Style.RoundedButton
            onClick={() => setViewOption("steps")}
            color={colors.primaryDark}
          >
            <IoStatsChartSharp fontSize={20} color={colors.white} />

            <Text.SmallerBold
              className="button-text"
              style={{ color: colors.white }}
            >
              Etapas
            </Text.SmallerBold>
          </Style.RoundedButton>

          <Style.RoundedButton
            onClick={() => setViewOption("highlights")}
            color={colors.primaryDefault}
          >
            <IoStar fontSize={20} color={colors.white} />

            <Text.SmallerBold
              className="button-text"
              style={{ color: colors.white }}
            >
              Destaques
            </Text.SmallerBold>
          </Style.RoundedButton>
        </div>
      </Style.Options>

      {viewOption === "map" ? (
        <MapAllMarkersComponent
          nameOrDescriptionConstruction={nameOrDescriptionConstruction}
          directionConstruction={directionConstruction}
          setConstructionSelected={setConstructionSelected}
        />
      ) : (
        <BubbleGroupComponent
          viewOption={viewOption}
          nameOrDescriptionConstruction={nameOrDescriptionConstruction}
          directionConstruction={directionConstruction}
          setConstructionSelected={setConstructionSelected}
        />
      )}

      {constructionSelected && (
        <Style.ConstructionSelected>
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
              <AiOutlineCloseCircle fontSize={25} color={colors.grayDark} />
            </a>
          </div>

          <div className="content">
            <div className="title-and-icon">
              <div style={{ width: 30 }}>
                <MdPark fontSize={25} color={colors.black} />
              </div>
              <div>
                <Text.Heading4Bold lineHeight={100}>
                  {constructionSelected?.nome_da_obra}
                </Text.Heading4Bold>
                <Text.Heading5Regular marginTop={5}>
                  {constructionSelected?.bairro}
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
              <Text.Heading5Bold color={colors.white} >
                {constructionSelected?.situacao}{" "}
                {/* {Number(constructionSelected?.situacao)}% */}
              </Text.Heading5Bold>
            </div>

            <Text.Heading5Regular marginTop={20} marginBottom={20}>
              Secretaria Responsável:{" "}
              {constructionSelected?.secretaria_responsavel}
            </Text.Heading5Regular>

            <MapOneMarkerComponent
              lat={geoSplited?.[0]}
              long={geoSplited?.[1]}
            />

            <Text.Heading5Bold lineHeight={100} marginTop={20}>
              Contratada: {constructionSelected?.razao_social_contratada}
            </Text.Heading5Bold>

            <Text.Heading5Regular marginTop={5} marginBottom={20}>
              Categoria: {constructionSelected?.categoria}
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

            <button
              className="buttons"
              style={{
                marginTop: 10,
                backgroundColor: colors.randomColors.red,
                borderRadius: 10,
              }}
            >
              <Text.Heading5Medium
                color={colors.white}
                style={{ textTransform: "none" }}
              >
                Ver mais do bairro
              </Text.Heading5Medium>
            </button>
          </div>
        </Style.ConstructionSelected>
      )}
    </Style.Container>
  );
};

export default MapOfConstructions;
