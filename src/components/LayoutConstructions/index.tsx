import HeadComponent from "./components/Head";
import * as Style from "./styles";
import * as Text from "../../styles/text";
import { ReactNode } from "react";
import Footer from "./components/Footer";
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

import { MdArrowRight } from "react-icons/md";

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

      {breadcrumb && (
        <div className="breadcrumb-container">
          <div
            onClick={() => router.push("/controle-de-obras/inicio")}
            style={{ marginRight: 5 }}
          >
            <Text.Heading5Regular color={colors.black}>
              Início
            </Text.Heading5Regular>
          </div>

          <MdArrowRight style={{ marginRight: 5 }} color={colors.black} />

          {pathnames?.map((item: string, index: number) => {
            if (index === 0) {
              return;
            }
            return (
              <div
                key={index}
                onClick={() =>
                  pathnames[pathnames?.length - 1] === item
                    ? {}
                    : handleRedirect(item, index)
                }
                style={{ marginRight: 10 }}
              >
                <Text.Heading5Regular
                  color={colors.black}
                  
                >
                  {item}
                </Text.Heading5Regular>
              </div>
            );
          })}
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
              color={colors.white}
              fontSize={3}
              marginTop={100}
            >
              {bannerTitle}
            </Text.Heading1Bold>

            <Text.Heading2Regular color={colors.white} marginTop={20}>
              {bannerDescription}
            </Text.Heading2Regular>
          </div>
        </Style.BannerDefault>
      )}

      <Style.Content>{children}</Style.Content>
    </Style.Container>
  );
};

export default Layout;
