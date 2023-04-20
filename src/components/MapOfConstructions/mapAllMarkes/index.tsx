import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import { useFileCSVContext } from "../../../context/fileCsv";
import useWindowDimensions from "../../../utils/useWindowDimensions";
import "leaflet/dist/leaflet.css";

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
  const center = [-23.5248, -46.1871];

  const icon = L.divIcon({ className: "icon-marker" });

  const file = useFileCSVContext();

  const translatorIcon = (value: string) => {
    const translator: any = {
      "Espacio Público": L.divIcon({ className: "icon-marker public-place" }),
      Escuelas: L.divIcon({ className: "icon-marker education" }),
      Vivienda: L.divIcon({ className: "icon-marker education" }),
      "Hidráulica e Infraestructura": L.divIcon({ className: "icon-marker" }),
      Arquitectura: L.divIcon({ className: "icon-marker" }),
    };

    return translator[value] ? translator[value] : icon;
  };

  const filteredNameValues = nameOrDescriptionConstruction
    ? file?.result?.records.filter((item: any) =>
        item?.Nome?.toLowerCase().includes(
          nameOrDescriptionConstruction.toLowerCase()
        )
      )
    : null;
  const filteredDescriptionValues = nameOrDescriptionConstruction
    ? file?.result?.records.filter((item: any) =>
        item?.Descrição?.toLowerCase().includes(
          nameOrDescriptionConstruction.toLowerCase()
        )
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
    <div style={{ height: "600px", width: "100%", zIndex: 0 }}>
      <MapContainer
        className="map-style"
        zoom={ZOOM_LEVEL}
        scrollWheelZoom={false}
        dragging={width > 576 ? true : false}
      >
        <TileLayer url="https://api.mapbox.com/styles/v1/vinicius-branco/cl9qfukhg001g15nyia8uwz7c/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidmluaWNpdXMtYnJhbmNvIiwiYSI6ImNsMXZrZnYzNDA3YmMzanBmbXc2ZHBucGEifQ.XPwHy2qNrLE4bpGajye3qg" />
        {filteredValues?.map((item: any, index: number) => (
          <Marker
            key={index}
            position={[item.lat, item.lng]}
            icon={translatorIcon(item.Categoria)}
            eventHandlers={{
              click: (e) => {
                setConstructionSelected(item);
              },
            }}
          ></Marker>
        ))}
        <ChangeView coords={center} />
      </MapContainer>
    </div>
  );
};

export default MapAllMarkersComponent;
