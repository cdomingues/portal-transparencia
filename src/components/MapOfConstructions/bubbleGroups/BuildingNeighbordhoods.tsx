import * as Style from "./styles";
import * as Text from "../../../styles/text";
import Bubble from "./components/BubbleNeighbordhoods";
import { useMemo } from "react";
import colors from "../../../styles/colors";

const BuildingNeighbordhoods = ({
  setConstructionSelected,
  filteredValues,
}: any) => {
  const translatorColor = (value: string) => {
    const translator: { [key: string]: string } = {
      '2006 - SANEAMENTO AMBIENTAL': colors.programColors.green,
      '2004 - INFRAESTRUTURA': colors.programColors.purple,
      '2000 - MOGI EFICIENTE': colors.programColors.pink,
      '3100 - SAÚDE': colors.programColors.blueLight,
      '3003 - ESPORTE': colors.programColors.red,
      '2007 - MOBILIDADE URBANA': colors.programColors.orange,
      '3004 - SEGURANÇA': colors.programColors.blue,
      '2001 - CIDADE INTELIGENTE': colors.programColors.greeLight,
      '1001 - PRIMEIROS PASSOS': colors.programColors.yellow,
      '1000 - EDUCA MOGI': colors.randomColors.blue,
    };

    return translator[value] ? translator[value] : colors.graySemiMedium;
  };

  let buildingsMorumbi = useMemo(
    () =>
      filteredValues
        ?.filter((item: any) =>
          item?.bairro_desc?.toUpperCase()?.includes("PARQUE MORUMBI")
        )
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
        ?.filter((item: any) =>
          item?.bairro_desc?.toUpperCase()?.includes("JUNDIAPEBA")
        )
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
        ?.filter((item: any) =>
          item?.bairro_desc?.toUpperCase()?.includes("BOTUJURU")
        )
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
        ?.filter((item: any) =>
          item?.bairro_desc?.toUpperCase()?.includes("SANTO ÂNGELO")
        )
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
        ?.filter((item: any) =>
          item?.bairro_desc?.toUpperCase()?.includes("FAZENDA RODEIO")
        )
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
        ?.filter((item: any) =>
          item?.bairro_desc?.toUpperCase()?.includes("NOVA MOGILAR")
        )
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
        ?.filter((item: any) =>
          item?.bairro_desc?.toUpperCase()?.includes("BRAZ CUBAS")
        )
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
        ?.filter((item: any) =>
          item?.bairro_desc?.toUpperCase()?.includes("NOVA JUNDIAPEBA")
        )
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
        ?.filter((item: any) =>
          item?.bairro_desc?.toUpperCase()?.includes("SOCORRO")
        )
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
        ?.filter((item: any) =>
          item?.bairro_desc?.toUpperCase()?.includes("CEZAR DE SOUZA")
        )
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
        ?.filter((item: any) =>
          item?.bairro_desc?.toUpperCase()?.includes("CENTRO")
        )
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
        ?.filter((item: any) =>
          item?.bairro_desc?.toUpperCase()?.includes("MOGI MODERNO")
        )
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
        ?.filter((item: any) =>
          item?.bairro_desc?.toUpperCase()?.includes("TAIAÇUPEBA")
        )
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
        ?.filter((item: any) =>
          item?.bairro_desc?.toUpperCase()?.includes("VILA NATAL")
        )
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
        ?.filter((item: any) =>
          item?.bairro_desc?.toUpperCase()?.includes("CONJUNTO SANTO ÂNGELO")
        )
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
        ?.filter((item: any) =>
          item?.bairro_desc?.toUpperCase()?.includes("PARQUE OLÍMPICO")
        )
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
        ?.filter((item: any) =>
          item?.bairro_desc?.toUpperCase()?.includes("VILA CINTRA")
        )
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
        ?.filter((item: any) =>
          item?.bairro_desc?.toUpperCase()?.includes("TABOÃO")
        )
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
        ?.filter((item: any) =>
          item?.bairro_desc?.toUpperCase()?.includes("JARDIM ARACY")
        )
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
        ?.filter((item: any) =>
          item?.bairro_desc?.toUpperCase()?.includes("VILA LAVÍNIA")
        )
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
        ?.filter((item: any) =>
          item?.bairro_desc?.toUpperCase()?.includes("JARDIM AEROPORTO")
        )
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
        ?.filter((item: any) =>
          item?.bairro_desc?.toUpperCase()?.includes("CHÁCARA GUANABARA")
        )
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
        ?.filter((item: any) =>
          item?.bairro_desc
            ?.toUpperCase()
            ?.includes("RESIDENCIAL NOVO HORIZONTE")
        )
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
        ?.filter((item: any) =>
          item?.bairro_desc?.toUpperCase()?.includes("JARDIM MARICÁ")
        )
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
        ?.filter((item: any) =>
          item?.bairro_desc?.toUpperCase()?.includes("JARDIM SANTA TEREZA")
        )
        ?.map((item: any) => {
          return {
            ...item,
            color: translatorColor(item?.programa_ppa),
          };
        }),
    [filteredValues]
  );

  return (
    <Style.StepContainerNeighbordhoods>
      <div className="box-step-neighbordhoods">
        <Text.Heading4Bold style={{ margin: '5px 0 0 5px' }}>PARQUE MORUMBI</Text.Heading4Bold>
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
      <div className="box-step-neighbordhoods">
        <Text.Heading4Bold style={{ margin: '5px 0 0 5px' }}>JUNDIAPEBA</Text.Heading4Bold>
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
      <div className="box-step-neighbordhoods">
        <Text.Heading4Bold style={{ margin: '5px 0 0 5px' }}>BOTUJURU</Text.Heading4Bold>
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
      <div className="box-step-neighbordhoods">
        <Text.Heading4Bold style={{ margin: '5px 0 0 5px' }}>SANTO ÂNGELO</Text.Heading4Bold>
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
      <div className="box-step-neighbordhoods">
        <Text.Heading4Bold style={{ margin: '5px 0 0 5px' }}>FAZENDA RODEIO</Text.Heading4Bold>
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
      <div className="box-step-neighbordhoods">
        <Text.Heading4Bold style={{ margin: '5px 0 0 5px' }}>NOVA MOGILAR</Text.Heading4Bold>
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
      <div className="box-step-neighbordhoods">
        <Text.Heading4Bold style={{ margin: '5px 0 0 5px' }}>BRAZ CUBAS</Text.Heading4Bold>
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
      <div className="box-step-neighbordhoods">
        <Text.Heading4Bold style={{ margin: '5px 0 0 5px' }}>NOVA JUNDIAPEBA</Text.Heading4Bold>
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
      <div className="box-step-neighbordhoods">
        <Text.Heading4Bold style={{ margin: '5px 0 0 5px' }}>SOCORRO</Text.Heading4Bold>
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
      <div className="box-step-neighbordhoods">
        <Text.Heading4Bold style={{ margin: '5px 0 0 5px' }}>CEZAR DE SOUZA</Text.Heading4Bold>
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
      <div className="box-step-neighbordhoods">
        <Text.Heading4Bold style={{ margin: '5px 0 0 5px' }}>CENTRO</Text.Heading4Bold>
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
      <div className="box-step-neighbordhoods">
        <Text.Heading4Bold style={{ margin: '5px 0 0 5px' }}>MOGI MODERNO</Text.Heading4Bold>
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
      <div className="box-step-neighbordhoods">
        <Text.Heading4Bold style={{ margin: '5px 0 0 5px' }}>TAIAÇUPEBA</Text.Heading4Bold>
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
      <div className="box-step-neighbordhoods">
        <Text.Heading4Bold style={{ margin: '5px 0 0 5px' }}>VILA NATAL</Text.Heading4Bold>
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
      <div className="box-step-neighbordhoods">
        <Text.Heading4Bold style={{ margin: '5px 0 0 5px' }}>CONJ. SANTO ÂNGELO</Text.Heading4Bold>
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
      <div className="box-step-neighbordhoods">
        <Text.Heading4Bold style={{ margin: '5px 0 0 5px' }}>PARQUE OLÍMPICO</Text.Heading4Bold>
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
      <div className="box-step-neighbordhoods">
        <Text.Heading4Bold style={{ margin: '5px 0 0 5px' }}>VILA CINTRA</Text.Heading4Bold>
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
      <div className="box-step-neighbordhoods">
        <Text.Heading4Bold style={{ margin: '5px 0 0 5px' }}>TABOÃO</Text.Heading4Bold>
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
      <div className="box-step-neighbordhoods">
        <Text.Heading4Bold style={{ margin: '5px 0 0 5px' }}>JARDIM ARACY</Text.Heading4Bold>
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
      <div className="box-step-neighbordhoods">
        <Text.Heading4Bold style={{ margin: '5px 0 0 5px' }}>VILA LAVÍNIA</Text.Heading4Bold>
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
      <div className="box-step-neighbordhoods">
        <Text.Heading4Bold style={{ margin: '5px 0 0 5px' }}>JARDIM AEROPORTO</Text.Heading4Bold>
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
      <div className="box-step-neighbordhoods">
        <Text.Heading4Bold style={{ margin: '5px 0 0 5px' }}>CHÁCARA GUANABARA</Text.Heading4Bold>
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
      <div className="box-step-neighbordhoods">
        <Text.Heading4Bold style={{ margin: '5px 0 0 5px' }}>RES. NOVO HORIZONTE</Text.Heading4Bold>
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
      <div className="box-step-neighbordhoods">
        <Text.Heading4Bold style={{ margin: '5px 0 0 5px' }}>JARDIM MARICÁ</Text.Heading4Bold>
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
      <div className="box-step-neighbordhoods">
        <Text.Heading4Bold style={{ margin: '5px 0 0 5px' }}>JARDIM SANTA TEREZA</Text.Heading4Bold>
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
    </Style.StepContainerNeighbordhoods>
  );
};

export default BuildingNeighbordhoods;
