import * as Style from "./styles";
import * as Text from "../../../styles/text";
import Bubble from "../../Bubble";
import { useMemo } from "react";
import colors from "../../../styles/colors";

const BuildingNeighbordhoods = ({ setConstructionSelected, filteredValues }: any) => {
  const translatorColor = (value: string) => {
    const translator: { [key: string]: string } = {
      "2006 - SANEAMENTO AMBIENTAL": colors.randomColors.green,
      "2004 - INFRAESTRUTURA": colors.randomColors.blue,
      "2000 - MOGI EFICIENTE": colors.green,
      "3100 - SAÚDE": colors.randomColors.blueLight,
      "3003 - ESPORTE": colors.randomColors.orangeLight,
      "2007 - MOBILIDADE URBANA": colors.randomColors.red,
      "3004 - SEGURANÇA": colors.randomColors.yellow,
      "2001 - CIDADE INTELIGENTE": colors.black,
      "1001 - PRIMEIROS PASSOS": colors.grayDark,
    };

    return translator[value] ? translator[value] : colors.graySemiMedium;
  };

  let buildingsMorumbi = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.bairro?.toUpperCase()?.includes("PARQUE MORUMBI"))
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor(item?.programa_ppa),
          };
        }),
    [filteredValues]
  );

  let buildingsJundiapeba = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.bairro?.toUpperCase()?.includes("JUNDIAPEBA"))
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor(item?.programa_ppa),
          };
        }),
    [filteredValues]
  );

  let buildingsBojuturu = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.bairro?.toUpperCase()?.includes("BOTUJURU"))
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor(item?.programa_ppa),
          };
        }),
    [filteredValues]
  );

  let buildingsSantoAngelo = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.bairro?.toUpperCase()?.includes("SANTO ÂNGELO"))
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor(item?.programa_ppa),
          };
        }),
    [filteredValues]
  );

  let buildingsRodeio = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.bairro?.toUpperCase()?.includes("FAZENDA RODEIO"))
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor(item?.programa_ppa),
          };
        }),
    [filteredValues]
  );

  let buildingsMogilar = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.bairro?.toUpperCase()?.includes("NOVA MOGILAR"))
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor(item?.programa_ppa),
          };
        }),
    [filteredValues]
  );

  let buildingsBrazCubas = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.bairro?.toUpperCase()?.includes("BRAZ CUBAS"))
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor(item?.programa_ppa),
          };
        }),
    [filteredValues]
  );

  let buildingsNovaJundiapeba = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.bairro?.toUpperCase()?.includes("NOVA JUNDIAPEBA"))
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor(item?.programa_ppa),
          };
        }),
    [filteredValues]
  );

  let buildingsSocorro = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.bairro?.toUpperCase()?.includes("SOCORRO"))
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor(item?.programa_ppa),
          };
        }),
    [filteredValues]
  );

  let buildingsCezarDeSouza = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.bairro?.toUpperCase()?.includes("CEZAR DE SOUZA"))
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor(item?.programa_ppa),
          };
        }),
    [filteredValues]
  );
  
  let buildingsCentro = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.bairro?.toUpperCase()?.includes("CENTRO"))
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor(item?.programa_ppa),
          };
        }),
    [filteredValues]
  );

  let buildingsMogiModerno = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.bairro?.toUpperCase()?.includes("MOGI MODERNO"))
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor(item?.programa_ppa),
          };
        }),
    [filteredValues]
  );

  let buildingsTaiacupeba = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.bairro?.toUpperCase()?.includes("TAIAÇUPEBA"))
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor(item?.programa_ppa),
          };
        }),
    [filteredValues]
  );

  let buildingsVilaNatal = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.bairro?.toUpperCase()?.includes("VILA NATAL"))
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor(item?.programa_ppa),
          };
        }),
    [filteredValues]
  );

  let buildingsConjuntoSantoAngelo = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.bairro?.toUpperCase()?.includes("CONJUNTO SANTO ÂNGELO"))
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor(item?.programa_ppa),
          };
        }),
    [filteredValues]
  );

  let buildingsParqueOlimpico = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.bairro?.toUpperCase()?.includes("PARQUE OLÍMPICO"))
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor(item?.programa_ppa),
          };
        }),
    [filteredValues]
  );

  let buildingsVilaCintra = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.bairro?.toUpperCase()?.includes("VILA CINTRA"))
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor(item?.programa_ppa),
          };
        }),
    [filteredValues]
  );

  let buildingsTaboao = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.bairro?.toUpperCase()?.includes("TABOÃO"))
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor(item?.programa_ppa),
          };
        }),
    [filteredValues]
  );

  let buildingsJardimAracy = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.bairro?.toUpperCase()?.includes("JARDIM ARACY"))
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor(item?.programa_ppa),
          };
        }),
    [filteredValues]
  );

  let buildingsVilaLavinia = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.bairro?.toUpperCase()?.includes("VILA LAVÍNIA"))
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor(item?.programa_ppa),
          };
        }),
    [filteredValues]
  );

  let buildingsJardimAeroporto = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.bairro?.toUpperCase()?.includes("JARDIM AEROPORTO"))
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor(item?.programa_ppa),
          };
        }),
    [filteredValues]
  );

  let buildingsChacaraGuanabara = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.bairro?.toUpperCase()?.includes("CHÁCARA GUANABARA"))
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor(item?.programa_ppa),
          };
        }),
    [filteredValues]
  );

  let buildingsResidencialNovoHorizonte = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.bairro?.toUpperCase()?.includes("RESIDENCIAL NOVO HORIZONTE"))
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor(item?.programa_ppa),
          };
        }),
    [filteredValues]
  );

  let buildingsJardimMarica = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.bairro?.toUpperCase()?.includes("JARDIM MARICÁ"))
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor(item?.programa_ppa),
          };
        }),
    [filteredValues]
  );

  let buildingsJardimSantaTereza = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) => item?.bairro?.toUpperCase()?.includes("JARDIM SANTA TEREZA"))
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor(item?.programa_ppa),
          };
        }),
    [filteredValues]
  );

  return (
    <Style.StepContainer>
      <div className="box-step">
        <Text.Heading4Bold>PARQUE MORUMBI</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsMorumbi?.length !== 0 && (
            <Bubble
              buildingsData={buildingsMorumbi}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-morumbi"
            />
          )}
        </div>
      </div>
      <div className="box-step">
        <Text.Heading4Bold>JUNDIAPEBA</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsJundiapeba?.length !== 0 && (
            <Bubble
              buildingsData={buildingsJundiapeba}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-jundiapeba"
            />
          )}
        </div>
      </div>
      <div className="box-step">
        <Text.Heading4Bold>BOTUJURU</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsBojuturu?.length !== 0 && (
            <Bubble
              buildingsData={buildingsBojuturu}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-bojuturu"
            />
          )}
        </div>
      </div>
      <div className="box-step">
        <Text.Heading4Bold>SANTO ÂNGELO</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsSantoAngelo?.length !== 0 && (
            <Bubble
              buildingsData={buildingsSantoAngelo}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-angelo"
            />
          )}
        </div>
      </div>
      <div className="box-step">
        <Text.Heading4Bold>FAZENDA RODEIO</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsRodeio?.length !== 0 && (
            <Bubble
              buildingsData={buildingsRodeio}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-rodeio"
            />
          )}
        </div>
      </div>
      <div className="box-step">
        <Text.Heading4Bold>NOVA MOGILAR</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsMogilar?.length !== 0 && (
            <Bubble
              buildingsData={buildingsMogilar}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-mogilar"
            />
          )}
        </div>
      </div>
      <div className="box-step">
        <Text.Heading4Bold>BRAZ CUBAS</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsBrazCubas?.length !== 0 && (
            <Bubble
              buildingsData={buildingsBrazCubas}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-cubas"
            />
          )}
        </div>
      </div>
      <div className="box-step">
        <Text.Heading4Bold>NOVA JUNDIAPEBA</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsNovaJundiapeba?.length !== 0 && (
            <Bubble
              buildingsData={buildingsNovaJundiapeba}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-nova-jundiapeba"
            />
          )}
        </div>
      </div>
      <div className="box-step">
        <Text.Heading4Bold>SOCORRO</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsSocorro?.length !== 0 && (
            <Bubble
              buildingsData={buildingsSocorro}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-socorro"
            />
          )}
        </div>
      </div>
      <div className="box-step">
        <Text.Heading4Bold>CEZAR DE SOUZA</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsCezarDeSouza?.length !== 0 && (
            <Bubble
              buildingsData={buildingsCezarDeSouza}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-cezar-de-souza"
            />
          )}
        </div>
      </div>
      <div className="box-step">
        <Text.Heading4Bold>CENTRO</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsCentro?.length !== 0 && (
            <Bubble
              buildingsData={buildingsCentro}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-centro"
            />
          )}
        </div>
      </div>
      <div className="box-step">
        <Text.Heading4Bold>MOGI MODERNO</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsMogiModerno?.length !== 0 && (
            <Bubble
              buildingsData={buildingsMogiModerno}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-mogi-moderno"
            />
          )}
        </div>
      </div>
      <div className="box-step">
        <Text.Heading4Bold>TAIAÇUPEBA</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsTaiacupeba?.length !== 0 && (
            <Bubble
              buildingsData={buildingsTaiacupeba}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-taiacupeba"
            />
          )}
        </div>
      </div>
      <div className="box-step">
        <Text.Heading4Bold>VILA NATAL</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsVilaNatal?.length !== 0 && (
            <Bubble
              buildingsData={buildingsVilaNatal}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-vila-natal"
            />
          )}
        </div>
      </div>
      <div className="box-step">
        <Text.Heading4Bold>CONJUNTO SANTO ÂNGELO</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsConjuntoSantoAngelo?.length !== 0 && (
            <Bubble
              buildingsData={buildingsConjuntoSantoAngelo}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-conjunto-santo-angelo"
            />
          )}
        </div>
      </div>
      <div className="box-step">
        <Text.Heading4Bold>PARQUE OLÍMPICO</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsParqueOlimpico?.length !== 0 && (
            <Bubble
              buildingsData={buildingsParqueOlimpico}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-parque-olimpico"
            />
          )}
        </div>
      </div>
      <div className="box-step">
        <Text.Heading4Bold>VILA CINTRA</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsVilaCintra?.length !== 0 && (
            <Bubble
              buildingsData={buildingsVilaCintra}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-vila-cintra"
            />
          )}
        </div>
      </div>
      <div className="box-step">
        <Text.Heading4Bold>TABOÃO</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsTaboao?.length !== 0 && (
            <Bubble
              buildingsData={buildingsTaboao}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-taboao"
            />
          )}
        </div>
      </div>
      <div className="box-step">
        <Text.Heading4Bold>JARDIM ARACY</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsJardimAracy?.length !== 0 && (
            <Bubble
              buildingsData={buildingsJardimAracy}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-jardim-aracy"
            />
          )}
        </div>
      </div>
      <div className="box-step">
        <Text.Heading4Bold>VILA LAVÍNIA</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsVilaLavinia?.length !== 0 && (
            <Bubble
              buildingsData={buildingsVilaLavinia}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-vila-lavinia"
            />
          )}
        </div>
      </div>
      <div className="box-step">
        <Text.Heading4Bold>JARDIM AEROPORTO</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsJardimAeroporto?.length !== 0 && (
            <Bubble
              buildingsData={buildingsJardimAeroporto}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-jardim-aeroporto"
            />
          )}
        </div>
      </div>
      <div className="box-step">
        <Text.Heading4Bold>CHÁCARA GUANABARA</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsChacaraGuanabara?.length !== 0 && (
            <Bubble
              buildingsData={buildingsChacaraGuanabara}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-chacara-guanabara"
            />
          )}
        </div>
      </div>
      <div className="box-step">
        <Text.Heading4Bold>RESIDENCIAL NOVO HORIZONTE</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsResidencialNovoHorizonte?.length !== 0 && (
            <Bubble
              buildingsData={buildingsResidencialNovoHorizonte}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-residencial-novo-horizonte"
            />
          )}
        </div>
      </div>
      <div className="box-step">
        <Text.Heading4Bold>JARDIM MARICÁ</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsJardimMarica?.length !== 0 && (
            <Bubble
              buildingsData={buildingsJardimMarica}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-jardim-marica"
            />
          )}
        </div>
      </div>
      <div className="box-step">
        <Text.Heading4Bold>JARDIM SANTA TEREZA</Text.Heading4Bold>
        <div className="svg-bubble">
          {buildingsJardimSantaTereza?.length !== 0 && (
            <Bubble
              buildingsData={buildingsJardimSantaTereza}
              setConstructionSelected={setConstructionSelected}
              reference="bubble-jardim-santa-tereza"
            />
          )}
        </div>
      </div>

    </Style.StepContainer>
  );
};

export default BuildingNeighbordhoods;
