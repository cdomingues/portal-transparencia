import * as Style from "./styles";
import * as Text from "../../styles/text";
import Button from "@mui/material/Button";
import { MdOutlineArrowRight } from "react-icons/md";
import { useRouter } from "next/router";
import colors from "../../styles/colors";

type CardTransformationProps = {
  title?: string;
  description?: string;
  backgroundImageSrc?: string;
};

const CardBigTransformation = ({
  title = "Título",
  description = "Descrição",
  backgroundImageSrc = "",
}: CardTransformationProps) => {
  const router = useRouter();
  const arrayButton = [
    { title: "Obras", color: colors.randomColors.red },
    { title: "Espaço Público", color: colors.randomColors.orange },
    { title: "Mobilidade", color: colors.randomColors.orangeLight },
    { title: "Educação", color: colors.randomColors.yellow },
    { title: "Trabalho", color: colors.randomColors.green },
    { title: "Seguro", color: colors.randomColors.ciano },
    { title: "Integração", color: colors.randomColors.blueLight },
    { title: "Saúde", color: colors.randomColors.blue },
    { title: "Cultura", color: colors.randomColors.purple },
    { title: "Inovação", color: colors.black },
  ];

  const message = [
    "Paseo del Bajo ",
    "2 nuevos viaductos  ",
    "5 nuevos pasos bajo nivel ",
    "27 barreras eliminadas ",
    " 22 aperturas de calles ",
    "+ 1.500.000 personas",
    "+ 6.400 nuevas viviendas en Villa",
  ];

  return (
    <Style.Container source={backgroundImageSrc}>
      <Style.Left>
        <div className="div-separator-mobile"></div>
        <Style.DescriptionBackground></Style.DescriptionBackground>
        <Style.DescriptionBar>
          <Text.Heading2Medium className="text" marginBottom={20}>
            Obras
          </Text.Heading2Medium>

          {message.map((item, key) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
              key={key}
            >
              <MdOutlineArrowRight fontSize={20} color={colors.white} />
              <Text.Heading4Regular marginBottom={5} className="text">
                {item}
              </Text.Heading4Regular>
            </div>
          ))}

          <div className="bottom">
            <button
              className="buttons"
              onClick={() => router.push("grandes-transformacoes-da-cidade")}
              style={{ width: "100%" }}
            >
              <Text.Heading3Regular
                color={colors.white}
                style={{ textTransform: "none" }}
                className="text"
              >
                Ver todas
              </Text.Heading3Regular>
            </button>
          </div>
        </Style.DescriptionBar>
      </Style.Left>
      <Style.Right>
        {arrayButton?.map((item, key) => (
          <button
            style={{ backgroundColor: item.color }}
            className="buttons"
            key={key}
          >
            <Text.Heading5Medium
              color={colors.white}
              style={{ textTransform: "none" }}
              className="text"
            >
              {item.title}
            </Text.Heading5Medium>
          </button>
        ))}
      </Style.Right>
    </Style.Container>
  );
};

export default CardBigTransformation;
