import * as Style from "./styles";
import * as Text from "../../styles/text";
import colors from "../../styles/colors";

type CardTransformationProps = {
  title?: string;
  description?: string;
  backgroundImageSrc?: string;
  onClick?: () => void;
};

const CardTransformation = ({
  title = "Título",
  description = "Descrição",
  backgroundImageSrc = "",
  onClick,
}: CardTransformationProps) => {
  return (
    <Style.Container source={backgroundImageSrc} onClick={onClick}>
      <div className="top"></div>
      <div className="bottom">
        <Text.Heading2Bold
          color={colors.white}
          style={{ textTransform: "uppercase" }}
        >
          {title}
        </Text.Heading2Bold>

        <Text.Heading5Regular color={colors.white} marginTop={10}>
          {description}
        </Text.Heading5Regular>
      </div>
    </Style.Container>
  );
};

export default CardTransformation;
