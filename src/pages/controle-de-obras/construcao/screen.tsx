import LayoutConstructions from "../../../components/LayoutConstructions";
import * as Text from "../../../styles/text";
import * as Style from "./styles";
import moment from "moment";
import colors from "../../../styles/colors";
import { useFileCSVContext } from "../../../context/fileCsv";
import Carousel from "../../../components/Swiper";
import { parseMoney } from "../../../utils/mask";

const ConstructionScreen = ({ id }: any) => {
  const file = useFileCSVContext();

  const buildingSelected = file.result.records.filter(
    (item: any) => item.ID === String(id)
  )[0];

  const othersBuildings = file.result.records.filter(
    (item: any) => item.ID != String(id)
  );

  const buildingData = (item: any) => {
    let arrayImages = [];
    item?.imagen_1 && arrayImages.push(item?.imagen_1);
    item?.imagen_2 && arrayImages.push(item?.imagen_2);
    item?.imagen_3 && arrayImages.push(item?.imagen_3);
    item?.imagen_4 && arrayImages.push(item?.imagen_4);

    let subtract = moment(item?.prev_termino, "DD/MM/YYYY").diff(
      moment(item?.Inicio_Obra, "DD/MM/YYYY")
    );

    let days = moment.duration(subtract).asDays().toFixed();

    return (
      <div>
        <Text.Heading1Regular
          fontSize={2}
          color={colors.grayDark}
          marginTop={80}
          className="title"
        >
          {item?.Escopo_Obra}
        </Text.Heading1Regular>

        <Text.Heading5Regular color={colors.grayDark} marginTop={15}>
          {item?.Descrição}
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
                  {item?.Status} {Number(item?.percentual_exec)}%
                </Text.Heading5Bold>
              </div>

              <div className="row">
                <div>
                  <Text.Heading4Bold color={colors.black}>
                    Início:
                  </Text.Heading4Bold>
                  <Text.Heading5Regular color={colors.black}>
                    {item?.Inicio_Obra}
                  </Text.Heading5Regular>
                </div>

                <div>
                  <Text.Heading4Bold color={colors.black}>
                    Fim:
                  </Text.Heading4Bold>
                  <Text.Heading5Regular color={colors.black}>
                    {item?.prev_termino}
                  </Text.Heading5Regular>
                </div>
              </div>

              <Text.Heading4Bold color={colors.black} marginTop={20}>
                Tipo de obra:
              </Text.Heading4Bold>
              <Text.Heading5Regular color={colors.black}>
                {item?.Categoria}
              </Text.Heading5Regular>

              <Text.Heading4Bold color={colors.black} marginTop={20}>
                Área responsável:
              </Text.Heading4Bold>
              <Text.Heading5Regular color={colors.black}>
                {item?.Secretaria_responsavel}
              </Text.Heading5Regular>

              <Text.Heading4Bold color={colors.black} marginTop={20}>
                Empresa:
              </Text.Heading4Bold>
              <Text.Heading5Regular color={colors.black}>
                {item?.empresa_contratada}
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
                {parseMoney(item?.Valor_inicial)}
              </Text.Heading5Regular>

              <Text.Heading4Bold color={colors.black} marginTop={20}>
                Endereço:
              </Text.Heading4Bold>
              <Text.Heading5Regular color={colors.black}>
                {item?.endereco}
              </Text.Heading5Regular>

              <button className="button">
                <Text.Heading4Regular
                  color={colors.white}
                  style={{ textTransform: "none" }}
                  className="text"
                >
                  Informação da contratação
                </Text.Heading4Regular>
              </button>
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
      title={buildingSelected?.Escopo_Obra}
      bannerSrc={buildingSelected?.imagen_1}
      bannerTitle={buildingSelected?.Categoria}
      bannerDescription={buildingSelected?.Descrição}
    >
      <Style.Container>
        {buildingData(buildingSelected)}
        {othersBuildings.map((item: any) => buildingData(item))}
      </Style.Container>
    </LayoutConstructions>
  );
};

export default ConstructionScreen;
