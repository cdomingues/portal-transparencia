import * as Style from "./styles";
import * as Text from "../../styles/text";
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
    { title: 'SANEAMENTO AMBIENTAL', color: colors.programColors.green},
    { title: 'INFRAESTRUTURA', color: colors.programColors.purple},
    { title: 'MOGI EFICIENTE', color: colors.programColors.pink},
    { title: 'SAÚDE', color: colors.programColors.blueLight},
    { title: 'ESPORTE', color: colors.programColors.red},
    { title: 'MOBILIDADE URBANA', color: colors.programColors.orange},
    { title: 'SEGURANÇA', color: colors.programColors.blue},
    { title: 'CIDADE INTELIGENTE', color: colors.programColors.greeLight},
    { title: 'PRIMEIROS PASSOS', color: colors.programColors.yellow},
    { title: 'EDUCA MOGI', color: colors.randomColors.blue},


  ];

  const message = [
    "Texto destaque 1 ",
    "Texto destaque 2 ",
    "Texto destaque 3 ",
    "Texto destaque 4 ",
    "Texto destaque 5 ",
    "Texto destaque 6 ",
    "Texto destaque 7 ",
  ];

  return (
    <Style.Container source={backgroundImageSrc}>
      <div
       style={{
        flex: 3,
        minWidth: '880px',
        borderRadius: '20px',
        marginRight: '20px',
        backgroundColor: 'gray',
        backgroundImage: 'url("https://www.mogidascruzes.sp.gov.br/public/site/imagens/6/2023071817355164b6f7a743553.jpg")',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
      }}>
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
              onClick={() => router.push("pesquisar-obras")}
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
      </div>
      <div
  style={{
    flex: 1,
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '10px',
    padding: '20px 10px',
    justifyContent: 'space-between',
  }}>
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
      </div>
    </Style.Container>
  );
};

export default CardBigTransformation;