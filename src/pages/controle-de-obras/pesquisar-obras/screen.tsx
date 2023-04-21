import LayoutConstructions from "../../../components/LayoutConstructions";
import * as Text from "../../../styles/text";
import * as Style from "./styles";
import { parseMoney } from "../../../utils/mask";
import colors from "../../../styles/colors";
import Carousel from "../../../components/Swiper";
import { Input, Select } from "@chakra-ui/react";
interface PropsPagination {
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
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
      pageNumbers.push(i);
    }

    return (
      <div>
        <div className="pagination">
          {pageNumbers.map((number) => (
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
      bannerTitle="Pesquisar Obras"
      bannerDescription="Conocé toda la información sobre las obras de la Ciudad."
    >
      <Style.Description>
        <Style.SearchBar>
          <Input
            variant="outline"
            placeholder="Nome ou descrição da obra"
            onChange={(event) => setNameBuilding(event.target.value)}
          />

          <Input
            variant="outline"
            placeholder="Empresa"
            onChange={(event) => setCompanyName(event.target.value)}
          />

          <Select
            placeholder="Bairro"
            onChange={handleChangeSelectNeighborhood}
          >
            <option value="">Todos</option>
            <option value="Villa Urquiza">Villa Urquiza</option>
            <option value="Montserrat">Montserrat</option>
            <option value="San Nicolás">San Nicolás</option>
            <option value="Villa Lugano">Villa Lugano</option>
          </Select>

          <Select placeholder="Etapa" onChange={handleChangeSelectBuildingStep}>
            <option value="">Todos</option>
            <option value="Finalizada">Finalizada</option>
          </Select>

          <Select placeholder="Tipo" onChange={handleChangeSelectBuildingType}>
            <option value="">Todos</option>
            <option value="Vivienda">Vivienda</option>
            <option value="Espacio Público">Espacio Público</option>
            <option value="Escuelas">Escuelas</option>
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
            item?.imagen_1 && arrayImages.push(item?.imagen_1);
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
                        {item.Nome}
                      </Text.Heading5Regular>
                    </div>
                    <div className="item">
                      <Text.Heading4Bold color={colors.black}>
                        Empresa:
                      </Text.Heading4Bold>
                      <Text.Heading5Regular color={colors.black}>
                        {item.empresa_contratada}
                      </Text.Heading5Regular>
                    </div>
                    <div className="item">
                      <Text.Heading4Bold color={colors.black}>
                        Monto:
                      </Text.Heading4Bold>
                      <Text.Heading5Regular color={colors.black}>
                        {parseMoney(item.Valor_inicial)}
                      </Text.Heading5Regular>
                    </div>
                  </div>

                  <div style={{ marginTop: 20 }}>
                    <Text.Heading4Bold color={colors.black}>
                      Descripción:
                    </Text.Heading4Bold>
                    <Text.Heading5Regular color={colors.black}>
                      {item.Descrição}
                    </Text.Heading5Regular>
                  </div>

                  <div className="row" style={{ marginTop: 20 }}>
                    <div className="item">
                      <Text.Heading4Bold color={colors.black}>
                        Programa:
                      </Text.Heading4Bold>
                      <Text.Heading5Regular color={colors.black}>
                        {item.Programa}
                      </Text.Heading5Regular>
                    </div>
                    <div className="item">
                      <Text.Heading4Bold color={colors.black}>
                        Tipo:
                      </Text.Heading4Bold>
                      <Text.Heading5Regular color={colors.black}>
                        {item.Categoria}
                      </Text.Heading5Regular>
                    </div>
                    <div className="item">
                      <Text.Heading4Bold color={colors.black}>
                        Bairro:
                      </Text.Heading4Bold>
                      <Text.Heading5Regular color={colors.black}>
                        {item.bairro}
                      </Text.Heading5Regular>
                    </div>
                    <div className="item">
                      <Text.Heading4Bold color={colors.black}>
                        Etapa:
                      </Text.Heading4Bold>
                      <Text.Heading5Regular color={colors.black}>
                        {item.Status}
                      </Text.Heading5Regular>
                    </div>
                  </div>
                </div>
              </Style.Card>
            );
          })}

        {/* <div className="bottom">
          <Pagination
            count={numberOfPages}
            variant="outlined"
            shape="rounded"
            onChange={handleChangePage}
          />
        </div> */}
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
