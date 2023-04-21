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

  return (
    <Style.Container>
      <Style.Search>
        <Text.Heading3Bold color={colors.black}>
          Buscar por obras de seu bairro
        </Text.Heading3Bold>
        <Text.Heading4Medium
          color={colors.black}
          marginTop={5}
          marginBottom={7}
        >
          Filtrar por
        </Text.Heading4Medium>
        {/* <TextField
          id="outlined-basic"
          label="Nome ou descrição da obra"
          variant="outlined"
          className="input"
          onChange={(event) =>
            setNameOrDescriptionConstruction(event.target.value)
          }
        /> */}

        <Text.Heading4Medium
          color={colors.black}
          marginTop={5}
          marginBottom={7}
        >
          Buscar por
        </Text.Heading4Medium>
        {/* <TextField
          id="outlined-basic"
          label="Endereço"
          variant="outlined"
          className="input"
          onChange={(event) => setDirectionConstruction(event.target.value)}
        /> */}
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
              style={{ color: colors.black }}
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
              backgroundImage: `url(${constructionSelected?.imagen_1})`,
            }}
          >
            <a onClick={() => setConstructionSelected(null)}>
              <AiOutlineCloseCircle fontSize={25} color={colors.white} />
            </a>
          </div>

          <div className="content">
            <div className="title-and-icon">
              <div style={{ width: 30 }}>
                <MdPark fontSize={25} color={colors.black} />
              </div>
              <div>
                <Text.Heading4Bold lineHeight={100}>
                  {constructionSelected?.Nome}
                </Text.Heading4Bold>
                <Text.Heading5Regular marginTop={5}>
                  {constructionSelected?.bairro}
                </Text.Heading5Regular>
              </div>
            </div>

            <div className="status">
              <Text.Heading5Bold color={colors.white}>
                {constructionSelected?.Status}{" "}
                {Number(constructionSelected?.percentual_exec)}%
              </Text.Heading5Bold>
            </div>

            <Text.Heading5Regular marginTop={20} marginBottom={20}>
              {constructionSelected?.Secretaria_contrante}
            </Text.Heading5Regular>

            <MapOneMarkerComponent />

            <Text.Heading5Bold lineHeight={100} marginTop={20}>
              {constructionSelected?.endereco}
            </Text.Heading5Bold>

            <Text.Heading5Regular marginTop={5} marginBottom={20}>
              Comuna {constructionSelected?.Id_bairro}
            </Text.Heading5Regular>

            <button
              className="buttons"
              style={{ borderRadius: 10 }}
              onClick={() => router.push(`/controle-de-obras/construcao`)}
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
