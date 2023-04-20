import * as Style from "./styles";
import * as Text from "../../../../styles/text";
import { FiMapPin } from "react-icons/fi";
import { SiInstagram, SiFacebook, SiWhatsapp } from "react-icons/si";
import Image from "next/image";
import Logo from "../../../../assets/images/logo_branco.png";
import colors from "../../../../styles/colors";

const Footer = ({ style }: any) => {
  return (
    <Style.Container style={style}>
      <div className="top">
        <div className="column">
          <Text.Heading2Bold color={colors.white}>
            Prefeitura De Mogi Das Cruzes
          </Text.Heading2Bold>

          <a>
            <Text.Heading4Regular color={colors.white} className="link">
              Site oficial
            </Text.Heading4Regular>
          </a>

          <a>
            <Text.Heading4Regular color={colors.white} className="link">
              Legislação
            </Text.Heading4Regular>
          </a>

          <a>
            <Text.Heading4Regular color={colors.white} className="link">
              Portal da Transparência
            </Text.Heading4Regular>
          </a>

          <a>
            <Text.Heading4Regular color={colors.white} className="link">
              Fale Conosco
            </Text.Heading4Regular>
          </a>
        </div>

        <div className="column">
          <Text.Heading2Bold color={colors.white}>
            Links Úteis
          </Text.Heading2Bold>

          <a>
            <Text.Heading4Regular color={colors.white} className="link">
              Secretaria da Educação do Estado de São Paulo
            </Text.Heading4Regular>
          </a>
        </div>

        <div className="column">
          <Text.Heading2Bold color={colors.white}>Endereço</Text.Heading2Bold>

          <div className="address">
            <Text.Heading4Regular color={colors.white}>
              SEDE DA SECRETARIA DE EDUCAÇÃO
            </Text.Heading4Regular>

            <FiMapPin fontSize={20} color={colors.white} />
          </div>

          <div className="address">
            <Text.Heading4Regular color={colors.white}>
              Av. Ver. Narcisio Yague Guimarães, 2
            </Text.Heading4Regular>
          </div>

          <div className="address">
            <Text.Heading4Regular color={colors.white}>
              Centro Cívico, CEP 08780-910
            </Text.Heading4Regular>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="column" style={{ paddingTop: 0 }}>
          <Image
            src={Logo}
            alt="logo"
            width="180"
            height="100"
            className="image"
          />
        </div>
        <div className="column" style={{ paddingTop: 20 }}>
          <Text.Heading2Bold color={colors.white}>
            Canais oficiais
          </Text.Heading2Bold>

          <div className="row">
            <a>
              <SiInstagram fontSize={18} color={colors.white} />
            </a>
            <a>
              <SiFacebook fontSize={20} color={colors.white} />
            </a>
            <a>
              <SiWhatsapp fontSize={18} color={colors.white} />
            </a>
          </div>
        </div>
        <div className="column" style={{ paddingTop: 0 }}></div>
      </div>
    </Style.Container>
  );
};

export default Footer;
