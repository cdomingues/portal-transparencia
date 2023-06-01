import React, {  useState } from "react";
import * as Style from "../../../styles/components/controle-de-obras-inicio/styles";
import { TableColumns } from "../../../components/Table";
import LayoutConstructions from "../../../components/LayoutConstructions";
import colors from "../../../styles/colors";
import { useRouter } from "next/router";
import { AiFillInfoCircle, AiOutlineSearch } from "react-icons/ai";
import { IoIosConstruct } from "react-icons/io";
import { TbUsers, TbBus, TbRibbonHealth } from "react-icons/tb";
import { BsTree } from "react-icons/bs";
import CardTotal from "../../../components/CardTotal";
import MapOfConstructions from "../../../components/MapOfConstructions";
import CardBigTransformation from "../../../components/CardBigTransformation";
import CardTransformation from "../../../components/CardTransformation";
import { Heading, Input, Text } from "@chakra-ui/react";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";


type PropsInput = {
  handler?: {
    columns?: TableColumns;
    data?: Array<any>;
    loading?: boolean;
  };
};

export const contentConstructionsControl = {
  titlePage:"Portal de Obras - Mogi das Cruzes",
  description:"Conheça as obras que estão transformando nossa cidade.",
}

function Screen({ handler }: PropsInput) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const accessibility = useFontSizeAccessibilityContext();

  if (!password || password != " ") {
    return (
      <div
        style={{
          width: "500px",
          height: "200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          padding: 20,
          borderRadius: 30,
        }}
      >
        <span>Digite a senha para acessar:</span>
        <Input
          placeholder="Senha"
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          style={{ marginTop: 5 }}
        />
      </div>
    );
  }
  return (
    <LayoutConstructions breadcrumb={false}>
      <Style.Banner>
        <div className="content">
          <Heading color={colors.white} fontSize={accessibility?.fonts?.moreUltraLarge} marginTop={50}>
            {contentConstructionsControl?.titlePage}
          </Heading>

          <Text color={colors.white} fontSize={accessibility?.fonts?.large} marginTop={10}>
            {contentConstructionsControl?.description}
          </Text>
          <div className="banner-bottom">
            <div
              className="chip-banner"
              onClick={() => router.push("/controle-de-obras/sobre-as-obras")}
            >
              <AiFillInfoCircle fontSize={18} color={colors.white} />

              <Text color={colors.white} fontSize={accessibility?.fonts?.medium} fontWeight={700}>
                Sobre as obras
              </Text>
            </div>

            <div
              className="chip-banner"
              onClick={() => router.push("/controle-de-obras/pesquisar-obras")}
            >
              <AiOutlineSearch fontSize={18} color={colors.white} />

              <Heading color={colors.white} fontSize={accessibility?.fonts?.medium} fontWeight={700}>
                Pesquise obras
              </Heading>
            </div>

          </div>
        </div>
      </Style.Banner>

      <Style.BannerTotals>
        <div className="gradient-image"></div>
        <div className="content">
          <CardTotal
            value="XXX"
            description={`novas áreas de espaço público e áeras verdes`}
            icon={<BsTree color={colors.white} fontSize={50} />}
          />

          <CardTotal
            value="XXX.XXX"
            description="pessoas atendidas pelas obras de saneamento"
            icon={<TbUsers color={colors.white} fontSize={50} />}
          />

          <CardTotal
            value="XXXXX"
            description="pessoas atendidas pelas obras de mobilidade"
            icon={<TbBus color={colors.white} fontSize={50} />}
          />

          <CardTotal
            value={"XXXXX"}
            description="atendidas nas novas unidades de saúde"
            icon={<TbRibbonHealth color={colors.white} fontSize={50} />}
          />
        </div>
      </Style.BannerTotals>

      <MapOfConstructions />

      <Style.ContainerBigTransformations>
        <Style.Heading>Grandes transformações da cidade</Style.Heading>
        <CardBigTransformation></CardBigTransformation>
      </Style.ContainerBigTransformations>

      <Style.ContainerCardsTransformations>
        <Style.Heading>Conheça nossas obras em destaque</Style.Heading>

        <div className="align-cards">
          <CardTransformation
            title="Grandes transformações da cidade"
            description="Temos um plano para continuar melhorando a qualidade de vida dos moradores da cidade."
            backgroundImageSrc="https://cdn.buenosaires.gob.ar/BAObrasrenovado/MONSERRAT-PASEO-DEL-BAJO-1.jpg"
            onClick={() =>
              router.push("/controle-de-obras/grandes-transformacoes-da-cidade")
            }
          />
          <CardTransformation
            title="Transformações em Mogi das Cruzes"
            description="Explore os bairros da cidade para descobrir o que estamos fazendo em cada um."
            backgroundImageSrc="https://cdn.buenosaires.gob.ar/BAObrasrenovado/BALVANERA-MANZANA-66.jpg"
            onClick={() => router.push("/controle-de-obras/bairros")}
          />
          <CardTransformation
            title="Espaço público de qualidade"
            description="Trabalhamos por uma cidade com mais e melhor espaço público e áreas verdes, agradáveis, seguras e próximas aos moradores."
            backgroundImageSrc="https://cdn.buenosaires.gob.ar/BAObrasrenovado/CHACARITA-NICARAGUA-DORREGO.jpg"
            onClick={() => router.push("/controle-de-obras/espaco-publico")}
          />
        </div>
      </Style.ContainerCardsTransformations>
    </LayoutConstructions>
  );
}

export default Screen;
