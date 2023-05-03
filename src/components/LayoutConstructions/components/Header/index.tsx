import * as Style from "./styles";
import LogoLight from "../../../../assets/images/logo_colorido.png";
import Image from "next/image";
import { SiInstagram, SiFacebook, SiWhatsapp } from "react-icons/si";

import { useRouter } from "next/router";
import colors from "../../../../styles/colors";

const Header = () => {
  const router = useRouter();
  return (
    <Style.Container style={{ backgroundColor: colors.white }}>
      <div className="content">
        <Style.Left>
          <a onClick={() => router.push("/")}>
            <Image
              src={LogoLight}
              alt="logo"
              style={{
                marginLeft: -6.5,
              }}
              width="180"
              height="100"
            />
          </a>
        </Style.Left>

        <Style.Right>
          <a>
            <SiInstagram fontSize={18} color={colors.naturalBlack} />
          </a>
          <a>
            <SiFacebook fontSize={20} color={colors.facebook} />
          </a>
          <a>
            <SiWhatsapp fontSize={18} color={colors.whatsapp} />
          </a>
        </Style.Right>
      </div>
    </Style.Container>
  );
};

export default Header;
