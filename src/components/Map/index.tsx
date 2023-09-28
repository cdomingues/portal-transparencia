import React, { ReactNode } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { renderToString } from "react-dom/server";
import { FaMapMarkerAlt } from "react-icons/fa";

const customIcon = L.divIcon({
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
}: {
  coords: Array<number>;
  markers?: Array<{ lat: number; lng: number; children?: ReactNode }>;
}) {
  return (
    <MapContainer style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
        subdomains={["mt0", "mt1", "mt2", "mt3"]}
      />
      {markers.map(({ lat, lng, children }, index) => {
        return (
          <Marker icon={customIcon} key={index} position={{ lat, lng }}>
            <Popup>{children}</Popup>
          </Marker>
        );
      })}
      <ChangeView coords={coords} />
    </MapContainer>
  );
}
