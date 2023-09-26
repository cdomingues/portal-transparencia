import React, { useState } from "react";
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
import { Heading, Input, Text, background } from "@chakra-ui/react";
import { useFontSizeAccessibilityContext } from "../../../context/fontSizeAccessibility";
import obras_espaco_publico from '../../../assets/images/icones/Portal de Obras_TOPO_espaco publico.svg'
import obras_saneamento from '../../../assets/images/icones/Portal de Obras_TOPO_saneamento.svg'
import obras_mobilidade from '../../../assets/images/icones/Portal de Obras_TOPO_mobilidade.svg'
import obras_saude from '../../../assets/images/icones/Portal de Obras_TOPO_saude.svg'


type PropsInput = {
  handler?: {
    columns?: TableColumns;
    data?: Array<any>;
    loading?: boolean;
  };
};

export const contentConstructionsControl = {
  titlePage: "Portal de Obras - Mogi das Cruzes",
  description: "Conheça as obras que estão transformando nossa cidade.",
};

function Screen({ handler }: PropsInput) {
  const router = useRouter();
  const accessibility = useFontSizeAccessibilityContext();

  return (
    <LayoutConstructions breadcrumb={false}>
      <Style.Banner>
        <div className="content" >
          <Heading
            color={colors.white}
            fontSize={accessibility?.fonts?.moreUltraLarge}
            marginTop={50}
          >
            {contentConstructionsControl?.titlePage}
          </Heading>

          <Text
            color={colors.white}
            fontSize={accessibility?.fonts?.large}
            marginTop={10}
          >
            {contentConstructionsControl?.description}
          </Text>
          <div className="banner-bottom">
            
          <div
              className="chip-banner"
              onClick={() => router.push("/controle-de-obras/pesquisar-obras")}
           >
              <AiOutlineSearch fontSize={18} color={colors.white} />

              <Heading
                color={colors.white}
                fontSize={accessibility?.fonts?.medium}
                fontWeight={700}
                
              >
                Pesquise obras
              </Heading>
            </div>

            <div
              className="chip-banner"
              onClick={() => router.push("/controle-de-obras/sobre-as-obras")}
            >
              <AiFillInfoCircle fontSize={18} color={colors.white} />

              <Text
                color={colors.white}
                fontSize={accessibility?.fonts?.medium}
                fontWeight={700}
              >
                Sobre as obras
              </Text>
            </div>

            
          </div>
        </div>
        <Style.BannerTotals>
        <div className="gradient-image"></div>
        <div className="content">
          {/* <CardTotal
           // value="0"
            description={`Novas áreas de espaço público e áeras verdes`}
            icon={<TbUsers color={colors.white} fontSize={50} />}
          /> */}

            <CardTotal
              //value="0"
              description="Novas áreas de espaço público e áreas verdes"
              // icon={obras_espaco_publico}
              imageURL={obras_espaco_publico.src}  />

<CardTotal
              //value="0"
              description="Pessoas atendidas pelas obras de saneamento"
              // icon={obras_espaco_publico}
              imageURL={obras_saneamento.src}  />

              <CardTotal
              //value="0"
              description="Pessoas atendidas pelas obras de mobilidade"
              // icon={obras_espaco_publico}
              imageURL={obras_mobilidade.src}  />

              <CardTotal
              //value="0"
              description="Pessoas atendidas pelas obras de saúde"
              // icon={obras_espaco_publico}
              imageURL={obras_saude.src}  />  

          
          
        </div>
      </Style.BannerTotals>
      </Style.Banner>

      

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
            backgroundImageSrc="https://dados.mogidascruzes.sp.gov.br/dataset/8e668745-1f91-4e64-a541-4f4a81898cac/resource/5c7bcad9-6a64-4fcf-8a83-89a617371b49/download/obras-01.png"
            onClick={() =>
              router.push("/controle-de-obras/grandes-transformacoes-da-cidade")
            }
          />
          <CardTransformation
            title="Transformações em Mogi das Cruzes"
            description="Explore os bairros da cidade para descobrir o que estamos fazendo em cada um."
            backgroundImageSrc="https://dados.mogidascruzes.sp.gov.br/dataset/8e668745-1f91-4e64-a541-4f4a81898cac/resource/23585d54-3214-4c8b-8474-97dc80ada803/download/obras-02.png"
            onClick={() => router.push("/controle-de-obras/bairros")}
          />
          <CardTransformation
            title="Espaço público de qualidade"
            description="Trabalhamos por uma cidade com mais e melhor espaço público e áreas verdes, agradáveis, seguras e próximas aos moradores."
            backgroundImageSrc="https://dados.mogidascruzes.sp.gov.br/dataset/8e668745-1f91-4e64-a541-4f4a81898cac/resource/4be78cfe-7506-4aeb-afb2-5be46d0d86fd/download/obras-03.png"
            onClick={() => router.push("/controle-de-obras/espaco-publico")}
          />
        </div>
      </Style.ContainerCardsTransformations>
    </LayoutConstructions>
  );
}

export default Screen;
