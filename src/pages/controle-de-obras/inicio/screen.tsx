import React, { useState } from "react";
import * as Style from "./styles";
import * as Text from "../../../styles/text";
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
import { Input } from "@chakra-ui/react";

type PropsInput = {
  handler?: {
    columns?: TableColumns;
    data?: Array<any>;
    loading?: boolean;
  };
};

function Screen({ handler }: PropsInput) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  if (!password || password != "abobora123") {
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
          <Text.Heading1Bold color={colors.white} fontSize={2.6} marginTop={50}>
            MG Obras
          </Text.Heading1Bold>

          <Text.Heading2Medium color={colors.white} marginTop={20}>
            Conheça as obras que estão transformando nossa cidade.
          </Text.Heading2Medium>
          <div className="banner-bottom">
            <div
              className="chip-banner"
              onClick={() => router.push("/controle-de-obras/sobre-as-obras")}
            >
              <AiFillInfoCircle fontSize={18} color={colors.white} />

              <Text.Heading5Medium color={colors.white} fontWeight={700}>
                Sobre as obras
              </Text.Heading5Medium>
            </div>

            <div
              className="chip-banner"
              onClick={() => router.push("/controle-de-obras/pesquisar-obras")}
            >
              <AiOutlineSearch fontSize={18} color={colors.white} />

              <Text.Heading5Bold color={colors.white} fontWeight={700}>
                Pesquise obras
              </Text.Heading5Bold>
            </div>

            <div
              className="chip-banner"
              onClick={() => router.push("/controle-de-obras/obras-abertas")}
            >
              <IoIosConstruct fontSize={18} color={colors.white} />

              <Text.Heading5Bold color={colors.white} fontWeight={700}>
                Obras Abertas
              </Text.Heading5Bold>
            </div>
          </div>
        </div>
      </Style.Banner>

      <Style.BannerTotals>
        <div className="gradient-image"></div>
        <div className="content">
          <CardTotal
            value="120"
            description={`hectáreas de nuevo espacio público y verde`}
            icon={<BsTree color={colors.white} fontSize={50} />}
          />

          <CardTotal
            value="1.500.000"
            description="personas beneficiadas con obras hidráulicas"
            icon={<TbUsers color={colors.white} fontSize={50} />}
          />

          <CardTotal
            value="1.400.000"
            description="de pasajeros ahorran tiempo con Metrobus"
            icon={<TbBus color={colors.white} fontSize={50} />}
          />

          <CardTotal
            value={"2.000.000"}
            description="personas con historia de salud integral"
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
        <Style.Heading>Conheça mais obras em transformação</Style.Heading>

        <div className="align-cards">
          <CardTransformation
            title="Grandes transformaciones de la Ciudad"
            description="Tenemos un plan para seguir mejorando la calidad de vida de los vecinos de la Ciudad."
            backgroundImageSrc="https://cdn.buenosaires.gob.ar/BAObrasrenovado/MONSERRAT-PASEO-DEL-BAJO-1.jpg"
            onClick={() =>
              router.push("/controle-de-obras/grandes-transformacoes-da-cidade")
            }
          />
          <CardTransformation
            title="Transformações de 48 bairros"
            description="Recorré los barrios de la Ciudad para conocer qué estamos haciendo en cada uno."
            backgroundImageSrc="https://cdn.buenosaires.gob.ar/BAObrasrenovado/BALVANERA-MANZANA-66.jpg"
            onClick={() => router.push("/controle-de-obras/bairros")}
          />
          <CardTransformation
            title="Melhor espaço público"
            description="Trabajamos por una Ciudad con más y mejor espacio público y verde, disfrutable, seguro y cercano a los vecinos y las vecinas."
            backgroundImageSrc="https://cdn.buenosaires.gob.ar/BAObrasrenovado/CHACARITA-NICARAGUA-DORREGO.jpg"
            onClick={() => router.push("/controle-de-obras/espaco-publico")}
          />
        </div>
      </Style.ContainerCardsTransformations>
    </LayoutConstructions>
  );
}

export default Screen;
