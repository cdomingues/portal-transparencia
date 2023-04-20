import React from "react";
import * as Style from "./styles";
import * as Text from "../../styles/text";
import { TableColumns } from "../../components/Table";
import LayoutConstructions from "../../components/LayoutConstructions";
import colors from "../../styles/colors";
import { useRouter } from "next/router";
import { AiFillInfoCircle, AiOutlineSearch } from "react-icons/ai";
import { IoIosConstruct } from "react-icons/io";
import { TbUsers, TbBus, TbRibbonHealth } from "react-icons/tb";
import { BsTree } from "react-icons/bs";
import CardTotal from "../../components/CardTotal";

type PropsInput = {
  handler?: {
    columns?: TableColumns;
    data?: Array<any>;
    loading?: boolean;
  };
};

function Screen({ handler }: PropsInput) {
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
            <div className="chip-banner">
              <AiFillInfoCircle fontSize={18} color={colors.white} />

              <Text.Heading5Medium color={colors.white} fontWeight={700}>
                Sobre as obras
              </Text.Heading5Medium>
            </div>

            <div className="chip-banner">
              <AiOutlineSearch fontSize={18} color={colors.white} />

              <Text.Heading5Bold color={colors.white} fontWeight={700}>
                Pesquise obras
              </Text.Heading5Bold>
            </div>

            <div className="chip-banner">
              <IoIosConstruct fontSize={18} color={colors.white} />

              <Text.Heading5Bold color={colors.white} fontWeight={700}>
                Pesquise obras
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
    </LayoutConstructions>
  );
}

export default Screen;
