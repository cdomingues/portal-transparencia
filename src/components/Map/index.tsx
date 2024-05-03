import React, { ReactNode } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { renderToString } from "react-dom/server";
import { FaMapMarkerAlt } from "react-icons/fa";

/* const customIcon = L.divIcon({
  className: "leaflet-custom-icon",
  html: renderToString(<FaMapMarkerAlt fontSize={30} color="#B21511" />),
}); */

const activeIcon = L.divIcon({
  className: "leaflet-custom-icon",
  html: renderToString(<FaMapMarkerAlt fontSize={30} color="rgb(35, 5, 132)" />),
});

const inactiveIcon = L.divIcon({
  className: "leaflet-custom-icon",
  html: renderToString(<FaMapMarkerAlt fontSize={30} color="#B21511" />),
});


export function ChangeView({ coords }: { coords: Array<number> }) {
  const map = useMap();
  map.setView({ lat: coords[0], lng: coords[1] }, 12.5);
  return null;
}

export default function Map({
  coords,
  markers = [],
  radarStatus = "Em operação", // Valor padrão definido como "Em operação"
}: {
  coords: Array<number>;
  markers?: Array<{ lat: number; lng: number; children?: ReactNode; status?: string }>; // Adicionado status como opcional na tipagem de markers
  radarStatus?: string;
}) {
  return (
    <MapContainer style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
        subdomains={["mt0", "mt1", "mt2", "mt3"]}
      />
      {markers.map(({ lat, lng, children, status }, index) => {
        // Verifica se status foi fornecido no marcador, senão usa radarStatus
        const icon = status === undefined ? (radarStatus === 'Em operação' ? activeIcon : inactiveIcon) : (status === 'Em operação' ? activeIcon : inactiveIcon);
        return (
          <Marker icon={icon} key={index} position={{ lat, lng }}>
            <Popup>{children}</Popup>
          </Marker>
        );
      })}
      <ChangeView coords={coords} />
    </MapContainer>
  );
}