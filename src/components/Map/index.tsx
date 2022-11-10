import React, { ReactNode } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import mapMarker from "../../assets/images/map_marker.png";

var markerIcon = L.icon({
  iconUrl: mapMarker.src,
  iconSize: [38, 38], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
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
      <TileLayer url="https://api.mapbox.com/styles/v1/vinicius-branco/cl9qfukhg001g15nyia8uwz7c/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidmluaWNpdXMtYnJhbmNvIiwiYSI6ImNsMXZrZnYzNDA3YmMzanBmbXc2ZHBucGEifQ.XPwHy2qNrLE4bpGajye3qg" />
      {markers.map(({ lat, lng, children }, index) => {
        return (
          <Marker icon={markerIcon} key={index} position={{ lat, lng }}>
            <Popup>{children}</Popup>
          </Marker>
        );
      })}
      <ChangeView coords={coords} />
    </MapContainer>
  );
}
