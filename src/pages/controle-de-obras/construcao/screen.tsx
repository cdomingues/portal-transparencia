import LayoutConstructions from "../../../components/LayoutConstructions";
import * as Text from "../../../styles/text";
import * as Style from "../../../styles/components/construcao/styles";
import moment from "moment";
import colors from "../../../styles/colors";
import Carousel from "../../../components/Swiper";
import { parseMoney } from "../../../utils/mask";
import { useEffect, useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { formatString } from "../../../utils/stringUtils";
import { background } from "@chakra-ui/react";
import { Button } from "react-day-picker";
import { isMobile } from "react-device-detect";
import { m } from "framer-motion";

const ConstructionScreen = ({ id }: any) => {
  const [file, setFile] = useState<any>();
  const router = useRouter();

  const getFileOfConstructions = async () => {
    const response = await fetch(
      //"https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=03146785-57db-4207-8924-85c492e8b9a8",
      "https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=40d91f19-c371-4aaa-b6ba-7fd2427df05c",
      {
        headers: {
          Authorization:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJ4T2VWV29pdlZVTG9WTjJzZk1UQ0JrQmtmMjJGRVp5QWJ0bHdyajU0ZFJNIiwiaWF0IjoxNjc5Njg4ODYyfQ.N7uwCTBg9g21vHc3brf7ayK4rKK2zuUJnglptS6k__g",
        },
      }
    );

    const data = await response.json();
    if (!data) {
      return;
    }
    return setFile(data);
  };

  useEffect(() => {
    getFileOfConstructions();
  }, []);

  const buildingSelected = file?.result?.records?.filter(
    (item: any) => item?._id === id
  )?.[0];

  const othersBuildings = file?.result?.records?.filter(
    (item: any) => item?._id != id
  );

  const buildingData = (item: any) => {
    let arrayImages = [];
    arrayImages.push(
      item?.imagen_1 ||
        "https://www.stant.com.br/wp-content/uploads/2020/09/pexels-pixabay-159306_Easy-Resize.com_-1024x682.jpg"
    );
    item?.imagen_2 && arrayImages.push(item?.imagen_2);
    item?.imagen_3 && arrayImages.push(item?.imagen_3);
    item?.imagen_4 && arrayImages.push(item?.imagen_4);

    // let subtract = moment(item?.conclusao_ate, "DD/MM/YYYY").diff(
    //  moment(item?.inicio_ate, "DD/MM/YYYY")
    //);

    //let days = moment.duration(subtract).asDays().toFixed();

    var startTime = item?.inicio_ate;
    var endTime = item?.conclusao_ate;

    function run(start: string | number | Date, end: string | number | Date) {
      return Math.abs(new Date(start).getTime() - new Date(end).getTime());
    }

    var days = run(startTime, endTime) / (1000 * 60 * 60 * 24);

    return isMobile ? (
      <div
        style={{
          backgroundColor: colors.white,
          borderRadius: "10px",
          padding: isMobile ? 0 : "10px",
          marginTop: "25px",
          marginBottom: "25px",
          marginRight: isMobile ? 0 : "15px",

          maxWidth: isMobile ? "100%" : "100%",
        }}
        flex-shrink={1}
      >
        <div
          style={
            isMobile
              ? { display: "flex", flexDirection: "column", width: "100%" }
              : {
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                }
          }
        >
          <div style={isMobile ? { width: "100%" } : { width: "60%" }}>
            <div
              style={{
                backgroundColor: colors.white,
                borderRadius: "10px",
                boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.3)",
                minHeight: "80px",
                padding: "10px",
                alignContent: "center",
                marginBottom: "20px",
              }}
            >
              <Text.Heading2Regular color={colors.grayDark} marginBottom={20}>
                {formatString(item?.escopo_da_obra || item?.nome_da_obra)}
              </Text.Heading2Regular>
            </div>

            <div>
              <Style.DivImage>
                <Carousel listImages={arrayImages} className="image" />
              </Style.DivImage>
            </div>
            <div>
              <Style.Bottom>
                <div className="box-main">
                  <div>
                    <div>
                      <Text.Heading4Bold color={colors.black} marginTop={5}>
                        Empresa Contratada:
                      </Text.Heading4Bold>

                      <Text.Heading5Regular
                        color={colors.black}
                        textAlign="left"
                        marginTop={5}
                      >
                        {formatString(item?.razao_social_contratada)}
                      </Text.Heading5Regular>
                    </div>

                    <div>
                      <Text.Heading4Bold color={colors.black} marginTop={5}>
                        Contrato:
                      </Text.Heading4Bold>

                      <Text.Heading5Regular
                        color={colors.black}
                        textAlign="left"
                        marginTop={10}
                      >
                        {item?.numero_contrato}
                      </Text.Heading5Regular>
                    </div>
                  </div>
                </div>
              </Style.Bottom>
            </div>
          </div>

          <div
            style={
              isMobile
                ? { width: "100%", height: "100%" }
                : { width: "35%", height: "100%" }
            }
          >
            <Style.Datasheet>
              <div
                className="box-top"
                style={
                  isMobile
                    ? { width: "100%", marginTop: "20px" }
                    : { width: "100%" }
                }
              >
                <Text.Heading2Regular color={colors.white}>
                  Ficha Técnica
                </Text.Heading2Regular>
              </div>

              <div className="box-main">
                <Text.Heading4Bold color={colors.black}>
                  Etapa:
                </Text.Heading4Bold>
                <div
                  className="status"
                  style={{
                    color:
                      Number(item?.percentual_exec) === 100
                        ? colors.green
                        : colors.red,
                  }}
                >
                  <Text.Heading5Bold color={colors.white}>
                    {item?.situacao}
                  </Text.Heading5Bold>
                </div>

                <div className="row">
                  <div>
                    <Text.Heading4Bold color={colors.black}>
                      Início:
                    </Text.Heading4Bold>
                    <Text.Heading5Regular color={colors.black}>
                      {item?.inicio_ate}
                    </Text.Heading5Regular>
                  </div>

                  <div>
                    <Text.Heading4Bold color={colors.black}>
                      Fim:
                    </Text.Heading4Bold>
                    <Text.Heading5Regular color={colors.black}>
                      {item?.conclusao_ate}
                    </Text.Heading5Regular>
                  </div>
                </div>

                <Text.Heading4Bold color={colors.black} marginTop={20}>
                  Programa:
                </Text.Heading4Bold>
                <Text.Heading5Regular color={colors.black}>
                  {formatString(item?.programa_ppa)}
                </Text.Heading5Regular>

                <Text.Heading4Bold color={colors.black} marginTop={20}>
                  Tipo de obra:
                </Text.Heading4Bold>
                <Text.Heading5Regular color={colors.black}>
                  {formatString(
                    item?.categoria && item?.categoria.slice(10).toUpperCase()
                  )}
                </Text.Heading5Regular>

                <Text.Heading4Bold color={colors.black} marginTop={20}>
                  Área responsável:
                </Text.Heading4Bold>
                <Text.Heading5Regular color={colors.black}>
                  {formatString(item?.secretaria_responsavel.slice(22))}
                </Text.Heading5Regular>

                <Text.Heading4Bold color={colors.black} marginTop={20}>
                  Prazo total:
                </Text.Heading4Bold>
                <Text.Heading5Regular color={colors.black}>
                  {days} Dias
                </Text.Heading5Regular>

                <Text.Heading4Bold color={colors.black} marginTop={20}>
                  Valor contrato:
                </Text.Heading4Bold>
                <Text.Heading5Regular color={colors.black}>
                  {parseMoney(item?.valor_contrato)}
                </Text.Heading5Regular>

                <Text.Heading4Bold color={colors.black} marginTop={20}>
                  Endereço da Obra:
                </Text.Heading4Bold>
                <Text.Heading5Regular color={colors.black} textAlign="left">
                  {formatString(item?.endereco)}
                </Text.Heading5Regular>

                {/* <button className="button">
                <Text.Heading4Regular
                  color={colors.white}
                  style={{ textTransform: "none" }}
                  className="text"
                >
                  Informação da contratação
                </Text.Heading4Regular>
              </button> */}
              </div>
            </Style.Datasheet>
          </div>

          <div
            style={
              isMobile
                ? { display: "none" }
                : {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }
            }
          >
            <div></div>
          </div>

          <div
            style={
              isMobile
                ? { display: "none" }
                : {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }
            }
          ></div>
        </div>
      </div>
    ) : (
      <div
        style={{
          backgroundColor: colors.white,
          borderRadius: "10px",
          padding: isMobile ? 0 : "10px",
          marginTop: "25px",
          marginRight: isMobile ? 0 : "15px",
          maxHeight: isMobile ? "100%" : "750px",
          maxWidth: isMobile ? "100%" : "100%",
        }}
        flex-shrink={1}
      >
        <div
          style={
            isMobile
              ? { display: "flex", flexDirection: "column", width: "100%" }
              : {
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                }
          }
        >
          <div
            style={
              isMobile
                ? { width: "100%", height: "100%" }
                : { width: "35%", height: "100%" }
            }
          >
            <Style.Datasheet>
              <div className="box-top">
                <Text.Heading2Regular color={colors.white}>
                  Ficha Técnica
                </Text.Heading2Regular>
              </div>

              <div className="box-main">
                <Text.Heading4Bold color={colors.black}>
                  Etapa:
                </Text.Heading4Bold>
                <div
                  className="status"
                  style={{
                    color:
                      Number(item?.percentual_exec) === 100
                        ? colors.green
                        : colors.red,
                  }}
                >
                  <Text.Heading5Bold color={colors.white}>
                    {item?.situacao}
                  </Text.Heading5Bold>
                </div>

                <div className="row">
                  <div>
                    <Text.Heading4Bold color={colors.black}>
                      Início:
                    </Text.Heading4Bold>
                    <Text.Heading5Regular color={colors.black}>
                      {item?.inicio_ate}
                    </Text.Heading5Regular>
                  </div>

                  <div>
                    <Text.Heading4Bold color={colors.black}>
                      Fim:
                    </Text.Heading4Bold>
                    <Text.Heading5Regular color={colors.black}>
                      {item?.conclusao_ate}
                    </Text.Heading5Regular>
                  </div>
                </div>

                <Text.Heading4Bold color={colors.black} marginTop={20}>
                  Programa:
                </Text.Heading4Bold>
                <Text.Heading5Regular color={colors.black}>
                  {formatString(item?.programa_ppa)}
                </Text.Heading5Regular>

                <Text.Heading4Bold color={colors.black} marginTop={20}>
                  Tipo de obra:
                </Text.Heading4Bold>
                <Text.Heading5Regular color={colors.black}>
                  {formatString(
                    item?.categoria && item?.categoria.slice(10).toUpperCase()
                  )}
                </Text.Heading5Regular>

                <Text.Heading4Bold color={colors.black} marginTop={20}>
                  Área responsável:
                </Text.Heading4Bold>
                <Text.Heading5Regular color={colors.black}>
                  {formatString(item?.secretaria_responsavel.slice(22))}
                </Text.Heading5Regular>

                <Text.Heading4Bold color={colors.black} marginTop={20}>
                  Prazo total:
                </Text.Heading4Bold>
                <Text.Heading5Regular color={colors.black}>
                  {days} Dias
                </Text.Heading5Regular>

                <Text.Heading4Bold color={colors.black} marginTop={20}>
                  Valor contrato:
                </Text.Heading4Bold>
                <Text.Heading5Regular color={colors.black}>
                  {parseMoney(item?.valor_contrato)}
                </Text.Heading5Regular>

                <Text.Heading4Bold color={colors.black} marginTop={20}>
                  Endereço da Obra:
                </Text.Heading4Bold>
                <Text.Heading5Regular color={colors.black} textAlign="left">
                  {formatString(item?.endereco)}
                </Text.Heading5Regular>

                {/* <button className="button">
                <Text.Heading4Regular
                  color={colors.white}
                  style={{ textTransform: "none" }}
                  className="text"
                >
                  Informação da contratação
                </Text.Heading4Regular>
              </button> */}
              </div>
            </Style.Datasheet>
          </div>

          <div style={isMobile ? { width: "100%" } : { width: "60%" }}>
            <div
              style={{
                backgroundColor: colors.white,
                borderRadius: "10px",
                padding: "10px",
                marginRight: "15px",
              }}
            >
              <Text.Heading2Regular color={colors.grayDark} marginBottom={20}>
                {formatString(item?.escopo_da_obra || item?.nome_da_obra)}
              </Text.Heading2Regular>
            </div>
            <div>
              <Style.DivImage>
                <Carousel listImages={arrayImages} className="image" />
              </Style.DivImage>
            </div>
            <div>
              <Style.Bottom>
                <div className="box-main">
                  <div className="row">
                    <div>
                      <Text.Heading4Bold color={colors.black}>
                        Empresa Contratada:
                      </Text.Heading4Bold>

                      <Text.Heading5Regular
                        color={colors.black}
                        textAlign="left"
                        marginTop={10}
                      >
                        {formatString(item?.razao_social_contratada)}
                      </Text.Heading5Regular>
                    </div>

                    <div>
                      <Text.Heading4Bold color={colors.black}>
                        Contrato:
                      </Text.Heading4Bold>

                      <Text.Heading5Regular
                        color={colors.black}
                        textAlign="left"
                        marginTop={10}
                      >
                        {item?.numero_contrato}
                      </Text.Heading5Regular>
                    </div>
                    <div>
                      <Text.Heading4Bold color={colors.black}>
                        Detalhes da Contratação:
                      </Text.Heading4Bold>
                    </div>
                  </div>
                </div>
              </Style.Bottom>
            </div>
          </div>

          <div
            style={
              isMobile
                ? { display: "none" }
                : {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }
            }
          >
            <div></div>
          </div>

          <div
            style={
              isMobile
                ? { display: "none" }
                : {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }
            }
          ></div>
        </div>

        <Style.Row></Style.Row>
      </div>
    );
  };

  return (
    <LayoutConstructions
      title={buildingSelected?.escopo_da_obra}
      bannerSrc={buildingSelected?.imagen_1}
      bannerTitle={buildingSelected?.categoria}
      bannerDescription={buildingSelected?.descricao_da_obra}
    >
      <Style.Container>
        <a
          className="row"
          onClick={() => router.push("/controle-de-obras/inicio")}
        >
          <BsFillArrowLeftCircleFill fontSize={30} /> <span>Voltar</span>
        </a>

        {buildingData(buildingSelected)}
        {/* {othersBuildings?.map((item: any) => buildingData(item))} */}
      </Style.Container>
    </LayoutConstructions>
  );
};

export default ConstructionScreen;
