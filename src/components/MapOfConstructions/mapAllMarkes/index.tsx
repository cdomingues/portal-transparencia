import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import useWindowDimensions from "../../../utils/useWindowDimensions";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import React from "react";

type Props = {
  setConstructionSelected: any;
  nameOrDescriptionConstruction: string;
  directionConstruction: string;
  value: string;
  step: string;
  program: string;
};

interface Construction {
  ano_licitacao: number;
  bairro: string;
  bairro_desc: string;
  beneficiarios?: string;
  categoria: string;
  cnpj: string;
  compromisso_mandato?: string;
  concluida: boolean;
  conclusao_ate: string;
  created_at: Date;
  data_conclusao_real?: string;
  descricao_da_obra: string;
  destaque?: string;
  distrito_desc: string;
  endereco: string;
  escopo_da_obra: string;
  estudo_ambiental?: string;
  financiamento_externo?: string;
  fonte_recurso: string;
  id: string;
  image: string;
  inicio_ate: string;
  lat: number;
  latitude_longitude: string;
  link: string;
  lng: number;
  localizacao: string;
  mao_de_obra: number;
  nome_da_obra: string;
  numero_concorrencia: string;
  numero_contrato: string;
  numero_convenio: string;
  numero_licitacao: string;
  numero_processo: string;
  observacao: string;
  orgao_responsavel: string;
  programa_ppa: string;
  razao_social_contratada: string;
  secretaria_responsavel: string;
  situacao: string;
  status: string;
  sub_categoria: string;
  tipo: string;
  tipo_licitacao?: string;
  titulo: string;
  updated_at: Date;
  valor_contrato: number;
  valor_convenio_financiamento?: number;
  valor_recurso_proprio: number;
  valoraditamento: string;
  valorexecutado: string;
  valorreajuste: string;
  _id: number;
}

export function ChangeView({ coords }: { coords: Array<number> }) {
  const map = useMap();
  map.setView({ lat: coords[0], lng: coords[1] }, 12.5);
  return null;
}

const MapAllMarkersComponent = ({
  nameOrDescriptionConstruction,
  directionConstruction,
  setConstructionSelected,
  value,
  step,
  program,
}: Props) => {
  const [constructions, setConstructions] = useState<Construction[] | []>([]);
  const [constructionsFiltered, setConstructionsFiltered] = useState<
    Construction[]
  >([]);
  const center = [-23.5248, -46.1871];

  const icon = L.divIcon({ className: "icon-marker" });

  /* const getFileOfConstructions = async () => {
    const response = await fetch(
      "https://dadosadm.mogidascruzes.sp.gov.br/api/obras/",
      
      {
        headers: {
          "Authorization": "Token 691239ed466fd053651a57ac9c075f0d80c25cdd"
        }
      }
    );

    const data = await response.json();

    if (!data) {
      return;
    }
    setConstructionsFiltered(data?.results || []);
    return setConstructions(data?.results || []);
  }; */
  const getFileOfConstructions = async () => {
    let allResults: any[] = [];
  
    for (let page = 1; page <= 3; page++) {
      const response = await fetch(
        `https://dadosadm.mogidascruzes.sp.gov.br/api/obras/?page=${page}`,
        {
          headers: {
            Authorization: "Token 691239ed466fd053651a57ac9c075f0d80c25cdd",
          },
        }
      );
  
      const data = await response.json();
  
      if (!data.results || data.results.length === 0) {
        // Se não houver mais resultados, saia do loop
        break;
      }
  
      // Adicione os resultados da página atual ao array allResults
      allResults = [...allResults, ...data.results];
    }
  
    // Defina os resultados filtrados e não filtrados conforme necessário
    setConstructionsFiltered(allResults);
    setConstructions(allResults);
  
    return allResults;
  };

  useEffect(() => {
    getFileOfConstructions();
  }, []);

  useEffect(() => {
    filterAll();
  }, [
    step,
    value,
    program,
    directionConstruction,
    nameOrDescriptionConstruction,
  ]);

  const translatorIcon = (value: string) => {
    const translator: any = {
      
      
      "e2951a19-2fe6-414d-bdb6-03cb038a2f60": L.divIcon({ className: "icon-marker health" }),//3100 - SAÚDE
      "2afecc1c-084f-4c05-824c-e4b58071c8a1": L.divIcon({ className: "icon-marker security" }), //004 - SEGURANÇA
      "f8d4a8b6-389e-4ce4-96ac-79ae9079f4ad": L.divIcon({ className: "icon-marker sport" }),//3003 - ESPORTE
      "22b5289e-990e-4e13-8ec4-9c479461eb3d": L.divIcon({className: "icon-marker mobility",}),//2007 - MOBILIDADE URBANA
      "207706189-eb23-4195-8051-60350e124bd7": L.divIcon({className: "icon-marker environmental",}),//2006 - SANEAMENTO AMBIENTAL
      "f30943c4-fbef-4f0f-9343-17315b896058": L.divIcon({className: "icon-marker infrastructure",}),//2004 - INFRAESTRUTURA
      "78c05dc2-73dc-4d92-b5f5-e7fdd330bd6c": L.divIcon({className: "icon-marker inovation",}), //2001 - CIDADE INTELIGENTE
      "5365203c-6e94-42b9-b0de-e04ce713c742": L.divIcon({className: "icon-marker efficient", }),//2000 - MOGI EFICIENTE
      "2db3ac4b-97c1-4342-a59b-8283f227524b": L.divIcon({ className: "icon-marker steps" }), //1001 - PRIMEIROS PASSOS
      "e6c84d7c-5ac3-42eb-87cf-19375f4d83d9": L.divIcon({ className: "icon-marker education" }), //1000 - EDUCA MOGI
    };

    return translator[value] ? translator[value] : icon;
  };

  const filterAll = () => {
    const valueSplited = value.split("_");
    const label = valueSplited[0];
    const currentValue = Number(valueSplited[1]);

    const isLessThan = label === "above" ? false : true;

    const filtered = constructions.filter((item) => {
      const stepMatch = step
        ? step?.toLowerCase() === item.situacao?.toLowerCase()
        : true;

      const programMatch = program ? program === item?.programa_ppa : true;

      const addressMatch = directionConstruction
        ? item?.endereco
            ?.toLowerCase()
            .includes(directionConstruction.toLowerCase())
        : true;

      const nameMatch = !nameOrDescriptionConstruction
        ? true
        : item?.nome_da_obra
            .toLowerCase()
            .includes(nameOrDescriptionConstruction.toLowerCase())
        ? item?.nome_da_obra
            .toLowerCase()
            .includes(nameOrDescriptionConstruction.toLowerCase())
        : item?.descricao_da_obra
            .toLowerCase()
            .includes(nameOrDescriptionConstruction.toLowerCase());

      const valueMatch = !currentValue
        ? true
        : isLessThan
        ? item?.valor_contrato <= currentValue
        : item?.valor_contrato > currentValue;

      return (
        stepMatch && programMatch && addressMatch && nameMatch && valueMatch
      );
    });

    setConstructionsFiltered(filtered);
  };

  const { width } = useWindowDimensions();

  const ZOOM_LEVEL = width > 576 ? 14 : 12;

  return (
    <div
      style={{
        height: "740px",
        width: "100%",
        zIndex: 0,
      }}
    >
      <MapContainer
        className="map-style"
        zoom={ZOOM_LEVEL}
        scrollWheelZoom={false}
        dragging={width > 576 ? true : false}
      >
        <TileLayer url="https://api.mapbox.com/styles/v1/vinicius-branco/cl9qfukhg001g15nyia8uwz7c/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidmluaWNpdXMtYnJhbmNvIiwiYSI6ImNsMXZrZnYzNDA3YmMzanBmbXc2ZHBucGEifQ.XPwHy2qNrLE4bpGajye3qg" />
        {constructionsFiltered?.map((item, index: number) => {
          const geoSplited = item?.latitude_longitude?.split(",");

          const latitude = geoSplited?.[0]
            ? Number(geoSplited[0])
            : -23.510053316336844;
          const longitude = geoSplited?.[1]
            ? Number(geoSplited[1])
            : -46.193725156990325;

          return (
            <Marker
              key={index}
              position={[latitude, longitude]}
              icon={translatorIcon(item?.programa_ppa)}
              eventHandlers={{
                click: (e) => {
                  setConstructionSelected(item);
                },
              }}
            ></Marker>
          );
        })}
        <ChangeView coords={center} />
      </MapContainer>
    </div>
  );
};

export default MapAllMarkersComponent;
