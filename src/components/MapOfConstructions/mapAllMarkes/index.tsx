import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import useWindowDimensions from "../../../utils/useWindowDimensions";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import axios from "axios";
import request from "../../../utils/request";
import colors from "../../../styles/colors";

type Props = {
  setConstructionSelected: any;
  nameOrDescriptionConstruction: string;
  directionConstruction: string;
};

export function ChangeView({ coords }: { coords: Array<number> }) {
  const map = useMap();
  map.setView({ lat: coords[0], lng: coords[1] }, 12.5);
  return null;
}

const MapAllMarkersComponent = ({
  nameOrDescriptionConstruction,
  directionConstruction,
  setConstructionSelected,
}: Props) => {
  const [file, setFile] = useState<any>();
  const center = [-23.5248, -46.1871];

  const icon = L.divIcon({ className: "icon-marker" });

  const getFileOfConstructions = async () => {
    const { data } = await request({
      baseURL:
        "https://dados.mogidascruzes.sp.gov.br/api/3/action/datastore_search?resource_id=2a3f2bc3-551b-434d-89c7-a31da90d7e1f",
    });

    if (!data) {
      return;
    }
    return setFile(data);
  };

  useEffect(() => {
    getFileOfConstructions();
  }, []);


  const translatorIcon = (value: string) => {
    const translator: any = {
      '2006 - SANEAMENTO AMBIENTAL':L.divIcon({ className: "icon-marker environmental" }),
      '2004 - INFRAESTRUTURA':L.divIcon({ className: "icon-marker infrastructure" }),
      '2000 - MOGI EFICIENTE':L.divIcon({ className: "icon-marker efficient" }),
      '3100 - SAÚDE':L.divIcon({ className: "icon-marker health" }),
      '3003 - ESPORTE':L.divIcon({ className: "icon-marker sport" }),
      '2007 - MOBILIDADE URBANA':L.divIcon({ className: "icon-marker mobility" }),
      '3004 - SEGURANÇA':L.divIcon({ className: "icon-marker security" }),
      '2001 - CIDADE INTELIGENTE':L.divIcon({ className: "icon-marker inovation" }),
      '1001 - PRIMEIROS PASSOS':L.divIcon({ className: "icon-marker steps" })
    };

    return translator[value] ? translator[value] : icon;
  };

  const filteredNameValues = nameOrDescriptionConstruction
    ? file?.result?.records.filter((item: any) =>
        item?.nome_da_obra
          ?.toLowerCase()
          .includes(nameOrDescriptionConstruction.toLowerCase())
      )
    : null;

  const filteredDescriptionValues = nameOrDescriptionConstruction
    ? file?.result?.records.filter((item: any) =>
        item?.descricao_da_obra
          ?.toLowerCase()
          .includes(nameOrDescriptionConstruction.toLowerCase())
      )
    : null;

  const filteredDirectionValues = directionConstruction
    ? file?.result?.records.filter((item: any) =>
        item?.endereco
          ?.toLowerCase()
          .includes(directionConstruction.toLowerCase())
      )
    : null;

  const filteredValues =
    filteredNameValues ||
    filteredDescriptionValues ||
    filteredDirectionValues ||
    file?.result?.records;

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
        {filteredValues?.map((item: any, index: number) => {
          const geoSplited = item?.latitude_longitude?.split(",");
    

          return (
            <Marker
              key={index}
              position={[
                geoSplited?.[0] ? geoSplited?.[0] : "-23.510053316336844",
                geoSplited?.[1] ? geoSplited?.[1] : "-46.193725156990325",
              ]}
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
