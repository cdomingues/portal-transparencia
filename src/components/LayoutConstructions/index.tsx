import HeadComponent from "./components/Head";
import * as Style from "./styles";
import * as Text from "../../styles/text";
import { ReactNode } from "react";
import Footer from "./components/Footer";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useRouter } from "next/router";
import colors from "../../styles/colors";
import Header from "./components/Header";

type LayoutProps = {
  prefix?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  bannerSrc?: string;
  bannerTitle?: string;
  bannerDescription?: string;
  breadcrumb?: boolean;
};

const Layout = ({
  title,
  prefix,
  description,
  children,
  bannerSrc,
  bannerTitle,
  bannerDescription,
  breadcrumb = true,
}: LayoutProps) => {
  const router = useRouter();
  let pathnames: any = window.location.href.split("/").slice(3);

  const handleRedirect = (value: string, index: number) => {
    let path = "";
    const CAN_RETURN_TO_PATH = 0;

    if (index === CAN_RETURN_TO_PATH) {
      router.replace("/" + value);
    }

    for (var i = 0; i < index; i++) {
      path = "/" + pathnames[i];
    }

    return router.replace(path + "/" + value);
  };

  return (
    <Style.Container>
      <HeadComponent title={title} prefix={prefix} description={description} />
      <Header />
      {breadcrumb && (
        <div className="breadcrumb-container">
          <Breadcrumbs aria-label="breadcrumb" className="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              <Text.Heading5Regular color={colors.white}>
                Início
              </Text.Heading5Regular>
            </Link>

            {pathnames?.map((item: string, index: number) => (
              <Link
                underline="hover"
                color="inherit"
                key={index}
                onClick={() =>
                  pathnames[pathnames?.length - 1] === item
                    ? {}
                    : handleRedirect(item, index)
                }
              >
                <Text.Heading5Regular
                  color={colors.white}
                  style={{
                    opacity:
                      pathnames[pathnames?.length - 1] === item ? 0.7 : 1,
                  }}
                >
                  {item}
                </Text.Heading5Regular>
              </Link>
            ))}
          </Breadcrumbs>
        </div>
      )}

      {bannerSrc && (
        <Style.BannerDefault
          style={{
            backgroundImage: `url(${bannerSrc})`,
          }}
        >
          <div className="content">
            <Text.Heading1Bold
              color={colors.black}
              fontSize={3}
              marginTop={170}
            >
              {bannerTitle}
            </Text.Heading1Bold>

            <Text.Heading2Regular color={colors.black} marginTop={20}>
              {bannerDescription}
            </Text.Heading2Regular>
          </div>
        </Style.BannerDefault>
      )}

      <Style.Content>{children}</Style.Content>
      <Footer />
    </Style.Container>
  );
};

export default Layout;
