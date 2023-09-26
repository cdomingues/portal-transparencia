import LayoutConstructions from "../../../components/LayoutConstructions";
import * as Text from "../../../styles/text";
import * as Style from "../../../styles/components/pesquisar-obras/styles";
import { parseMoney } from "../../../utils/mask";
import colors from "../../../styles/colors";
import Carousel from "../../../components/Swiper";
import { Input, Select } from "@chakra-ui/react";
import Vlibras from 'vlibras-nextjs';
import { useState } from "react";
import router from "next/router";
interface PropsPagination {
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

export const contentSearchConstructions = {
  titlePage: "Pesquise sobre as Obras",
  description: "Conheça todas as informações sobre as obras da Prefeitura",
};

function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const SearchBuildingsScreen = ({ handlers }: any) => {
  const {
    arrayBuildings,
    setNameBuilding,
    setCompanyName,
    handleChangeSelectNeighborhood,
    neighborhood,
    handleChangeSelectBuildingStep,
    buildingStep,
    handleChangeSelectBuildingType,
    buildingType,
    handleFilterBuildings,
    page,
    rowsPerPage,
    numberOfPages,
    handleChangePage,
  } = handlers;

  function Pagination({ totalPages, onPageChange }: PropsPagination) {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers?.push(i);
    }

    return (
      <div>
        <Vlibras />
        <div className="pagination">
          {pageNumbers?.map((number) => (
            <div key={number} className="page-item">
              <a className="page-link" onClick={() => onPageChange(number)}>
                {number}
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <LayoutConstructions
      title="Sobre"
      bannerSrc="https://dados.mogidascruzes.sp.gov.br/dataset/8e668745-1f91-4e64-a541-4f4a81898cac/resource/4244bee1-6627-46b8-97cc-0003e6e5fefa/download/imagens-para-site_topo-pesquisar-obras.png"
      bannerTitle={contentSearchConstructions?.titlePage}
      bannerDescription={contentSearchConstructions?.description}
    >
      <Style.Description>
        <Style.SearchBar>
          <Input
            variant="outline"
            placeholder="Nome ou descrição da obra"
            onChange={(event) => setNameBuilding(event.target.value)}
            style={{ backgroundColor: colors.white }}
          />

          <Input
            variant="outline"
            placeholder="Empresa"
            onChange={(event) => setCompanyName(event.target.value)}
            style={{ backgroundColor: colors.white }}
          />

          <Select
            placeholder="Bairro"
            onChange={handleChangeSelectNeighborhood}
            style={{ backgroundColor: colors.white }}
          >
             <option value="">Todos</option>
           
           
           <option value="BOTUJURU">Bojuturu</option>
           <option value="BRAZ CUBAS">Braz Cubas</option>
           <option value="CENTRO">Centro</option>
           <option value="CEZAR DE SOUZA">Cezar De Souza</option>
           <option value="CHÁCARA GUANABARA">Chácara Guanabara</option>
           <option value="CONJUNTO SANTO ÂNGELO">Conjunto Santo Ângelo</option>
           
           <option value="FAZENDA RODEIO">Fazenda Rodeio</option>
           <option value="JARDIM AEROPORTO">Jardim Aeroporto</option>
           <option value="JARDIM ARACY">Jardim Aracy</option>
           <option value="JARDIM MARICÁ">Jardim Maricá</option>
           <option value="JARDIM SANTA TEREZA">Jardim Santa Tereza</option>
           <option value="JUNDIAPEBA">Jundiapeba</option>
           <option value="MOGI MODERNO">Mogi Moderno</option>
           <option value="NOVA MOGILAR">Nova Mogilar</option>
           
           <option value="NOVA JUNDIAPEBA">Nova Jundiapeba</option>
           <option value="PARQUE MORUMBI">Parque Morumbi</option>
           <option value="PARQUE OLÍMPICO">Parque Olímpico</option>
           <option value="RESIDENCIAL NOVO HORIZONTE">Residencial Novo Horizonte </option>
           <option value="SOCORRO">Socorro</option>
           <option value="SANTO ÂNGELO">Santo Ângelo</option>
           <option value="TABOÃO">Taboão</option>
           <option value="TAIAÇUPEBA">Taiaçupeba</option>
           <option value="VILA CINTRA">Vila Cintra</option>
           <option value="VILA LAVÍNIA">Vila Lavínia</option>
           <option value="VILA NATAL">Vila Natal</option>
          </Select>

          <Select
            placeholder="Etapa"
            onChange={handleChangeSelectBuildingStep}
            style={{ backgroundColor: colors.white }}
          >
            <option value="">Todos</option>
            <option value="INICIADO">Iniciado</option>
            <option value="CONCLUÍDO">Concluído</option>
            <option value="RESCINDIDO">Rescindido</option>
          </Select>

          <Select
            placeholder="Tipo"
            onChange={handleChangeSelectBuildingType}
            style={{ backgroundColor: colors.white }}
          >
            <option value="">Todos</option>
           
            <option value="">Todos</option>
            <option value="1000 - EDUCA MOGI">1000 - EDUCA MOGI</option>
            <option value="1001 - PRIMEIROS PASSOS">
              1001 - PRIMEIROS PASSOS
            </option>
            <option value="2000 - MOGI EFICIENTE">2000 - MOGI EFICIENTE</option>
            <option value="2001 - CIDADE INTELIGENTE">
              2001 - CIDADE INTELIGENTE
            </option>
            <option value="2004 - INFRAESTRUTURA">2004 - INFRAESTRUTURA</option>
            <option value="2006 - SANEAMENTO AMBIENTAL">
              2006 - SANEAMENTO AMBIENTAL
            </option>
                        
            <option value="2007 - MOBILIDADE URBANA">
              2007 - MOBILIDADE URBANA
            </option>
            
            <option value="3003 - ESPORTE">3003 - ESPORTE</option>
                       
            <option value="3004 - SEGURANÇA">3004 - SEGURANÇA</option>
            <option value="3100 - SAÚDE">3100 - SAÚDE</option>
          </Select>

          <button className="buttons" onClick={() => handleFilterBuildings()}>
            <Text.Heading5Medium
              color={colors.white}
              style={{ textTransform: "none" }}
            >
              Pesquisar
            </Text.Heading5Medium>
          </button>
        </Style.SearchBar>

        {arrayBuildings
          ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((item: any, index: number) => {
            let arrayImages = [];
            arrayImages.push(
              item?.imagen_1 ||
                "https://www.stant.com.br/wp-content/uploads/2020/09/pexels-pixabay-159306_Easy-Resize.com_-1024x682.jpg"
            );
            item?.imagen_2 && arrayImages.push(item?.imagen_2);
            item?.imagen_3 && arrayImages.push(item?.imagen_3);
            item?.imagen_4 && arrayImages.push(item?.imagen_4);

            const program = item?.programa_ppa;

            const programConfigTranslator: any = {
              "2006 - SANEAMENTO AMBIENTAL": {
                backgroundColor: "#87C13F",
                imageBackgroundColor: "#7DA83C",
                imageName: "saneamento",
              },
              "2004 - INFRAESTRUTURA": {
                backgroundColor: "#7F3F93",
                imageBackgroundColor: "#713A80",
                imageName: "infraestrutura",
              },
              "2000 - MOGI EFICIENTE": {
                backgroundColor: "#FF588A",
                imageBackgroundColor: "#CD507D",
                imageName: "mogi-eficiente",
              },
              "1000 - EDUCA MOGI": {
                backgroundColor: "#008C57",
                imageBackgroundColor: "#087D4D",
                imageName: "educa-mogi",
              },
              "1001 - PRIMEIROS PASSOS": {
                backgroundColor: "#F8C336",
                imageBackgroundColor: "#DBAE2F",
                imageName: "primeiros-passos",
              },
              "2001 - CIDADE INTELIGENTE": {
                backgroundColor: "#22BFBD",
                imageBackgroundColor: "#31A4A4",
                imageName: "cidade-inteligente",
              },
              "3004 - SEGURANÇA": {
                backgroundColor: "#1C3C6E",
                imageBackgroundColor: "#183560",
                imageName: "seguranca",
              },
              "2007 - MOBILIDADE URBANA": {
                backgroundColor: "#F88B2A",
                imageBackgroundColor: "#D67B28",
                imageName: "mobilidade-urbana",
              },
              "3003 - ESPORTE": {
                backgroundColor: "#DD4134",
                imageBackgroundColor: "#DD4134",
                imageName: "esporte",
              },
              "3100 - SAÚDE": {
                backgroundColor: "#0093D3",
                imageBackgroundColor: "#0E83BB",
                imageName: "saude",
              },
            };

            const programConfig = programConfigTranslator[program] || {
              backgroundColor: "#7F3F93",
              imageBackgroundColor: "#713A80",
            };

            return (

                    
              //<a href= {`/controle-de-obras/construcao?${item?._id}`}>
              <Style.Card  key= {index} 
              onClick={() =>
                router.push(
                  `/controle-de-obras/construcao?${item?._id}`
                )
              }
              style={{ cursor: 'pointer' }}
              
              >
                
                <div className="left">
                
                  <img
                    src={`/icons/${programConfig.imageName}.svg`}
                    width="50%"
                    alt="Meu Ícone"
                  />
                </div>

                <div className="right">
                  <div className="row">
                    <div className="item">
                      <Text.Heading4Bold color={colors.black}>
                        Obra:
                      </Text.Heading4Bold>
                      <Text.Heading5Regular color={colors.black}>
                        {item?.nome_da_obra}
                      </Text.Heading5Regular>
                    </div>
                    <div className="item">
                      <Text.Heading4Bold color={colors.black}>
                        Empresa:
                      </Text.Heading4Bold>
                      <Text.Heading5Regular color={colors.black}>
                        {item?.razao_social_contratada}
                      </Text.Heading5Regular>
                    </div>
                    <div className="item">
                      <Text.Heading4Bold color={colors.black}>
                        Montante:
                      </Text.Heading4Bold>
                      <Text.Heading5Regular color={colors.black}>
                        {parseMoney(item?.valor_contrato)}
                      </Text.Heading5Regular>
                    </div>
                  </div>

                  <div style={{ marginTop: 20 }}>
                    <Text.Heading4Bold color={colors.black}>
                      Descrição:
                    </Text.Heading4Bold>
                    <Text.Heading5Regular color={colors.black}>
                      {item?.descricao_da_obra}
                    </Text.Heading5Regular>
                  </div>

                  <div className="row" style={{ marginTop: 20 }}>
                    {/* <div className="item">
                      <Text.Heading4Bold color={colors.black}>
                        Programa:
                      </Text.Heading4Bold>
                      <Text.Heading5Regular color={colors.black}>
                        {item?.programa_ppa}
                      </Text.Heading5Regular>
                    </div> */}
                    <div className="item">
                      <Text.Heading4Bold color={colors.black}>
                        Programa:
                      </Text.Heading4Bold>
                      <Text.Heading5Regular color={colors.black}>
                        {item?.programa_ppa}
                      </Text.Heading5Regular>
                    </div>
                    <div className="item">
                      <Text.Heading4Bold color={colors.black}>
                        Bairro:
                      </Text.Heading4Bold>
                      <Text.Heading5Regular color={colors.black}>
                        {item?.bairro_desc}
                      </Text.Heading5Regular>
                    </div>
                    <div className="item">
                      <Text.Heading4Bold color={colors.black}>
                        Etapa:
                      </Text.Heading4Bold>
                      <Text.Heading5Regular color={colors.black}>
                        {item?.situacao}
                      </Text.Heading5Regular>
                    </div>
                  </div>
                </div>
                <div
                  className="program"
                  style={{ backgroundColor: programConfig.backgroundColor }}
                >
                  <div className="program-top">
                    <p className="vertical-text">
                      {capitalizeFirstLetter(
                        String(
                          item?.programa_ppa?.split("-")?.[1]?.replace(" ", "")
                        ).toLowerCase()
                      ) || ""}
                    </p>
                  </div>
                  <div
                    className="program-bottom"
                    style={{
                      backgroundColor: programConfig.imageBackgroundColor,
                    }}
                  >
                    {programConfig.imageName && (
                      <img
                        src={`/icons/${programConfig.imageName}.svg`}
                        width={25}
                        alt="Meu Ícone"
                      />
                    )}
                  </div>
                </div>
              </Style.Card>
            );
          })}
        <div className="bottom">
          <Pagination
            totalPages={numberOfPages}
            onPageChange={handleChangePage}
          />
        </div>
      </Style.Description>
    </LayoutConstructions>
  );
};

export default SearchBuildingsScreen;
