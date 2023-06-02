import LayoutConstructions from "../../../components/LayoutConstructions";
import * as Text from "../../../styles/text";
import * as Style from "../../../styles/components/construcao/styles";
import moment from "moment";
import colors from "../../../styles/colors";
import Carousel from "../../../components/Swiper";
import { parseMoney } from "../../../utils/mask";
import { useEffect, useState } from "react";
import request from "../../../utils/request";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useRouter } from "next/router";

const ConstructionScreen = ({ id }: any) => {
  const [file, setFile] = useState<any>();
  const router = useRouter()

  const getFileOfConstructions = async () => {
    const { data } = await request({
      baseURL:
        "https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=2a3f2bc3-551b-434d-89c7-a31da90d7e1f",
    });
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
    arrayImages.push(item?.imagen_1 || "https://www.stant.com.br/wp-content/uploads/2020/09/pexels-pixabay-159306_Easy-Resize.com_-1024x682.jpg");
    item?.imagen_2 && arrayImages.push(item?.imagen_2);
    item?.imagen_3 && arrayImages.push(item?.imagen_3);
    item?.imagen_4 && arrayImages.push(item?.imagen_4);

    let subtract = moment(item?.conclusao_ate, "DD/MM/YYYY").diff(
      moment(item?.inicio_ate, "DD/MM/YYYY")
    );

    let days = moment.duration(subtract).asDays().toFixed();

    return (
      <div>
        <Text.Heading1Regular
          fontSize={2}
          color={colors.grayDark}
          marginTop={60}
        >
          {item?.escopo_da_obra || item?.nome_da_obra}
        </Text.Heading1Regular>

        <Text.Heading5Regular color={colors.grayDark} marginTop={15}>
          {item?.descricao_da_obra}
        </Text.Heading5Regular>

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
                  {item?.situacao} {Number(item?.percentual_exec)}%
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
                Tipo de obra:
              </Text.Heading4Bold>
              <Text.Heading5Regular color={colors.black}>
                {item?.categoria}
              </Text.Heading5Regular>

              <Text.Heading4Bold color={colors.black} marginTop={20}>
                Área responsável:
              </Text.Heading4Bold>
              <Text.Heading5Regular color={colors.black}>
                {item?.secretaria_responsavel}
              </Text.Heading5Regular>

              <Text.Heading4Bold color={colors.black} marginTop={20}>
                Empresa:
              </Text.Heading4Bold>
              <Text.Heading5Regular color={colors.black}>
                {item?.razao_social_contratada}
              </Text.Heading5Regular>

              <Text.Heading4Bold color={colors.black} marginTop={20}>
                CUIT Empresa:
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
              <Text.Heading5Regular color={colors.black}>
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
        </Style.Row>
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
        <a className="row" onClick={()=>router.push("/controle-de-obras/inicio")}>
          <BsFillArrowLeftCircleFill fontSize={30} /> <span>Voltar</span>
        </a>

        {buildingData(buildingSelected)}
        {/* {othersBuildings?.map((item: any) => buildingData(item))} */}
      </Style.Container>
    </LayoutConstructions>
  );
};

export default ConstructionScreen;
