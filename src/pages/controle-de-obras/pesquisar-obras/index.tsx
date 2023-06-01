import LayoutConstructions from "../../../components/LayoutConstructions";
import * as Text from "../../../styles/text";
import * as Style from "../../../styles/components/pesquisar-obras/styles";
import { parseMoney } from "../../../utils/mask";
import colors from "../../../styles/colors";
import Carousel from "../../../components/Swiper";
import { Input, Select } from "@chakra-ui/react";
import { useState } from "react";
interface PropsPagination {
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

export const contentSearchConstructions = {
  titlePage: "Pesquisar Obras",
  description: "Conocé toda la información sobre las obras de la Ciudad.",
};

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

  const [password, setPassword] = useState("");
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

  function Pagination({ totalPages, onPageChange }: PropsPagination) {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers?.push(i);
    }

    return (
      <div>
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
      bannerSrc="https://cdn.buenosaires.gob.ar/BAObrasrenovado/NUEVA-POMPEYA-AHORA-VIADUCTO-BELGRANO-SUR-2.jpg"
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
            <option value="PARQUE MORUMBI">Parque Morumbi</option>
            <option value="JUNDIAPEBA">Jundiapeba</option>
            <option value="BOTUJURU">Bojuturu</option>
            <option value="SANTO ÂNGELO">Santo Ângelo</option>
            <option value="FAZENDA RODEIO">Fazenda Rodeio</option>
            <option value="SANTO ÂNGELO">Santo Ângelo</option>
            <option value="NOVA MOGILAR">Nova Mogilar</option>
            <option value="BRAZ CUBAS">Braz Cubas</option>
            <option value="NOVA JUNDIAPEBA">Nova Jundiapeba</option>
            <option value="SOCORRO">Socorro</option>
            <option value="CEZAR DE SOUZA">Cezar De Souza</option>
            <option value="CENTRO">Centro</option>
            <option value="MOGI MODERNO">Mogi Moderno</option>
            <option value="TAIAÇUPEBA">Taiaçupeba</option>
            <option value="VILA NATAL">Vila Natal</option>
            <option value="CONJUNTO SANTO ÂNGELO">Conjunto Santo Ângelo</option>
            <option value="PARQUE OLÍMPICO">Parque Olímpico</option>
            <option value="VILA CINTRA">Vila Cintra</option>
            <option value="TABOÃO">Taboão</option>
            <option value="JARDIM ARACY">Jardim Aracy</option>
            <option value="VILA LAVÍNIA">Vila Lavínia</option>
            <option value="JARDIM AEROPORTO">Jardim Aeroporto</option>
            <option value="CHÁCARA GUANABARA">Chácara Guanabara</option>
            <option value="RESIDENCIAL NOVO HORIZONTE">
              Residencial Novo Horizonte
            </option>
            <option value="JARDIM MARICÁ">Jardim Maricá</option>
            <option value="JARDIM SANTA TEREZA">Jardim Santa Tereza</option>
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
            <option value="2006 - SANEAMENTO AMBIENTAL">
              2006 - SANEAMENTO AMBIENTAL
            </option>
            <option value="2004 - INFRAESTRUTURA">2004 - INFRAESTRUTURA</option>
            <option value="2000 - MOGI EFICIENTE">2000 - MOGI EFICIENTE</option>
            <option value="3100 - SAÚDE">3100 - SAÚDE</option>
            <option value="3003 - ESPORTE">3003 - ESPORTE</option>
            <option value="3100 - SAÚDE">3100 - SAÚDE</option>
            <option value="2007 - MOBILIDADE URBANA">2007 - MOBILIDADE URBANA</option>
            <option value="3004 - SEGURANÇA">3004 - SEGURANÇA</option>
            <option value="2001 - CIDADE INTELIGENTE">2001 - CIDADE INTELIGENTE</option>
            <option value="1001 - PRIMEIROS PASSOS">1001 - PRIMEIROS PASSOS</option>
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

            return (
              <Style.Card key={index}>
                <div className="left">
                  <Carousel listImages={arrayImages} className="image" />
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
                        Monto:
                      </Text.Heading4Bold>
                      <Text.Heading5Regular color={colors.black}>
                        {parseMoney(item?.valor_contrato)}
                      </Text.Heading5Regular>
                    </div>
                  </div>

                  <div style={{ marginTop: 20 }}>
                    <Text.Heading4Bold color={colors.black}>
                      Descripción:
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
                        Tipo:
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
                        {item?.bairro}
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
