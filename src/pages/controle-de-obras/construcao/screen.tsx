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

    var startTime = item?.inicio_ate
var endTime = item?.conclusao_ate

function run(start: string | number | Date, end: string | number | Date) {
  return Math.abs(new Date(start).getTime() - new Date(end).getTime())
}

var days = run(startTime, endTime) / (1000 * 60 * 60 * 24)





    return (
      <div>
        <div style={{ backgroundColor: colors.white, borderRadius: '10px', padding: '10px', marginTop: '25px', marginRight: '15px' }}>
        <Text.Heading1Regular
          fontSize={2}
          color={colors.grayDark}
          marginTop={10}
        >
          {item?.escopo_da_obra || item?.nome_da_obra}
        </Text.Heading1Regular>
        </div>

        {/* <Text.Heading5Regular color={colors.grayDark} marginTop={15}>
          {item?.descricao_da_obra}
        </Text.Heading5Regular> */}
        <div style={{ backgroundColor: colors.white, borderRadius: '10px', padding: '10px', marginTop: '25px', marginRight: '15px' }}>
        <Style.Row>
          <Style.Datasheet>
            <div className="box-top">
              <Text.Heading2Regular color={colors.white}>
                Ficha Técnica
              </Text.Heading2Regular>
            </div>

            <div className="box-main">
              <Text.Heading4Bold color={colors.black}>Etapa:</Text.Heading4Bold>
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
                {item?.programa_ppa}
              </Text.Heading5Regular>

              <Text.Heading4Bold color={colors.black} marginTop={20}>
                Tipo de obra:
              </Text.Heading4Bold>
              <Text.Heading5Regular color={colors.black}>
                {item?.categoria && item?.categoria.slice(10).toUpperCase()}
              </Text.Heading5Regular>

              <Text.Heading4Bold color={colors.black} marginTop={20}>
                Área responsável:
              </Text.Heading4Bold>
              <Text.Heading5Regular color={colors.black}>
                {item?.secretaria_responsavel.slice(22)}
              </Text.Heading5Regular>

              <Text.Heading4Bold color={colors.black} marginTop={20}>
                Empresa:
              </Text.Heading4Bold>
              <Text.Heading5Regular color={colors.black} textAlign="left">
                {item?.razao_social_contratada}
              </Text.Heading5Regular>

              <Text.Heading4Bold color={colors.black} marginTop={20}>
                Contrato:
              </Text.Heading4Bold>
              <Text.Heading5Regular color={colors.black}>
                {item?.numero_contrato}
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
                Endereço:
              </Text.Heading4Bold>
              <Text.Heading5Regular color={colors.black} textAlign="left">
                {item?.endereco}
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

          <Style.DivImage>
            <Carousel listImages={arrayImages} className="image" />
          </Style.DivImage>
        </Style.Row></div>
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
